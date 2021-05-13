import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-chippings',
  templateUrl: './chippings.component.html',
  styleUrls: ['./chippings.component.css']
})
export class ChippingsComponent implements OnInit {
  productUrl: string = "/products/category/chippings"
  imageUrl1: string = "../../assets/img/building-aggregates/chips-order-1.jpg"
  productName = "Chippings";
  weight:number = 50;
  price: number = 60;
  unit:string= 'kg';
  images1 = '../../assets/img/building-aggregates/chips-1.jpg';
  images2 = '../../assets/img/building-aggregates/chips-2.jpg';
  images3 = '../../assets/img/building-aggregates/img-2.jpg';

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
