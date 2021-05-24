import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainSearchService {

  constructor(private http:HttpClient) { }

  snapDeal(){
    return this.http.get(environment.apiBaseUrl+'/getSnapdeal');
  }
}
