import { Component } from '@angular/core';
import { Restaurant } from 'src/app/Shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];
  
  ngOnInit(){
    this.restaurantService.getAllRestaurants()
    .subscribe(
      data => {
        this.restaurantList = data;
      })
  }

  constructor(private router:Router, private restaurantService:RestaurantService){

  }

  getRandomImage(): string{
    const imageCount = 8;
    const randomIndex = Math.floor(Math.random() * (8 - 1 +1))+1;
    return randomIndex+'.jpg';
  }

  onButtonClick(id : number) {
    this.router.navigate(['/food-catalogue', id]);
  }
}
