import { Component, OnInit } from '@angular/core';
// import "src/assets/js/jquery.min.js";
// import "src/assets/js/jquery.zoom.min.js";
// import "src/assets/js/main.js";
// import "src/assets/js/bootstrap.min.js";
// import "src/assets/js/slick.min.js";
// import "src/assets/js/nouislider.min.js";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: [
    './explore.component.css',
    '../../assets/css-explore/style.css',
    '../../assets/css-explore/font-awesome.min.css',
    '../../assets/css-explore/bootstrap.min.css',
    '../../assets/css-explore/slick.css',
    '../../assets/css-explore/slick-theme.css' 
  ]
})

export class ExploreComponent implements OnInit {
  
  laptop_col = "shop01.png"
  accessory_col = "shop03.png"
  constructor() { }

  ngOnInit() {
  }

}