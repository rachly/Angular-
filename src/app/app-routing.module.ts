import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddRComponent } from './add-r/add-r.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { DetilesComponent } from './detiles/detiles.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'allRecipe',component:AllRecipesComponent},
{path:'register',component:RegisterComponent},
{path:'detiles',component:DetilesComponent},
{path:'add-r',component:AddRComponent},
{path:'app-edit',component:EditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
