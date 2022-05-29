import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  [x: string]: any;

  constructor(private Http:HttpClient) { }
  Recipes=new Recipe(null,null,null,null,null,null,null,null,null,null,null);
  all(){
    return this.Http.get<Recipe[]>("https://localhost:44314/api/Recipe/getallRecipes");
  }
   add(R:Recipe ){
     return this.Http.post<number>("https://localhost:44314/api/Recipe/AddR",R);
   }
   editS(R:Recipe ){
    return this.Http.post<any>("https://localhost:44314/api/Recipe/editR",R);
  }




}
