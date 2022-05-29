import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { CategoryService } from '../category.service';
import { Category } from '../models/Category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-r',
  templateUrl:'./add-r.component.html',
  styleUrls: ['./add-r.component.css']
})
export class AddRComponent implements OnInit {
  ngOnInit(): void {
this.MyRecipe=new FormGroup({
  "CodeR":new FormControl("",Validators.required),
  "NameR":new FormControl("",Validators.required),
  "CodeC":new FormControl("",Validators.required),
  "Time":new FormControl("",Validators.required),
  "Darga":new FormControl("",Validators.required),
  "DataAdd":new FormControl("",Validators.required),
  "ListComponent":new FormControl("",Validators.required),
  "preparationM":new FormControl("",Validators.required),
  "CodeU":new FormControl("",Validators.required),
})
  }
  arrP:string[]=[""];
  arrL:string[]=[""];
  ArrC:Category[];
  MyRecipe:FormGroup;
 constructor(private  AllC:CategoryService, private AllS:AllService,private RouterR:Router)
  {
    this.AllC.Allc().subscribe(s=>{this.ArrC=s;console.log(s)},e=>{console.log(e)});
   }
 add(){
  this.arrP=this. arrP.filter(item=>item!="");
  this.arrL=this.arrL.filter(item=>item!="");
  const Form={...this.MyRecipe.value};
   Form["preparationM"]=[...this.arrP];
   Form["ListComponent"]=[...this.arrL];
   this.AllS.add(Form).subscribe(
     s=>{if(s==1){alert("שגיאה בהכנסת המתכון!")}this.sweet()
    if(s==0){this.RouterR.navigate(["allRecipe"])}},e=>{console.log(e)})   
   
    this.MyRecipe.reset();  
 }
 sweet(){
  let timerInterval
  Swal.fire({
    title: 'המתכון מתוסף כעת',
    html: 'תודה על השתתפותכם <b></b>',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          // if (b) {
          //   b.textContent = Swal.getTimerLeft()
          // }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
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
}
