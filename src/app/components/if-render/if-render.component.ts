import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canShow: boolean = true;
  name = 'Wanderson';
}
