import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ,private router :Router) { }
  signUp(data:any):Observable<any>{
    return this.http.post(`http://localhost:8080/auth/sign-up`,data);
  }
  signIn(data:any):Observable<any>{
    
    return this.http.post(`http://localhost:8080/auth/sign-in`,data);
    
  }
  getProfile(){
    
    let headers={
      'Authorization': "Bearer" + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8080/auth/profile',{headers:headers})
   
  }
}
