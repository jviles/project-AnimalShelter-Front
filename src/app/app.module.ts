import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AnimalsService } from './services/animals.service';
import { SheltersService } from './services/shelters.service';
import { AuthService } from './services/auth.service';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { SheltersPageComponent } from './pages/shelters-page/shelters-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SignupComponent } from './component/signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'info', component: InformationPageComponent },
  { path: 'animals', component: AnimalsPageComponent },
  { path: 'shelters', component: SheltersPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InformationPageComponent,
    AnimalsPageComponent,
    SheltersPageComponent,
    SignupPageComponent,
    SignupComponent,
    LogoutComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [AnimalsService,SheltersService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
