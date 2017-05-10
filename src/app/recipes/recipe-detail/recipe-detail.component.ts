import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  paramsSubscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  toShoppingList() {
    if (this.recipe !== undefined) {
      this.slService.addRecipe(this.recipe.ingredients);
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }


}
