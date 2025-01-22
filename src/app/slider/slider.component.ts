import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
   name : string = 'Angular';
   value : number = 50;
   isActive : boolean = true;

  }
