import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName:'',
    email:'',
    password:'',
    phone:'',
    country:'',
    state:'',
    city:'',
    street:'',
    h_no:'',
    zip:''
  };

  confirmPassword ={
    confirmPass:''
  }

  constructor(private http: HttpClient) { }

  //http methods

  postUser(user:User){
    console.log("Inside Postuser");
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl+'/authenticate',authCredentials);
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl+'/profile');
  }

  //helper methods

  setToken(token: string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1]);
      console.log(JSON.parse(userPayload));
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload){
      console.log(Date.now()/1000);
      return userPayload.exp > Date.now()/1000;
    }
    else
      return false;
  }
}