import { Component, OnInit } from '@angular/core';
import {trigger, transition, animate, style} from '@angular/animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
  //trigger is an animation function takes several parameters for the nimation
  trigger( 'fade', [
      
    transition('void => *', [style({opacity:0}), animate('300ms', style({opacity:1}))]),
    transition('* => void',[style({opacity:1}),animate('300ms', style({opacity:0}))]),
])

  ]
})
export class CarouselComponent implements OnInit {
  current:number = 0;
  img = [
   //'../../assets/img/home/carousel/img-1-1.jpg',
   '../../assets/img/home/carousel/img-2.jpg',
   '../../assets/img/home/carousel/img-3.png',
  
 
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.img);
    setInterval(() => {this.current = ++this.current % this.img.length;}, 2000);
  }

}
