import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { LogInComponent } from './../log-in/log-in.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

export interface country{
    id: number;
    viewValue : string;
}

@Component({
    selector: 'app-sign-up-2',
    templateUrl: './sign-up_2.component.html',
    styleUrls: ['./sign-up_2.component.css']
})

export class SignUpComponent_2 implements OnInit{

    
    constructor(public userService: UserService,private router:Router){

    }

    ngOnInit(){

    }
   
   selectedCountry: string;
   list:string;

    public countries: country[] = [
        {id:1,viewValue:"Albania"},
        {id:2,viewValue:"Argentina"},
        {id:3,viewValue:"Australia"},
        {id:4,viewValue:"Austria"},
        {id:5,viewValue:"Bangladesh"},
        {id:6,viewValue:"Belgium"},
        {id:7,viewValue:"Brazil"},
        {id:8,viewValue:"Bulgaria"},
        {id:9,viewValue:"Cambodia"},
        {id:10,viewValue:"Canada"},
        {id:11,viewValue:"China"},
        {id:12,viewValue:"Colombia"},
        {id:13,viewValue:"Croatia"},
        {id:14,viewValue:"Cyprus"},
        {id:15,viewValue:"Czech Republic"},
        {id:16,viewValue:"Denmark"},
        {id:17,viewValue:"Estonia"},
        {id:18,viewValue:"Finland"},
        {id:19,viewValue:"France"},
        {id:20,viewValue:"Germany"},
        {id:21,viewValue:"Greece"},
        {id:22,viewValue:"Greenland"},
        {id:23,viewValue:"Hong Kong"},
        {id:24,viewValue:"Hungary"},
        {id:25,viewValue:"Indonesia"},
        {id:26,viewValue:"Ireland"},
        {id:27,viewValue:"Israel"},
        {id:28,viewValue:"Italy"},
        {id:29,viewValue:"India"},
        {id:30,viewValue:"Jordan"},
        {id:31,viewValue:"Japan"},
        {id:32,viewValue:"Laos"},
        {id:33,viewValue:"Latvia"},
        {id:34,viewValue:"Lichtenstein"},
        {id:35,viewValue:"Lithuania"},
        {id:36,viewValue:"Luxembourg"},
        {id:37,viewValue:"Malta"},
        {id:38,viewValue:"Netherlands"},
        {id:39,viewValue:"Morocco"},
        {id:40,viewValue:"Mexico"},
        {id:41,viewValue:"Malaysia"},
        {id:42,viewValue:"Nigeria"},
        {id:43,viewValue:"Norway"},
        {id:44,viewValue:"Nepal"},
        {id:45,viewValue:"New Zealand"},
        {id:46,viewValue:"Philippines"},
        {id:47,viewValue:"Pakistan"},
        {id:48,viewValue:"Poland"},
        {id:49,viewValue:"Portugal"},
        {id:50,viewValue:"Romania"},
        {id:51,viewValue:"Russia"},
        {id:52,viewValue:"Sweden"},
        {id:53,viewValue:"San Marino"},
        {id:54,viewValue:"Singapore"},
        {id:55,viewValue:"Slovakia"},
        {id:56,viewValue:"South Africa"},
        {id:57,viewValue:"South Korea"},
        {id:58,viewValue:"Spain"},
        {id:59,viewValue:"Sri Lanka"},
        {id:60,viewValue:"Switzerland"},
        {id:61,viewValue:"Thailand"},
        {id:62,viewValue:"Taiwan"},
        {id:63,viewValue:"Turkey"},
        {id:64,viewValue:"United Kingdom"},
        {id:65,viewValue:"United States"},
        {id:66,viewValue:"United Arab Emirates"},
        {id:67,viewValue:"Vietnam"},
    ];

    public states_list: string[];

    
    
    setStates = function(){
        if(this.countries[this.selectedCountry-1].viewValue == "India"){
            this.states_list = [
                "Andra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Orissa",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telagana",
                "Tripura",
                "Uttaranchal",
                "Uttar Pradesh",
                "West Bengal"
            ]
        }
        else{
            this.states_list = [];
        }
    }


    onFormSubmit = function(form: NgForm){
        this.selectedCountry = this.countries[this.selectedCountry-1].viewValue;
        this.userService.selectedUser.country=this.selectedCountry;
        console.log(this.userService.selectedUser);
        this.router.navigateByUrl('/password');
    }
}