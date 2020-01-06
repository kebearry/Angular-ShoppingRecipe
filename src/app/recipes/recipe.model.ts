import { Ingredient } from '../common/ingredient.model';

//blueprint for objects we create
export class Recipe {
    public name: string; //syntax for assigning type to typescript
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}