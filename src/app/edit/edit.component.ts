import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  arrP:string[]=[""];
  arrL:string[]=[""];
  
  FormE:FormGroup;  
  recipeToEdit:Recipe;
  ngOnInit(): void {
   this.on();
  
  }
  on(){
    this.recipeToEdit={...this.ser.Recipes};
  this.FormE=new FormGroup({
    "CodeR":new FormControl(this.recipeToEdit.CodeR,Validators.required),
    "NameR":new FormControl(this.recipeToEdit.NameR,Validators.required),
    "CodeC":new FormControl(this.recipeToEdit.CodeC,Validators.required),
    "Time":new FormControl(this.recipeToEdit.Time,Validators.required),
    "Darga":new FormControl(this.recipeToEdit.Darga,Validators.required),
    "DataAdd":new FormControl(this.recipeToEdit.DataAdd,Validators.required),
  });
  this.arrL=[...this.recipeToEdit.ListComponent];
  this.arrP=[...this.recipeToEdit.preparationM];
  }
  
  saveC(){
    const Form={...this.FormE.value};  
    Form["preparationM"]=[...this.arrP];
    Form["ListComponent"]=[...this.arrL];
    Form["image"]=this.recipeToEdit.image;
    this.ser.editS(Form).subscribe(
    s=>{this.sweet(),this.ret.navigate(["allRecipe"])},e=>console.log(e))      
  }
  sweet(){
    Swal.fire({    
      icon: 'success',
      title: 'המוצר נמחק בהצלחה',
      showConfirmButton: false,
      timer: 1500
    })
   }

  cencel(){
    this.on();
  }
  updatePre(){
    console.log(this.arrP);
    this.arrP=this.arrP.filter(item=>item!="")
    this.arrP.push("");
    console.log(this.arrP);
  }
  updateList(){
    console.log(this.arrL);
    this.arrL=this.arrL.filter(item=>item!="")
    this.arrL.push("");
    console.log(this.arrL);
  }
  trackByidx(index){
    return index;
    }
 constructor(public ser:AllService, public ret:Router) { }
}
