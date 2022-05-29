import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  this.Forml= new FormGroup({
    "CodeU":new FormControl("",Validators.required),
    "NameU":new FormControl("",Validators.required),
    "password": new FormControl("",Validators.required),
 });
}
  Forml:FormGroup;
  constructor(private UserL:UserService, private routerl:Router) { }
  
  send() {
    const name = this.Forml.value.NameU;
    this.UserL.ALL(this.Forml.value).subscribe(s => {
      if (s == 0) { this.sweet() }
      else
          if (s == 1) {
       this.UserL.getuserbyCode(parseInt(this.Forml.value.CodeU)).subscribe(s => {
          console.log(s);
          sessionStorage.setItem("currentUser",JSON.stringify(s));
         
          this.routerl.navigate(["allRecipe"]);
          }
           , e => { console.log(e) })
      }
      else if (s == 2) {
       this.UserL.name = name;
        this.routerl.navigate(["register"])

      }

    }, e => console.log(e));

  }





sweet(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'סיסמא שגויה',
    // footer: '<a href>Why do I have this issue?</a>'
  })
}

isShow=true;
myFunction(pass) {    
  if (pass.type === "password") {
   pass.type = "text";
  } else {
   pass.type = "password";

  }
this.isShow=!this.isShow;


}



}

