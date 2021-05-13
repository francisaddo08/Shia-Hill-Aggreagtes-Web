import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import {IProduct} from '../../../domain/product'
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-search-popover',
  templateUrl: './search-popover.component.html',
  providers: [NgbPopoverConfig],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-popover.component.css']
})
export class SearchPopoverComponent implements OnInit {
   products: IProduct[] = []
   sortedProducts: IProduct[] = [];
   

  constructor(public data: DataService, public congfig: NgbPopoverConfig) 
  { 
    this.congfig.triggers = 'keyup';
  }

  ngOnInit(){
    
  }
  
  searchKey(event){
    const k = String(event.target.value).trim();
    if(k ==""){
       this.sortedProducts = [];
       console.log(k);
    }else
    if(k.length == 1){
      console.log(k);
      var t = k.toUpperCase();
      console.log(t);
      this.sortedProducts = this.data.product.filter(function (product) {
        return product.productName.trim().startsWith(t);
    });
    }else
    if(k.length > 1){
       
      console.log(k);
      var t = k.charAt(0).toUpperCase();
      console.log(t);

      this.sortedProducts = this.data.product.filter(function (product) {
        return product.productName.trim().startsWith(t);
    });

     
    }
    
    //this.sortedProducts = this.data.product.filter(function (product) {
     // return product.productName.trim().startsWith(k.trim()) || product.productName.includes(k);
 // });
    
 //console.log(this.sortedProducts);
  
/**
 * 
 * 
 
    this.data.getSearchedProducts(k).subscribe({
      next: data => {this.products = data; console.log(this.products)},
      error: err => {console.log(err)}
    });
   
  */

  }
 async searchProduct(term: string){
  
  this.products = await this.data.getSearchedProducts(term).toPromise();
  this.products.forEach(p => {
    if(p.productName.startsWith(term) ){
    this.sortedProducts.push(p);
    }
  })
 }
}
