import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import * as core from '@angular/core';
import { NgForm } from '@angular/forms';

@core.Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements core.OnInit {

  constructor(private userService :UserService,private router: Router) { }

  login_model={
    email:'',
    password:''
  }

  errorMsgs: boolean;

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  ngOnInit() {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl('/home');
    }
  }

  login_function = function(form:NgForm){
    this.userService.login(this.login_model).subscribe(
      res =>{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');
      },
      err =>{
        this.errorMsgs = true;
        this.resetForm(form);
      }
    )
  }

  resetForm = function(form:NgForm){
    this.login_model.email='',
    this.login_model.password=''
  }

  // popupLink():void{
  //   let modal: HTMLElement = document.getElementById("forgot_password");
  //   modal.setAttribute("style","display:block");
  //   let elem: HTMLElement = document.getElementById("over");
  //   elem.setAttribute("style","display:block");
  // }
  
  // closePopup():void{
  //   let modal: HTMLElement = document.getElementById("forgot_password");
  //   modal.setAttribute("style","display:none");
  //   let elem:HTMLElement = document.getElementById("over");
  //   elem.setAttribute("style","display:none");
  // }

  // log(x){
  //   console.log(x);
  // }

}
