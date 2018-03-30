import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [ 
    new Recipe('A Test Recipe', 'Testing Recipe Desc', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Second Test Recipe', 'Second Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXP3KTHHbSTI9kj6Yv_oiK_bzZWM7pOmBAdWuHeKgXTJeLl7ki'),
    new Recipe('Third Test Recipe', 'Third testing recipe description', 'https://www.brandcrowd.com/gallery/brands/pictures/picture13963851376591.png')];

  constructor() { }

  ngOnInit() {
  }

}
