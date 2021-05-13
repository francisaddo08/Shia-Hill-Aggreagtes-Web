import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-building-aggregates',
  templateUrl: './building-aggregates.component.html',
  styleUrls: ['./building-aggregates.component.css']
})
export class BuildingAggregatesComponent implements OnInit {

  productUrl: string = "/products/category/building-agregates";
  imageUrl1: string = "../../assets/img/building-aggregates/sharpsand-order-1.jpg";
  productName = "Building Aggregates";
  weight:number = 1000;
  price:number= 34;
  unit:string= 'kg';
  //images1 = '../../assets/img/pebbles/img-1.jpg';
  //images2 = '../../assets/img/pebbles/img-2.jpeg';
  //images3 = '../../assets/img/pebbles/white-peble.jpeg';

  images1 = '../../assets/img/building-aggregates/chips-1.jpg';
  images2 = '../../assets/img/building-aggregates/chips-2.jpg';
  images3 = '../../assets/img/building-aggregates/img-2.jpg';

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
