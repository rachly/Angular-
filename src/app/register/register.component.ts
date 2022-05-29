import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompareP } from '../models/CompareP';
import { User } from '../models/User';

import { UserService } from '../user.service';
//import {ConfirmValidation } from 'src/confirmValidation';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   ngOnInit(): void {
     let name=this.UserS.name;
     this.myForm=new FormGroup({
    "CodeU":new FormControl("",Validators.required),
    "NameU":new FormControl(name),
    "Adress":new FormControl(""),
    "Email":new FormControl("",Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$‏'),Validators.required])),
    "password":new FormControl("",Validators.required),
    "password1":new FormControl("",Validators.required)
    },CompareP.compare("password","password1"));
    
    
  }
myForm:FormGroup;
constructor(private UserS:UserService,private router:Router,private acctiveRoute:ActivatedRoute) { }
save(){
  //var NUser=new User(this.myForm.value.CodeU,this.myForm.value.NameU,this.myForm.value.Adress,this.myForm.value.Email,this.myForm.value.password);
  this.UserS.register(this.myForm.value).subscribe
  (s=>{if(s==1){alert("משתמש קיים!")}
   if(s==0) {
    this.UserS.getuserbyCode(parseInt(this.myForm.value.CodeU)).subscribe(s => {
      console.log(s);
      sessionStorage.setItem("currentUser",JSON.stringify(s));         
      this.router.navigate(["allRecipe"])} , e => { console.log(e) })
      }  
    } 
     ,e=>{console.log(e)})

  // this.myForm.reset();
 }
}
