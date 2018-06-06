import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private  recipes: Recipe[] = [
    new Recipe(
        'Tasty food',
        'A super tasty recipe, please try it',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1504124264%2Fcreamy-chicken-wild-rice-soup-1710p37.jpg%3Fitok%3DcTdQ4bh2&w=800&q=85',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',10)
        ]
        ),
    new Recipe(
        'What else you need!',
        'What else you need!',
        'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2015/03/shakshouka-3.jpg',
        [
            new Ingredient('Eggs',7),
            new Ingredient('Bread',8)
        ]
        )
  ];

  constructor(private slService : ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredientToList(ingredients);
  }
}