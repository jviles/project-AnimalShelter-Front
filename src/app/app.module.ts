import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'info', component: InformationPageComponent },
  { path: 'animals', component: AnimalsPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InformationPageComponent,
    AnimalsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
