import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private  ingredientsArr: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',5)
  ];

  getIngredients(){
      return this.ingredientsArr.slice();
  }

  addIngredients(item: Ingredient){
      this.ingredientsArr.push(item);
      this.ingredientsChanged.next(this.ingredientsArr.slice());
  }

  addIngredientToList(item : Ingredient[]){
      this.ingredientsArr.push(...item);
      this.ingredientsChanged.next(this.ingredientsArr.slice());
  }
}