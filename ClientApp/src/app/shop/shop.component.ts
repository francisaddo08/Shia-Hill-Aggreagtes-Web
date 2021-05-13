import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public data: DataService) { }
  products = [
    {productName:'Cement', productUrl: 'products/category/cement', img: '../../assets/img/product-category/cement.jpg'},
    {productName:'Chippings', productUrl: 'products/category/chippings', img: '../../assets/img/product-category/chippings.jpeg'},
    {productName:'Limestone', productUrl: 'products/category/limestone', img: '../../assets/img/product-category/limestone.jpg'},
    {productName:'Pebbles', productUrl: 'products/category/pebbles', img: '../../assets/img/product-category/pebbles.jpg'},
    {productName:'Sandstone', productUrl: 'products/category/sandstone', img: '../../assets/img/product-category/sandstone.jpg'},
    {productName:'Building Aggregates', productUrl: 'products/category/building-agregates', img: '../../assets/img/product-category/sharp-sand.jpg'}
  ]

  ngOnInit(): void {


    this.data.getProducts().subscribe();
  }
   
    

}