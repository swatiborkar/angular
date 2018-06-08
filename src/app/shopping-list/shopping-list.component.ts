import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  ingredientsArr: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredientsArr =  this.shoppingListService.getIngredients();
   this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
     (ingredients: Ingredient[]) => {
       this.ingredientsArr = ingredients;
     }
   )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
