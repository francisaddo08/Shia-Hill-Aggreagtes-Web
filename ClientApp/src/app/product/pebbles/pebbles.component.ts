import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-pebbles',
  templateUrl: './pebbles.component.html',
  styleUrls: ['./pebbles.component.css']
})
export class PebblesComponent implements OnInit {

  productUrl: string = "/products/category/pebbles"
  imageUrl1: string = "../../assets/img/pebbles/peble-order-1.jpg"
  productName = " Oyster Pebles";
  price: number = 25;
  weight:number = 100;
  unit:string= 'kg';
  images1 = '../../assets/img/pebbles/img-1.jpg';
  images2 = '../../assets/img/pebbles/img-2.jpeg';
  images3 = '../../assets/img/pebbles/white-peble.jpeg';

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
