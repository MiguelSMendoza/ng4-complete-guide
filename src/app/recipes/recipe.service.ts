import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { DataStorageService } from "app/shared/data-storage.service";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(2, 'A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe(3, 'A Test Recipe', 'This is simply a Test', 'https://i.ytimg.com/vi/3ZUFDOHp6Ho/maxresdefault.jpg',
    [
      new Ingredient('Bread', 1),
      new Ingredient('Chicken', 20)
    ])
  ];

  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    const id = Math.max.apply(Math, this.recipes.map(function(r){ return r.id; }));
    recipe.id = id + 1;
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe) {
    this.recipes.map(
      (s, index) => {
        if (s.id === newRecipe.id) {
          this.recipes[index] = newRecipe;
        }
      }
    );
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    let index = this.recipes.findIndex(x => x.id === id);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (s) => {
        return s.id === id;
      }
    );
    return recipe;
  }

}
