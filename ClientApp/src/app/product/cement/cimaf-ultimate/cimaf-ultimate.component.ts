import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-cimaf-ultimate',
  templateUrl: './cimaf-ultimate.component.html',
  styleUrls: ['./cimaf-ultimate.component.css']
})
export class CimafUltimateComponent implements OnInit {
  productUrl: string = "/product/cimaf-ultimate";
  imageUrl1: string = "../../assets/img/cement/cimaf-ultimate.jpg";
  productName = " CIMAF Ultimate Cement";
  weight:number = 50;
  unit:string = 'kg';
  images1 = '../../assets/img/cement/cimaf-ultimate.jpg';
  images2 = '../../assets/img/cement/cement-image-3.jpg';
  images3 = '../../assets/img/cement/blocks-ghana-1.jpg';
  productDescription: string = "";
  constructor(public data: DataService) { }

  ngOnInit() {
    this.productDescription = this.data.cementProductDescription;
  }


}
