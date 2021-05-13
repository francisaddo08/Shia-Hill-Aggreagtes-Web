import { NodeWithI18n } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { CollectionOrder, DeliveryAreas, DeliveryOrder, Order, OrderLine, PickUpOrder, ServerOrderLine } from '../../domain/order'
import {} from 'rxjs/operators'
import {} from 'rxjs';
import { ServerOrder } from 'src/app/domain/ServerOrder';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ghacemss = 'ghacem super strong';
  ghacemssid = 'ghacemssid';
  ghacemsr = 'ghacem-s-r';
  ghacemse = 'ghacem-s-e';
  imageUrl1 = '../../assets/ghacem-s-s.jpg';
  //================================transport form=================
  needTransportQuestion: boolean;
  @ViewChild('transportQuestion', { static: true, read: true }) transportQuestion: ElementRef;
  //========================temp order=======================

  productsName = 'nhgggggg'
  productQuantity = 2
  totalCost = 3
  productUrls = '';
  //============================== componemt UIs booleans=============================
  showDeliveryTotal: boolean = false;
  showTransportTypeOption: boolean = false;
  disableCheckoutButton: boolean = true;
  isMoMOChecked: boolean = true;
  showCustomerForm: boolean = false;
  isCheckOutReady: boolean = true;
  isMoMoCheckedName: string = "";
  isMoMoNumberValid: boolean = false;
  start: Date = new Date();

  //===================================== Customer Details Form=========================
  momoNumberErrorMessage: string = "";


  constructor(public data: DataService, private router: Router,) {

  }



  ngOnInit() {

this.data.order.orderID = new Date().getTime().toString();
    console.log(this.data.order);
    this.data.order.collectionDay = "";
    this.data.order.deleiveryDay = "";
    //var or: OrderLine = new OrderLine();
    // or.imageUrl = this.imageUrl1;
    //or.productName = this.productsName;
    //or.quantity = 10;
    //or.price = 600;
    //or.productUrl = this.productUrls;
    //or.totalWeight = 500;

    //this.data.order.orderLine.push(or);
    //console.log(this.data.order)

    this.data.orderline.forEach(orderline =>{
      this.data.orderItems[orderline.productID] = orderline.quantity;
    });
    if (this.data.order.totalWeight > this.data.transportReuestLevel) {
      this.showTransportTypeOption = true;
      this.data.showcollectionDays = true;

    }
    if (this.data.order.totalWeight < this.data.transportReuestLevel) {
      this.data.showPickUpOrders = true;


    }

  }
  // ============================Customer details=======================
  customerDetials(event) {
    const target = event.target.value;
    if (this.data.order.customerName.length === 0 && (target === 0))
      console.log(" your name  " + target);

  }
  alphChar(event) {
    const char = event.which;
    console.log(char);
    if (char > 31 && char != 32 && (char < 65 || char > 90) && (char < 97 || char > 122)) {
      return false;
    }
    return true


  }
  //------------------------------------- customer Full Name-----------------------------------------
  customerNameInput(event) {
    const target = event.target.value;
    this.data.order.customerName = target;
    console.log(" your name  " + target);

  }
  //================================== MOMO Provider=============================================
  selectMomoProvider(event) {
    this.isMoMoNumberValid = false;
    const target = event.target;
    const ischecked = event.target.checked;
    const momo = event.target.value;
    console.log(momo);
    this.data.order.momoProvider = momo;
    const targetParent = target.parentElement;
    const parent = targetParent.parentElement;
    this.isMoMOChecked = false;
    const checkBoxes = parent.querySelectorAll(".form-check-input");
    if (!ischecked) {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = false;
        this.isMoMOChecked = true;
      }
      return false;
    }

    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].name != momo) {
        checkBoxes[i].disabled = true;
      }

      console.log(checkBoxes[i]);
    }

    console.log(checkBoxes);
    console.log(ischecked);
    console.log(targetParent)
    console.log(parent);

    console.log("momo  " + momo + " " + target.name);


  }
  //======================================= mobile number ==========================================
  mobileNumberInput(event) {
    const target = event.target.value;
    this.isMoMoNumberValid = false;
    console.log('vodafone ' + this.data.vodafoneNumbers);
    console.log('airtel' + this.data.airtelNumbers);
    console.log(' mtn ' + this.data.mtnNumbers);

    if (this.data.order.momoProvider === "AirTel" && this.data.airtelNumbers.includes(target)) {

      this.data.order.momoNumber = target;
      this.momoNumberErrorMessage = "";
      this.isMoMoNumberValid = false;
      this.isCheckOutReady = false;

    } else
      if (this.data.order.momoProvider === "MTN" && this.data.mtnNumbers.includes(target)) {
        this.data.order.momoNumber = target;
        this.momoNumberErrorMessage = "";
        this.isMoMoNumberValid = false;
        this.isCheckOutReady = false;
      } else
        if (this.data.order.momoProvider === "Vodafone" && this.data.vodafoneNumbers.includes(target)) {
          this.data.order.momoNumber = target;
          this.momoNumberErrorMessage = "";
          this.isMoMoNumberValid = false;
          this.isCheckOutReady = false;

        } else {
          this.isMoMoNumberValid = true;
          this.momoNumberErrorMessage = "Your Number is not " + this.data.order.momoProvider + " MOMO Number ";
          this.isCheckOutReady = true;

        }

    console.log(" mobile   " + target)
  }

  //================================ collection radio button selected ========================
  collectionDaySelected(event) {
    const target = event.target;
    if (target.checked) {
      const selectedDay = target.value;
      this.data.order.deleiveryDay = "";
      this.data.order.collectionDay = selectedDay;
      //this.data.order.deliveryOption = null;
      this.disableCheckoutButton = false;
      console.log(selectedDay);
      console.log(this.data.order);
      this.data.showCheckOutButton = true; // show check out button
    }
  }
  // ------------------------- delivery day selected ----------------------------------------------------
  deliveryDaySelected(event) {
    const target = event.target;
    if (target.checked) {
      const seletedDay = target.value;
      this.data.order.collectionDay = "";
      this.data.order.deleiveryDay = seletedDay;
      this.disableCheckoutButton = false;
      console.log(" day selected " + seletedDay);
      console.log(this.data.order);
      this.data.showCheckOutButton = true;
    }
  }
  //====================================== delivery area selected ======================================
  onAreaSection(event) {
    console.log(this.data.deliveryArea);
    this.showDeliveryTotal = false;
    const option = event.target.options[event.target.options.selectedIndex].text;
    const area = this.data.deliveryArea.find((d) => d.district === option);  //area for the delivery
    let weight;



    if (this.data.order.totalWeight > this.data.transportReuestLevel && this.data.order.totalWeight < 501) {
      weight = 500;
      const transportCostPerKm = this.data.deliveryVehicles.find((v) => v.payload === weight);
      this.data.order.costPerKillometer = transportCostPerKm.costPerKillometer;
    } else
      if (this.data.order.totalWeight > 500 && this.data.order.totalWeight < 1001) {
        weight = 1000;
        const transportCostPerKm = this.data.deliveryVehicles.find((v) => v.payload === weight);
        this.data.order.costPerKillometer = transportCostPerKm.costPerKillometer;
      }
      else
        if (this.data.order.totalWeight > 1000 && this.data.order.totalWeight < 2001) {
          weight = 2000;
          const transportCostPerKm = this.data.deliveryVehicles.find((v) => v.payload === weight);
          this.data.order.costPerKillometer = transportCostPerKm.costPerKillometer;
        }


    if (option === "Mallam") {
      console.log(option);
      this.data.areaSelected = true; // toggle delivery date UIs
      this.data.deliveryDistance = area.distance;
      this.data.order.deliveryOption.region = area.region;
      this.data.order.deliveryOption.district = area.district;
      this.data.order.deliveryOption.distance = area.distance;
      this.data.order.deliveryOption.unit = area.unit;

      console.log(area);
      console.log(this.data.order);
      this.showDeliveryTotal = true;
      this.showTransportTypeOption = true;
    } else if (option === "Accra Central") {

      this.data.areaSelected = true; // toggle delivery date UIs

      this.data.order.deliveryOption.region = area.region;
      this.data.order.deliveryOption.district = area.district;
      this.data.order.deliveryOption.distance = area.distance;
      this.data.order.deliveryOption.unit = area.unit;

      this.showDeliveryTotal = true;
    } else if (option === "Kasoa") {
      this.data.areaSelected = true; // toggle delivery date UIs

      this.data.order.deliveryOption.region = area.region;
      this.data.order.deliveryOption.district = area.district;
      this.data.order.deliveryOption.distance = area.distance;
      this.data.order.deliveryOption.unit = area.unit;

      this.showDeliveryTotal = true;

    }
    else if (option === "Please Select Area") {

      this.data.areaSelected = false; // toggle delivery date UIs
      this.showDeliveryTotal = false;

    }
  }
  //=================    transport option selected ======================================
  onTransportChange(event) {
    const option = event.target.options[event.target.options.selectedIndex].text;
    this.data.showCheckOutButton = false; // dont show checkout button
    if (option === "Pay and Delivery") {
      this.data.deliveryOption = true;
      this.data.collectionOption = false;
      this.data.order.transportOption = option;
      this.showDeliveryTotal = false;
      console.log(this.data.order);

    } else if (option === "Pay and Collect Yourself") {
      this.data.collectionOption = true;
      this.data.deliveryOption = false;
      this.showDeliveryTotal = false;
      this.data.showcollectionDays = true;

      this.data.order.transportOption = option;
      //this.data.order.deliveryOption = null;
      this.disableCheckoutButton = false;
      console.log(this.data.order);

    } else if (option === "Please Select Delivery Option") {
      this.data.collectionOption = false;
      this.data.deliveryOption = false;
      this.showDeliveryTotal = false;

    }

    console.log(option);
  }
  //=================================== router to shoping page=========================
  goToShop() {
    this.router.navigate(['Shop']);

  }
  // ==================== user make changes to quantity=========================
  quantityChange(event) {

    const currentQuantity = event.target.value;
    this.data.deliveryOption = false;
    this.showDeliveryTotal = false;
    this.showTransportTypeOption = false;
    this.data.deliveryOption = false;
    this.data.showcollectionDays = false;
    this.data.showCheckOutButton = false;
    //============================reset all dates on change======================================
    this.data.order.collectionDay = "";
    this.data.order.deleiveryDay = "";
    // =======================get the element where the change is happing=======================
    const elemet = event.target.parentElement;
    const currentProductName = elemet.previousSibling.innerHTML;
    const existingProduct = this.data.order.orderLine.find(({ productName }) => productName === currentProductName);
    if (currentQuantity < 5) {
      this.data.deliveryOption = false;
      this.showDeliveryTotal = false;
      this.showTransportTypeOption = false;
      this.data.totalCost = this.data.order.subTotal;

      console.log(this.data.order);

    }
    console.log(currentQuantity);

    console.log(elemet);
    console.log(currentProductName);

    existingProduct.quantity = 0;
    existingProduct.quantity = currentQuantity;

    existingProduct.price = existingProduct.unitPrice * currentQuantity;
    existingProduct.totalWeight = 0;

    existingProduct.totalWeight = existingProduct.weight * currentQuantity;

    this.showTransportTypeOption = true;


  }
  //=========================== go to check out page router =============================
  goToCheckout() {

    this.data.order.orderLine.forEach(l => {
      let sol = new ServerOrderLine();
      
      sol.productID = l.productID;
      sol.quantity = l.quantity;
      sol.orderID = this.data.order.orderID;
      this.data.orderline.push(sol);
    });
    console.log(this.data.orderline);
    this.data.checkOutObj = null;
    console.log(" collection string " + this.data.order.collectionDay.length);
    console.log(this.data.order.deleiveryDay.length);
    //=========================== instantiate PickupOrder obj===============================
    if (this.data.order.collectionDay.length === 0 && this.data.order.deleiveryDay.length === 0) {
      console.log(" collection string " + this.data.order.collectionDay.length);
      console.log(this.data.order.deleiveryDay.length);
      this.data.pickUPOrder = new PickUpOrder();

      this.data.pickUPOrder.customerName = this.data.order.customerName;
      this.data.pickUPOrder.momoProvider = this.data.order.momoProvider;
      this.data.pickUPOrder.momoNumber = this.data.order.momoNumber;
      this.data.pickUPOrder.orderType = "Pick Up Order";
      
      this.data.pickUPOrder.collectionDate = this.data.order.PickUpTime;
      this.data.pickUPOrder.subTotal = this.data.order.subTotal;
      this.data.pickUPOrder.orderID = this.data.order.orderID;

      console.log(this.data.pickUPOrder);
      //============================ Post Pick Up Order==============================
  
      this.data.checkOutObj = this.data.pickUPOrder;
 // ========================= URL For orderline===================
    //this.postPickUpOrders(); // Post to server
      return this.router.navigate(['/Checkout']);
    } else
      //==================================== create collection order=================================
      if (this.data.order.collectionDay.length > 0 && this.data.order.deleiveryDay.length === 0) {
        
        console.log(" collection string " + this.data.order.collectionDay.length);
        console.log(this.data.order.deleiveryDay.length);

        this.data.pickUPOrder = new PickUpOrder();

        this.data.pickUPOrder.customerName = this.data.order.customerName;
        this.data.pickUPOrder.momoProvider = this.data.order.momoProvider;
        this.data.pickUPOrder.momoNumber = this.data.order.momoNumber;
        this.data.pickUPOrder.orderType = "Collection Order";
        
        this.data.pickUPOrder.collectionDate = this.data.order.collectionDay;
        this.data.pickUPOrder.subTotal = this.data.order.subTotal;
        this.data.pickUPOrder.orderID = this.data.order.orderID;
  
        console.log(this.data.pickUPOrder);
      

        return this.router.navigate(['/Checkout']);
      } else
        // ============================ Deliver orders ==========================================
        if (this.data.order.collectionDay.length === 0 && this.data.order.deleiveryDay.length > 0) {
          console.log(" collection string " + this.data.order.collectionDay.length);
          console.log(this.data.order.deleiveryDay.length);
      
          this.data.pickUPOrder = new PickUpOrder();

          this.data.pickUPOrder.customerName = this.data.order.customerName;
          this.data.pickUPOrder.momoProvider = this.data.order.momoProvider;
          this.data.pickUPOrder.momoNumber = this.data.order.momoNumber;
          this.data.pickUPOrder.orderType = "Delivery Order";
          
          this.data.pickUPOrder.collectionDate = this.data.order.deleiveryDay;
          this.data.pickUPOrder.subTotal = this.data.order.subTotal;
          this.data.pickUPOrder.orderID = this.data.order.orderID;
    
          console.log(this.data.pickUPOrder);
         
 
          return this.router.navigate(['/Checkout']);

        }

  }
  // ================================delete item from orders ================================
  delete(event) {
    const p = event.target;
    const elemet = p.parentElement;
    const tr = elemet.parentElement;
    console.log(tr);
    const currentProductName = tr.querySelector("#productName").innerHTML;
    console.log(currentProductName);
    const existingProduct = this.data.order.orderLine.find(({ productName }) => productName === currentProductName);
    console.log(existingProduct);
    this.data.order.removeOrderItem(currentProductName);
    console.log(this.data.order.orderLine);
  }
  needTransport(event) {
    this.needTransportQuestion = event.target.checked;
    console.log(event.target.checked);
  }
  async postlines(order:ServerOrder){
    
    let user = await this.data.checkOutOrder(order).toPromise();
    console.log(user);
    this.data.orderID = user.orderID;
    this.data.postOrderLinesUrl = 'api/OrderLine/'+  this.data.order.orderID
   // var orderItems: {[key:string]:number} = {};
    
    //this.data.orderline.forEach(orderline =>{
     // orderItems[orderline.productID] = orderline.quantity;
    //});
     this.data.postOrderlines(this.data.orderItems).subscribe(
       {
         next: data => {console.log(data)},
         error: err=>{console.error(err)}
       }
     );
  }
  async postPickUpOrders(){
    let user = await this.data.checkOutPickUpOrder(this.data.pickUPOrder).toPromise();
    console.log(user);
    this.data.orderID = user.orderID;
    this.data.postOrderLinesUrl = 'api/OrderLine/'+  this.data.order.orderID;
    this.data.postOrderlines(this.data.orderItems).subscribe(
      {
        next: data => {console.log(data)},
        error: err=>{console.error(err)}
      }
    );

  }
 async  postDeliveryOrderAsync(){
   let order = await this.data.checkOutOrder(this.data.serverOrder).toPromise();


  }
 
}
