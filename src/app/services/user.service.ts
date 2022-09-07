import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


const baseUrlUser = 'https://admin.eniola.app/api/v1/login';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

//---- get user_detail and store to sessionStorage ---//
  userdetail(email: string, password: string){

      //--- for cors error we need to pass headers----///
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*')

   return this.http.post(`${baseUrlUser}`,{ email: email, password: password },{headers: headers})

  }

 // Getting user through session id
 getStatus(){
  if(sessionStorage.getItem('Session')){
    return true
  }
  else{
    return false
  }
}
}
