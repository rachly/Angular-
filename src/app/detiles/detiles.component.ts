import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import { User } from '../models/User';
@Component({
  selector: 'app-detiles',
  templateUrl: './detiles.component.html',
  styleUrls: ['./detiles.component.css']
})
export class DetilesComponent implements OnInit {
re:Recipe
userM:User;
  constructor(public s:AllService ,public ret:Router) {
    this. userM=JSON.parse(sessionStorage.getItem("currentUser"));
   }

  ngOnInit(): void {
    this.re=this.s.Recipes;
    this.level(this.re.Darga);
  } 
  
  getEdit(){
  if(this.re.CodeU==this.userM.CodeU){
     this.s.Recipes={...this.re};
      this.ret.navigate(["app-edit"]); 
  }
  else{
      alert("לא הכנסת את המתכון אין באפשרותך לערוך ");
  }
 
     }

 pic=[];
 level(d){
   for(let i=0;i<d;i++){
    this.pic[i]="../../assets/כוכבא..png";
   }
   for(let i=d;i<5;i++){
    this.pic[i]="../../assets/star.png";
  }
  console.log(this.pic);
   }
   asian(){
    if (this.re.CodeC==1)
    return true;
    return false;
  }
  aitaly(){
    if (this.re.CodeC==2)  
     return true;
   return false;
 }
 isrealy(){
  if (this.re.CodeC==3)  
   return true;
   return false;
 }




 }




