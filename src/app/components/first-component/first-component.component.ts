import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Wanderson';
  age: number = 23;
  job = 'Programador'
  hobbie = ["Correr", "Nadar", "Jogar Futebol"]
  car = {name: 'Polo', year: 2019}
  
  constructor() { }

  ngOnInit(): void {
  }

}
