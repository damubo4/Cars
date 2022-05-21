import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/cars/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [  
    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HeaderComponent}, 
    { path:'home/cars', component: PageComponent, children: [
      { path:'', component: CarsComponent },
      { path:':id', component: CarComponent },
    ]},     
    { path:'**', component: HeaderComponent }

    
  ] 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
