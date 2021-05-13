import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-limestone',
  templateUrl: './limestone.component.html',
  styleUrls: ['./limestone.component.css']
})
export class LimestoneComponent implements OnInit {
  productUrl: string = "/products/category/limestone"
  imageUrl1: string = "../../assets/img/tiles/limestone-order-1.jpg"
  productName = "Limestone";
  weight:number = 125;
  price:number = 54;
  unit:string= 'kg';
  images1 = '../../assets/img/tiles/limestone.jpg';
  images2 = '../../assets/img/tiles/img-1.jpg';
  images3 = '../../assets/img/tiles/img-3.jpeg';

  constructor(public data: DataService) { }

  ngOnInit(): void {
    
  }

}
