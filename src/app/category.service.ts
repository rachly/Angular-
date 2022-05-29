import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpC:HttpClient) { }

Allc(){
  return this.HttpC.get<Category[]>("https://localhost:44314/api/Category/getCatgury")
}

}
