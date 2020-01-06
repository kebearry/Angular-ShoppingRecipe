import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, //only if full path is empty
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipeStartComponent},
        { path: ':id', component: RecipeDetailComponent}
    ]},
    { path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}