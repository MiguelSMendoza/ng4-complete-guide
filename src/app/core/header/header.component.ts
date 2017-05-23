import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'app/recipes/recipe.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from 'app/auth/auth.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}