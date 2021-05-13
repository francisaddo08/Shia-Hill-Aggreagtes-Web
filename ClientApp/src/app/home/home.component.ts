import { Component, OnInit } from '@angular/core';
import { DeliveryAreas } from '../domain/order';
import { IProduct } from '../domain/product';
import { DataService } from '../shared/data.service';
import { ProductsService } from '../shared/products.service';
import {trigger, transition, animate, style} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    //trigger is an animation function takes several parameters for the nimation
    trigger( 'fade', [
        
      transition('void => *', [style({opacity:0}), animate('300ms', style({opacity:1}))]),
      transition('* => void',[style({opacity:1}),animate('300ms', style({opacity:0}))]),
  ])
  
    ]
})
export class HomeComponent implements OnInit {
  current:number = 0;
  img = [
   //'../../assets/img/home/carousel/img-1-1.jpg',
   '../../assets/img/home/carousel/img-2.jpg',
   '../../assets/img/home/carousel/img-3.png',
  
 
  ];
  constructor( public data: DataService){}
   products: IProduct[] = [];
   errorMessage: string;
  ngOnInit(){
    console.log(this.img);
    setInterval(() => {this.current = ++this.current % this.img.length;}, 2000);
  this.data.getDashBoardProducts().subscribe(
    {
      next: product =>{ this.products = product ;console.log(product); },
      error: err => this.errorMessage = err
    }
  );

  this.data.collectionOption = false;
  this.data.deliveryOption = false;

  }
 
}
