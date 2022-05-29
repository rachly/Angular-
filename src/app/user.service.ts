import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  name="";
  constructor(private Http:HttpClient ) { 

  }
 
register(User:User){
  return this.Http.post<number>("https://localhost:44314/api/User/AddUser",User);   
}
ALL(User:User){
return this.Http.post<number>("https://localhost:44314/api/User/isRong",User);  
  }

getuserbyCode(CodeU: number) {
  return this.Http.get<User>("https://localhost:44314/api/User/GetUserById",{'params':  { 'code': CodeU.toString()} });
}

}
