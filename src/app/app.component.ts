import { Component } from '@angular/core';

import { Car } from './car'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'To jest wywolanie zmiennej title z użyciem PIPE uppercase';

  getText(): string{
    return 'To jest tekst metody getText()';
  }

  getPerson(){
    return{
      name: 'Tomasz',
      surname: 'Kowalski',
      age: 23
    };
  }

  getInfo(){
    console.log("Metoda getInfo() została wywołana");
    return "Tekst wyświetlony z metody";
  }

  counter = 0;

  count(){
    this.counter++;
  }

  notBinded(){
    console.log("Ta metoda nie jest bindowana");
  }

  getDate(): Date {
    console.log("Oto obecna data: " + Date());
    return new Date();
  }

  cars: Car[] = [
    {name:"M3", 
    brand:"BMW",
    price: 400000},

    {name:"A4", 
    brand:"Audi",
    price: 160000},

    {name:"Golf", 
    brand:"VW",
    price: 70000},

    {name:"Mondeo", 
    brand:"Ford",
    price: 120000}
  ];

}
