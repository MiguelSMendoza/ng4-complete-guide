import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  ENDPOINT = 'https://recipe-book-ca401.firebaseio.com/';

  constructor(private http: Http, private recipeServices: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(this.ENDPOINT + 'recipes.json?auth=' + token, this.recipeServices.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get(this.ENDPOINT + 'recipes.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeServices.setRecipes(recipes);
      }
    );
  }
}
