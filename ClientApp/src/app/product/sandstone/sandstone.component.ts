import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service'

@Component({
  selector: 'app-sandstone',
  templateUrl: './sandstone.component.html',
  styleUrls: ['./sandstone.component.css']
})
export class SandstoneComponent implements OnInit {

  productUrl: string = "/products/category/sandstone"
  imageUrl1: string = "../../assets/img/tiles/sandstone-order-1.jpg"
  productName = "Sandstone";
  weight:number = 125;
  price:number=65;
  unit:string= 'kg';
  images1 = '../../assets/img/tiles/sandstone-1.jpg';
  images2 = '../../assets/img/tiles/img-2.jpeg';
  images3 = '../../assets/img/tiles/sandstone-2.jpg';
   
    relatedProducts = [
      {productName:'Cement', productUrl: 'products/category/cement', img: '../../assets/img/product-category/cement.jpg'},
      {productName:'Chippings', productUrl: 'products/category/chippings', img: '../../assets/img/product-category/chippings.jpeg'},
      {productName:'Limestone', productUrl: 'products/category/limestone', img: '../../assets/img/product-category/limestone.jpg'},
      {productName:'Pebbles', productUrl: 'products/category/pebbles', img: '../../assets/img/product-category/pebbles.jpg'},
      {productName:'Sandstone', productUrl: 'products/category/sandstone', img: '../../assets/img/product-category/sandstone.jpg'},
      {productName:'Building Aggregates', productUrl: 'products/category/building-agregates', img: '../../assets/img/product-category/sharp-sand.jpg'}
    ]

  constructor(public data: DataService) { }

  ngOnInit(): void {

  }

}
