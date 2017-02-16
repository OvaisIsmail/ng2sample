import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes:  Routes =[
      { path: 'heroes',     component: HeroesComponent     },
      { path: 'dashboard',  component: DashboardComponent  },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: '', redirectTo:'/dashboard', pathMatch:'full'} 
] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


//refactoring points to note
//1. Pulls the routes into a variable. You might export it in future and it clarifies the Routing Module pattern.
//2. Adds RouterModule to exports so that the components in the companion module have access to 
    //Router declarables such as RouterLink and RouterOutlet
//3.No declarations! Declarations are the responsibility of the companion module
//4. Can Add module providers for guard services for authentication and authorization