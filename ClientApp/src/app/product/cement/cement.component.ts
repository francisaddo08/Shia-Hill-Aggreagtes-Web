import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { IProduct } from 'src/app/domain/product';
import { DataService } from 'src/app/shared/data.service';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-cement',
  templateUrl: './cement.component.html',
  styleUrls: ['./cement.component.css']
})

export class CementComponent implements OnInit {
  ghacem_s_s  =  "../assets/ghacem-s-s.jpg";
  name: string = 'ghacemss';
  ghacemssUrl ='src/assets/img/cement/ghacem-s-e.jpg';
  product: IProduct[] = [];
  errorMessage:string;
  //===================================cement prices=============================
  public ghacem_s_s_price= 0;
  public ghacem_s_r_price = 0;
  public ghacem_s_e_price = 0;
  public dangote_price = 0;
  public cimaf_ultimate_price = 0;
  public cimaf_classic_price = 0;
  
 
  constructor( public data: DataService, public route: ActivatedRoute) { }

   

 
  ngOnInit() {
    this.data.getProducts().subscribe(
      {
        next: product =>{ this.product = product; this.setCementPrices(product) ;console.log(product); },
        error: err => this.errorMessage = err
      }
    );
    
   this.data.showcollectionDays = false;
   this.data.collectionOption = false;
   this.data.deliveryOption = false;
  }
 
  setCementPrices(product:IProduct[] )
  {
    var price = 0;
    product.forEach(p => {
      if(p.productName === "GHACEM Super Strong"){
        this.ghacem_s_s_price = p.price;
                                                           
        console.log("ghacem ss price "+ this.ghacem_s_s_price);
      }
      if(p.productName === "GHACEM Super Extra"){
        this.ghacem_s_e_price = p.price;
      }
      if(p.productName === "GHACEM super Rapid"){
        this.ghacem_s_r_price = p.price;
      }
      if(p.productName === "CIMAF Ultimate"){
        this.ghacem_s_e_price = p.price;
      }
      if(p.productName === "CIMAF Classic"){
        this.ghacem_s_e_price = p.price;
      }
      if(p.productName === "Dangote"){
        this.ghacem_s_e_price = p.price;
      }
     
    });

     

  }
}
