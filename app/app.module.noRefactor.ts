import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import{HeroesComponent} from './heroes.component'
import { HeroService }         from './hero.service';
import {DashboardComponent} from './dashboard.component'

@NgModule({
  imports:      [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
      {
        path: 'heroes',//path: the router matches this route's path to the URL in the browser address bar (/heroes).
        component: HeroesComponent //the component that the router should create when navigating to this route (HeroesComponent)
      },
      {
        path: 'dashboard',
        component: DashboardComponent 
      },
     {
        path: 'detail/:id',
        component: HeroDetailComponent 
      },
       {
        path: '',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
      
      ]) 
    ],
  declarations: [ AppComponent,DashboardComponent ,HeroesComponent, HeroDetailComponent],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
