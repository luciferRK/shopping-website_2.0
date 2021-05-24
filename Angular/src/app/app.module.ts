import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignUpComponent_2 } from './sign-up/sign-up_2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PwdComponent } from './pwd/pwd.component';
import { ExploreComponent } from './explore/explore.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurFooterComponent } from './our-footer/our-footer.component';
import { ProductComponent } from './product/product.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignUpComponent,
    SignUpComponent_2,
    LogInComponent,
    PwdComponent,
    ExploreComponent,
    NavbarComponent,
    OurFooterComponent,
    ProductComponent,
    SearchResultComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
