import { MainSearchService } from './../shared/main-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private mainSearch:MainSearchService) { }

  ngOnInit() {
  }

  getSnapDeal(){
    this.mainSearch.snapDeal()
    .subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}
