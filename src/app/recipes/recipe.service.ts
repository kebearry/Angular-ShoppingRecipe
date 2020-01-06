import { ShoppingListService } from './../shopping-list/shoppinglist.service';
import { Ingredient } from './../common/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Caramel Cookie Cake',
            'This is a caramel cookie cake with rainbow sprinkles which tastes amazing',
            'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg',
            [
                new Ingredient('Caramel Cookie', 2),
                new Ingredient('Butter', 1),
            ]),
        new Recipe('Cereal Crisp',
            'This is made with premium cereal and it is really good',
            'http://images.kglobalservices.com/www.ricekrispies.com/en_us/recipe/kicrecipe-1605/recip_img-7547527_rkt-original-treats.jpg',
            [
                new Ingredient('Cereal Bar', 3),
                new Ingredient('Butter', 1),
            ])
    ]; //holds recipe object, private so cannot get array from the outside

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); //to access the copy only
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}