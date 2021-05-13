import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-ghacem-super-extra',
  templateUrl: './ghacem-super-extra.component.html',
  styleUrls: ['./ghacem-super-extra.component.css']
})
export class GhacemSuperExtraComponent implements OnInit {
  productUrl: string = "/product/ghacem-super-extra"
  imageUrl1: string = "../../assets/img/cement/ghacem-s-e.jpg"
  productName = "GHACEM Super Extra";
  weight:number = 50;
  unit:string = 'kg';
  images1 = '../../assets/img/cement/ghacem-s-e.jpg';
  //images2 = '../../assets/img/cement/ghacem-s-s.jpg';
  //images3 = '../../assets/img/cement/ghacem-s-s.jpg';
  images2 = '../../assets/img/cement/cement-image-4.jpg';
images3 = '../../assets/img/cement/cement-image-1.jpg';

  constructor(public data: DataService) {

  }

  ngOnInit() {
  }

}
