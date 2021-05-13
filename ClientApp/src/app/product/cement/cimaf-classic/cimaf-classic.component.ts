import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-cimaf-classic',
  templateUrl: './cimaf-classic.component.html',
  styleUrls: ['./cimaf-classic.component.css']
})
export class CimafClassicComponent implements OnInit {
  productUrl: string = "/product/cimaf-classic"
  imageUrl1: string = "../../assets/img/cement/cimaf-classic.jpg"
  productName = "CIMAF Classic";
  weight:number = 50;
  unit:string= 'kg';
  images1 = '../../assets/img/cement/cimaf-classic.jpg';
  images2 = '../../assets/img/cement/cement-image-6.jpg';
  images3 = '../../assets/img/cement/cement-image-7.jpg';
  productDescription ='';
  constructor(public data: DataService) { }
 
  ngOnInit() {
    this.productDescription = this.data.cementProductDescription;

  }
}
