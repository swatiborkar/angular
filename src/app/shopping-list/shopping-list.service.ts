import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private  ingredientsArr: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',5)
  ];

  getIngredients(){
      return this.ingredientsArr.slice();
  }

  addIngredients(item: Ingredient){
      this.ingredientsArr.push(item);
      this.ingredientsChanged.emit(this.ingredientsArr.slice());
  }
}