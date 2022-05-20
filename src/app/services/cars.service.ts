import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url = 'http://localhost:3000/cars';

  constructor(private http:HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.url);
  }
}
