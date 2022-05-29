import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetilesRComponent } from './detiles-r/detiles-r.component';
import { Routes, RouterModule } from '@angular/router';
import { DetilesComponent } from './detiles/detiles.component';
import { AddRComponent } from './add-r/add-r.component';
import { EditComponent } from './edit/edit.component';
import { HoursPipe } from './hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    DetilesRComponent,
    DetilesComponent,
    AddRComponent,
    EditComponent,
    HoursPipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,   
    //RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
