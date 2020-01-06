import { ShoppingListService } from './../shoppinglist.service';
import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef
  
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){ //pass to shopping list component
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingredientName, ingredientAmt)
    this.slService.addIngredient(newIngredient);
  }
}
