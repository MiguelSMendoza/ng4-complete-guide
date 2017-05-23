import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const shoppingListRoutes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
        {
            path: ':id',
            component: ShoppingEditComponent
        },
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule { }
