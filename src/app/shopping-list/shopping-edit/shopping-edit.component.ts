import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  startedEditingSubscription: Subscription;
  editMode = false;
  editItemIdex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editItemIdex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }

  onSubmit(f: NgForm) {
    const newIngredient = new Ingredient(
      f.value.name,
      f.value.amount
    );
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIdex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    f.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if(this.editMode) {
      this.shoppingListService.deleteIngredient(this.editItemIdex);
      this.onClear();
    }
  }

}
