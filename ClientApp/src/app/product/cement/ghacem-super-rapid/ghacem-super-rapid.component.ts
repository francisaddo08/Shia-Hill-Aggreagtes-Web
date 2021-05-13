import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-ghacem-super-rapid',
  templateUrl: './ghacem-super-rapid.component.html',
  styleUrls: ['./ghacem-super-rapid.component.css']
})
export class GhacemSuperRapidComponent implements OnInit {
productUrl: string = "/product/ghacem-super-rapid"
imageUrl1 : string = "../../assets/img/cement/ghacem-s-r.jpg";

productName = "GHACEM Super Rapid";
weight:number = 50;
  unit:string = 'kg';
images1 = '../../assets/img/cement/ghacem-s-r.jpg';
//images2 = '../../assets/img/cement/ghacem-s-s.jpg';
//images3 = '../../assets/img/cement/ghacem-s-s.jpg';
images2 = '../../assets/img/cement/cement-image-4.jpg';
images3 = '../../assets/img/cement/cement-image-1.jpg';
productDescription:string = '';

  constructor(public data: DataService) { 
  
  }

  ngOnInit() {
    this.productDescription = this.data.cementProductDescription;
  }

}
