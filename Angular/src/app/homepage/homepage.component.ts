import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userDetails;
  constructor(private userService: UserService,private router: Router) { }
  static a=0;
  static b=0;

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
        if(HomepageComponent.a==0){
          console.log(this.userDetails);
          HomepageComponent.a=1;
          this.userService.toRefresh.email=this.userDetails.email;
        }
      },
      err =>{
        if(HomepageComponent.a==0){
          console.log(err);
          HomepageComponent.a=1;
          this.userService.deleteToken();
        }
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
    console.log("Inside Logout");
  }

}
