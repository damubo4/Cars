import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarsComponent } from './components/cars/cars.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarComponent } from './components/cars/car/car.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    FooterComponent,
    NavBarComponent,    
    CarFilterPipe,
    CarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
