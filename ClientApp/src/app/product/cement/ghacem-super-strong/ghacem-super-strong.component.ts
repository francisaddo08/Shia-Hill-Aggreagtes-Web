import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Order, OrderLine } from '../../../domain/order';
import { DataService } from 'src/app/shared/data.service';

import { Router } from '@angular/router';
import { IProduct, Product } from 'src/app/domain/product';
@Component({
  selector: 'app-ghacem-super-strong',
  templateUrl: './ghacem-super-strong.component.html',
  styleUrls: ['./ghacem-super-strong.component.css']
})
export class GhacemSuperStrongComponent implements OnInit {

  images1 = '../../assets/img/cement/ghacem-s-s.jpg';
  //images2 = '../../assets/img/cement/ghacem-s-s.jpg';
  //images3 = '../../assets/img/cement/ghacem-s-s.jpg';
  images2 = '../../assets/img/cement/cement-image-4.jpg';
  images3 = '../../assets/img/cement/cement-image-1.jpg';
  weight:number = 50;
  unit:string = 'kg';

  image = '../../assets/ghacem-s-s.jpg';


  productName: string = "GHACEM Super Strong";
  productUrl = '/product/ghacem-super-strong'



  constructor(public data: DataService) {

  }


  ngOnInit() {


  }




}
