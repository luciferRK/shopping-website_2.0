import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailPattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
 
  constructor(public userService: UserService,private router: Router) { 

  }

  ngOnInit() {
    
  }


  onFormSubmit(form: NgForm) {  
   console.log("NGForm Submitted")
  } 
  changeSignup(){
    this.router.navigateByUrl("signup2");
  }

  nextSignup(){
    console.log("Next Button clicked");
    console.log(this.userService.selectedUser);
  }


}
