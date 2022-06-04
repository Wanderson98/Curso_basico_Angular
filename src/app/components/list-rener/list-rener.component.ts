import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rener',
  templateUrl: './list-rener.component.html',
  styleUrls: ['./list-rener.component.css']
})
export class ListRenerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animals=  [
    {name: "Turca", type: "dog"},
    {name: "Tom", type: "cat"},
    {name: "Frida", type: "dog"},
    {name: "Bob", type: "horse"}
  ]
}
