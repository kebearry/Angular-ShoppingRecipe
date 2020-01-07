import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shoppinglist.service';
import { Ingredient } from './../../common/ingredient.model';
import { NgForm } from '@angular/forms'
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm

  subscription: Subscription
  editMode = false;
  editedItemIdx: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIdx = index
          this.editedItem = this.slService.getIngredient(index)
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onAddItem(form: NgForm) { //pass to shopping list component
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //to prevent a memory leak
  }
}
