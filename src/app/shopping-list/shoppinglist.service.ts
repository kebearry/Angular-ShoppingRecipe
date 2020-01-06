import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../common/ingredient.model';
@Injectable()
export class ShoppingListService{
    //list of ingredients, add ingredient method
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice(); //need to remove slice cuz slice makes changes to the copy instead
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients) //spread ingredients to a list of single ingredient
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}