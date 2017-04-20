import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg'),
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg'),
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
