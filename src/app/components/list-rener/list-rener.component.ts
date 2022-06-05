import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-rener',
  templateUrl: './list-rener.component.html',
  styleUrls: ['./list-rener.component.css']
})
export class ListRenerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAge = false;
 animalDetails = '';
  animals: Animal[] = [
    {name: "Turca", type: "dog", age: 2},
    {name: "Tom", type: "cat",age: 1},
    {name: "Frida", type: "dog",age: 5},
    {name: "Bob", type: "horse",age: 4}
  ]

  ShowAge(animal:Animal):void{
  this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos de vida`
  }
}
