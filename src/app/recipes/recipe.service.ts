import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg'),
        new Recipe('A More Real Recipe', 'This is still not real', 'http://images.kglobalservices.com/www.ricekrispies.com/en_us/recipe/kicrecipe-1605/recip_img-7547527_rkt-original-treats.jpg')
    ]; //holds recipe object, private so cannot get array from the outside

    getRecipes(){
        return this.recipes.slice(); //to access the copy only
    }
}