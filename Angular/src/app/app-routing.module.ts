import { SampleComponent } from './sample/sample.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProductComponent } from './product/product.component';
import { ExploreComponent } from './explore/explore.component';
import { PwdComponent } from './pwd/pwd.component';
import { SignUpComponent_2 } from './sign-up/sign-up_2.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'sample',component:SampleComponent
  },
  {
    path:'home', component:HomepageComponent
  },
  {
    path:'signup', component:SignUpComponent
  },
  {
    path:'signup2', component: SignUpComponent_2
  },
  {
    path:'login', component:LogInComponent
  },
  {
    path:'password', component:PwdComponent
  },
  {
    path:'explore', component:ExploreComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'searchresult', component:SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
