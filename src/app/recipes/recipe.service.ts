import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Bread', 1),
      new Ingredient('Chicken', 20)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}