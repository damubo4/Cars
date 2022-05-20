import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/cars/car/car.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [  
    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HomeComponent},      
    { path:'home/car/:id', component: CarComponent },
    { path:'**', component: CarsComponent }

    
  ] 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
