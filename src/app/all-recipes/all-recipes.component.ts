import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { CategoryService } from '../category.service';
import { Category } from '../models/Category';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  ArrR:Recipe [];
  filterList:Recipe[];
  name:string;
  listcatgury:Category[];
  codeC:number;
  time:number;
  constructor(public  All:AllService,public ca:CategoryService, private r:Router) { }
    all(){
      this.All.all().subscribe(s=>{this.ArrR=s,this.filterList=s},e=>console.log(e));
     }
 add(){
      this.r.navigate(["add-r"]); 
     }
  ngOnInit(): void {
    this.all();
    this.ca.Allc().subscribe(s=>this.listcatgury=s,e=>console.log(e));
  }

 f(){
   this.filterList=this.ArrR;
   if(this.name){
     this.filterList=this.filterList.filter(f=>f.NameR.indexOf(this.name)>0);
   }
   if(this.time){
     this.filterList=this.filterList.filter(f=>f.Time<=this.time);
   }
  if(this.codeC){
    if(this.codeC!=0){
      this.filterList.filter(f=>f.CodeC==Number(this.codeC));
    }
  }


 }


}
