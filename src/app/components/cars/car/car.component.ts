import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id:number = 0;
  brand = '';
  url_photo = '';
  description = '';
  model = '';
  price = 0;
  year = '';
  

  constructor(private aRoute: ActivatedRoute,
              private _carService: CarsService) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this._carService.getCars().subscribe(data => {      
      let carArray = data.cars[this.id];      
        this.brand = carArray.brand;
        this.description = carArray.description;
        this.model = carArray.model;
        this.price = carArray.price;
        this.year = carArray.year;
        this.url_photo = carArray.url_photo;        
    });
  }

  rentCar() {
    Swal.fire({
      title: 'Done',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#1c4727'
    })

  }

}
