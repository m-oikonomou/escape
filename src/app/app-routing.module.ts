import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import {StartPageComponent} from './start-page/start-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-start-page', pathMatch: 'full' },
  { path: 'app-start-page', component:  StartPageComponent},
  { path: 'app-first-page', component:  FirstPageComponent},
  { path: 'app-second-page', component:  SecondPageComponent},
  { path: 'cookies', component:  ThirdPageComponent},
  { path: 'app-fourth-page', component:  FourthPageComponent},
  { path: 'dolphin', component:  FifthPageComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
