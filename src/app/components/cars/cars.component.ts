import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  listCars: any[] = [];
  filterCar = '';  

  constructor(private _carsService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this._carsService.getCars().subscribe(data => {
      data.cars.sort((a: { brand: string; }, b: { brand: string; }) => {
        if(a.brand < b.brand) {
          return -1;
        }
        if(a.brand > b.brand) {
          return 1;
        }
        return 0;
      })
      
      
      this.listCars = data.cars;
    })
  }

}
