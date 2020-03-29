import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.css']
})
export class PwdComponent implements OnInit {

  success:boolean;
  serverErrorMsgs:string;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  changePassword = function(form:NgForm){
    console.log("Inside Password submitted");
    if(this.userService.selectedUser.password===this.userService.confirmPassword.confirmPass){
      this.userService.postUser(this.userService.selectedUser).subscribe(
        res =>{
          this.success=true;
          setTimeout(()=> this.success=false,4000);
          this.resetForm(form);
        },
        err =>{
          if(err.status==422){
            this.serverErrorMsgs = err.error.join('<br>');
          }
          else{
            this.serverErrorMsgs = "Something went wrong, Contact Admin";
          }
        }
      );
    }
    else{
      this.serverErrorMsgs="Password Do not match";
      console.log("Password Do not match");
      this.resetForm(form);
    }
  }

  resetForm = function(form:NgForm){
    this.userService.selectedUser={
      fullName:'',
      email:'',
      phone:'',
      country:'',
      state:'',
      street:'',
      city:'',
      zip:'',
      h_no:'',
      password:''
    };
    form.resetForm();
    this.serverErrorMsgs='';
  }

}
