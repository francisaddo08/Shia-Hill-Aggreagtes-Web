import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dangote',
  templateUrl: './dangote.component.html',
  styleUrls: ['./dangote.component.css']
})
export class DangoteComponent implements OnInit {
  productUrl: string = "/product/dangote"
  imageUrl1 : string = "../../assets/img/cement/Dangote.jpg"
  productName = " Dangote Cement";
  weight:number = 50;
  unit:string = 'kg';
  images1 = '../../assets/img/cement/Dangote.jpg';
//images2 = '../../assets/img/cement/ghacem-s-s.jpg';
//images3 = '../../assets/img/cement/ghacem-s-s.jpg';
images2 = '../../assets/img/cement/cement-image-4.jpg';
images3 = '../../assets/img/cement/cement-image-1.jpg';
productDescription:string ='';

  constructor(public data: DataService) {

    
   }

  ngOnInit() {
    this.productDescription = this.data.cementProductDescription;
  }

}
