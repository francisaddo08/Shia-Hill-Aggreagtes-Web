import { Component, Input, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from 'src/app/shared/data.service';
import { Order, OrderLine, ServerOrderLine } from '../../domain/order';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @ViewChild('inputQuantity', { static: true }) inputQuantity: ElementRef;
  @ViewChild('inputsPanel', { static: true, read: true }) inputspanel: ElementRef;
  @ViewChild('closeModal') closeModal: ElementRef;
  closeResult: string;
  public order: Order = new Order();
  constructor(public data: DataService, private router: Router, private modalService: NgbModal) {


  }


  //----------------------------------- Product Names-------------------



  @Input() price: number = 0;
  @Input() productsName: string = "";
  @Input() productUrls: string = "";
  @Input() weightPerUnite: number = 0;
  @Input() description: string ="";
  @Input() unit:string="";
  @Input() imageUrl1: string = "";
  @Input() imageUrl2: string = "";
  @Input() imageUrl3: string = "";
  @Input() productID: string = "";
  @Input() productDescription: string = "";
  //++++++++++++++++++++++++++++++Prices of products++++++++++++++++++++++++++++++++++

  productQuantity: number = 0;
  totalWeight: number = 0;

  totalCost: number = 0.0;
  ngOnInit() {
console.log(this.data.order.totalWeight);
 

  }
  //==========================================================================================================
  continueShopping() {
    this.modalService.dismissAll();
    this.router.navigate(['Shop']);
  }
  gotoBasket() {
    this.modalService.dismissAll();
    this.router.navigate(['Orders']);
  }

  //=======================================Image Slide============================================
  quantityChange() {
    let q = this.inputQuantity.nativeElement.value;
    this.productQuantity = q;
    this.totalCost = this.productQuantity * this.price;
    this.totalWeight = this.productQuantity * this.weightPerUnite;
    console.log(q);
    console.log('product quantity  ' + this.productQuantity);


  }


  addToChart(content) {
    if (this.totalCost < 1) {
      alert('Please Select Quantity');
      return;
    }
    if (this.data.order.orderLine.length === 0) {
     var or: OrderLine = new OrderLine();
      //var sol: ServerOrderLine = new ServerOrderLine();
     // sol.productID = this.productID;
     // sol.quantity = this.productQuantity;
      or.productID = this.productID
      or.imageUrl = this.imageUrl1;
      or.productName = this.productsName;
      or.quantity = this.productQuantity;
      or.price = this.totalCost;
      or.productUrl = this.productUrls;
      or.unitPrice = this.price;
      or.weight = this.weightPerUnite;
      or.totalWeight = this.totalWeight;

      this.data.order.orderLine.push(or);
      //this.data.order.serverOrderline.push(sol);

      this.modalService.open(content, { size: 'sm' });
      return;
    } else {
      const existingProduct = this.data.order.orderLine.find(({ productName }) => productName === this.productsName);
      if (existingProduct == null) {
        var or: OrderLine = new OrderLine();
        //var sol: ServerOrderLine = new ServerOrderLine();
      //sol.productID = this.productID;
      //sol.quantity = this.productQuantity;
        or.productID = this.productID
        or.imageUrl = this.imageUrl1;
        or.productName = this.productsName;
        or.quantity = this.productQuantity;
        or.price = this.totalCost;
        or.productUrl = this.productUrls;
        or.unitPrice = this.price;
        or.weight = this.weightPerUnite;
        or.totalWeight = this.totalWeight;

        this.data.order.orderLine.push(or);
       // this.data.order.serverOrderline.push(sol);

        this.modalService.open(content, { size: 'sm' });
        return;

      } else 
      {
        existingProduct.quantity = 0;
        existingProduct.quantity = this.productQuantity;
        
      
        existingProduct.price = 0;
        existingProduct.price = this.totalCost;
        existingProduct.totalWeight = 0;
        existingProduct.totalWeight = this.totalWeight;
      
        console.log(existingProduct);

        this.modalService.open(content, { size: 'sm' });
        return;
        
         
      }
    }

  }
}
