import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { AuthService } from 'app/auth/auth.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService
    ]
})
export class CoreModule { }
