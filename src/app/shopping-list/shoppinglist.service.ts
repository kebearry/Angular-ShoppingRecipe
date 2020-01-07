import { Injectable } from "@angular/core";
import { Subject } from 'rxjs'
import { Ingredient } from '../common/ingredient.model';
@Injectable()
export class ShoppingListService {
    //list of ingredients, add ingredient method
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice(); //need to remove slice cuz slice makes changes to the copy instead
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients) //spread ingredients to a list of single ingredient
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient; 
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1) //removing 1 element
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}