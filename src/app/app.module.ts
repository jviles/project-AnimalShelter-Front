import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AnimalsService } from './services/animals.service';
import { SheltersService } from './services/shelters.service';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { SheltersPageComponent } from './pages/shelters-page/shelters-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'info', component: InformationPageComponent },
  { path: 'animals', component: AnimalsPageComponent },
  { path: 'shelters', component: SheltersPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InformationPageComponent,
    AnimalsPageComponent,
    SheltersPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [AnimalsService,SheltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
