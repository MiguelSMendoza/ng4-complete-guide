import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
