import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionOrder, DeliveryOrder, PickUpOrder, ServerDelivery } from '../domain/order';
import { DataService } from '../shared/data.service';
import {ServerOrderLine} from '../domain/order';
import {from, Observable} from 'rxjs'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   isPickUpOrder:boolean = false;
   isDeliveryOrder:boolean = false;
   isCollectionOrder:boolean = false;
   //====================== Customer Infor =========================
   order: any = {};
   items: any[] = [];
   delivery: any = {}
   orderErrorMessage: string = '';
   itemsErrorMessage: string = '';
   deliveryErrorMessage : string ='';
   isOrderSaved: boolean = false;
   isItemsSaved: boolean = false;
   isDeliverySaved: boolean = false;
  
  constructor(public data: DataService, private rout: ActivatedRoute) {

    if(this.data.order.orderLine.length > 0){
      this.postOrder(); // post the order
       this.data.order.orderLine = [];
      setTimeout(() => {
        this.data.orderline = [];
      }, 500);
     }
   }

  ngOnInit(): void {
 /**      */

    
     

 
  }
  async postOrder(){
    
    this.order  = await this.data.checkOutOrder(this.data.pickUPOrder).toPromise();
    if(this.order.customerID.length < 1){
      this.isOrderSaved = false
     this.orderErrorMessage = `
     <div class="card">
     <p>Your Order Could not be Placed</p>
     <p>Try again latter</p>
 </div>
     `;
     return true;
    }
    else{
      this.isOrderSaved = true;

    }
    console.log(this.order);
    this.data.orderID = this.order.customerID;
    let orderType = this.order.orderType;
    console.log(orderType);
    if(orderType === "Delivery Order"){ // if the order is delivery order

      this.data.postDeliveryUrl = 'api/Delivery/' + this.data.order.orderID;
      console.log(this.data.postDeliveryUrl);
      let d = new ServerDelivery();
      d.region = this.data.order.deliveryOption.region;
      d.district = this.data.order.deliveryOption.district;
      d.weight = this.data.order.totalWeight;
      d.cost = this.data.order.deliveryCost;
      this.data.postDelivery(d).subscribe(
        {
          next: data => {console.log(data); this.delivery = data; this.isDeliveryOrder = true},
          error: err => {console.log(err); this.isDeliveryOrder = false}
        }
      );
    }
    this.data.postOrderLinesUrl = 'api/OrderLine/'+  this.data.order.orderID
    var orderItems: {[key:string]:number} = {};
    
    this.data.orderline.forEach(orderline =>{
      orderItems[orderline.productID] = orderline.quantity;
    });
     this.data.postOrderlines(orderItems).subscribe(
       {
         next: data => { this.data.serverItems = data;   console.log(this.data.serverItems);},
         error: err=>{console.error(err)}
       }
     );
     
    
  }


 


 
 }

