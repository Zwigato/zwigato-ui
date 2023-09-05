import { FoodItem } from "./models/FoodItem";
import { Restaurant } from "./models/Restaurant";

export interface FoodCataloguePage{


      foodItemsList: FoodItem[];
      restaurant: Restaurant;

 }