import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../service/fooditem.service';
import { FoodCataloguePage } from 'src/app/Shared/FoodCataloguePage';
import { FoodItem } from 'src/app/Shared/models/FoodItem';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent {

  restaurantId: any;
  foodItemResponse : FoodCataloguePage;
  foodItemCart : FoodItem[] = [];
  orderSummary : FoodCataloguePage;

  constructor(private route: ActivatedRoute, private foodItemService: FooditemService, private router: Router) {
    //ActivatedRoute will be used to fetch id from route
  }

  ngOnInit(){
    console.log("Hi from Food Catalogue")
    this.route.paramMap.subscribe(params => {
      this.restaurantId = params.get('id');
    });
    
    this.getFoodItemsByRestaurant(this.restaurantId);
  }

  getFoodItemsByRestaurant(restaurant : number) {
    this.foodItemService.getFoodItemsByRestaurant(this.restaurantId).subscribe(
    data => {
      console.log('recieved a response')
      this.foodItemResponse = data;
    }
)
  }

  increment(food :any ){
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if(index === -1){
      //if record does not exist, add it to array
      this.foodItemCart.push(food);
    }else {
      // if record exist, update it in array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food : any){
  if(food.quantity>0)
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id)
      if(this.foodItemCart[index].quantity == 0){
        this.foodItemCart.splice(index, 1);
      } else {
        this.foodItemCart[index] = food;
      }
    }

    onCheckOut(){
        this.orderSummary = {
          foodItemsList: [],
          restaurant: {id:1}
        }

        this.orderSummary.foodItemsList = this.foodItemCart;
        this.orderSummary.restaurant = this.foodItemResponse.restaurant;
        this.router.navigate(['/orderSummary'], {queryParams:{data: JSON.stringify(this.orderSummary)}});
    }

}
