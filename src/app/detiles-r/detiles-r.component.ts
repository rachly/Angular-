import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllRecipesComponent } from '../all-recipes/all-recipes.component';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import { User } from '../models/User';

@Component({
  selector: 'app-detiles-r',
  templateUrl: './detiles-r.component.html',
  styleUrls: ['./detiles-r.component.css']
})
export class  DetilesRComponent implements OnInit {
  @Input()
  MyRecipe:Recipe
  userM:User;
  // Recipess:Recipe
  constructor(public ser:AllService,public ret:Router, ) {
    this. userM=JSON.parse(sessionStorage.getItem("currentUser"));
   }
   
  getAlldetiels(){
    
 if(sessionStorage.getItem("currentUser").length>0){
 
  // console.log(sessionStorage.getItem("user")||JsonPipe); 
  this.ser.Recipes={...this.MyRecipe};
  this.ret.navigate(["detiles"]); 
    }
  else
    alert("login now");
    //  this.ret.navigate(["login"]); 
  
}

   
  ngOnInit(): void {
  }
 // showEdit(code:sessionStorage){
  //   if(code==this.re.CodeU){
  //     ?????
  //   }
  // }


}
