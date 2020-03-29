import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
              '../../assets/css-explore/style.css',
              '../../assets/css-explore/font-awesome.min.css',
              '../../assets/css-explore/bootstrap.min.css',
              '../../assets/css-explore/slick.css',
              '../../assets/css-explore/slick-theme.css'
]
})
export class NavbarComponent implements OnInit {

  
  // logoimg = "logo"
  logoimg = "../../assets/images-explore/logo.png"

  constructor() { }

  ngOnInit() {
  }

}
