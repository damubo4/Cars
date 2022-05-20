import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCars = [];
    
    for(const car of value){
      if(car.brand.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCars.push(car);
      };
      return resultCars;
    }
  }

}
