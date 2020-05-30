import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WheaterService {

  constructor(private http: HttpClient) { }
  //constructor() { }

  public loaded: boolean = false;

  load() {
    console.log("load()");
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=arbancon&appid=bcb1205e58d5edb65c1502281e25273f&lang=sp&units=metric')
    .subscribe((response) => {
        //console.log(response);
    });
  }

  // load(): Promise<boolean> {
  //   console.log("load()");

  //   return new Promise((resolve) => {
  //     this.http.get('http://api.openweathermap.org/data/2.5/weather?q=arbancon&appid=bcb1205e58d5edb65c1502281e25273f&lang=sp&units=metric')
  //     .subscribe((response) => {
  //       resolve(true);
  //     });
  //   });
  // }
}
