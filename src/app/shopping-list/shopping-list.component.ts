import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient [] = [ new Ingredient('apples', 4),
                                new Ingredient('Onions', 3), new Ingredient('Cheese',7),
                                new Ingredient('Tomatoes',5)];
  constructor() { }

  ngOnInit() {
  }

}
