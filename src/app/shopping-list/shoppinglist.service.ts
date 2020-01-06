import { Injectable } from "@angular/core";
import { Ingredient } from '../common/ingredient.model';

@Injectable()
export class ShoppingListService{
    //list of ingredients, add ingredient method

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients //need to remove slice cuz slice makes changes to the copy instead
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient)
    }
}