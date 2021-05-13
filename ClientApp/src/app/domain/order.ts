
export class Order {
    id: number;
    orderID: string;
    orderType: string = '';
    customerName: string = '';
    momoProvider: string ="";
    momoNumber: string = "";

    orderDate: Date = new Date();
    transportOption: string = "";
    deleiveryDay: string = "";
    collectionDay: string = "";
    costPerKillometer: number = 0;

    public deliveryOption: DeliveryAreas = new DeliveryAreas();
    public orderLine: Array<OrderLine> = new Array<OrderLine>();
    public serverOrderline: Array<ServerOrderLine> = new Array<ServerOrderLine>();

    public get PickUpTime(): string {
        let d = new Date();
        if (this.collectionDay.length < 4 || this.deleiveryDay.length < 4) {

            d.setDate(new Date().getDate() + 1);
            console.log(d);
            let sunday = d.getDay();
            if (sunday === 0) {
                d.setDate(new Date().getDate() + 2);
                console.log(d);
                return "We are closed on Sunday, Collect your item on: " + " " + d.toDateString();
            }
            console.log(sunday);
            return "Collect your order by" + " " + d.toDateString();
        } else {
            return "";

        }


    }
    public get deliveryCost() {
        if (this.deleiveryDay === "") {
            return 0;
        }
        let cost;
        let weight;
        weight = this.totalWeight;



        if (weight < 500) {
            cost = this.deliveryOption.distance * this.costPerKillometer;
            console.log(cost);

        } else
            if (weight => 500 && weight <= 1000) {
                cost = this.deliveryOption.distance * this.costPerKillometer;

            } else
                if (weight => 1000 && weight <= 2000) {
                    cost = this.deliveryOption.distance * this.costPerKillometer;

                }
        return cost;
    }

    public get subTotal(): number {
        const result = this.orderLine.reduce(
            (total, currentValue) => {
                return total + (currentValue.unitPrice * currentValue.quantity);
            }, 0);
        return result;
        // return orderline.reduce((accumulator, currenValue) => accumulator + currenValue.price, inialValue);
    }
    public get totalWeight(): number {
        const result = this.orderLine.reduce(
            (total, currentValue) => {
                return total + currentValue.totalWeight;
            }, 0);
        return result;
    }
    public getTotalWeight(orderline: Array<OrderLine>) {
        let inialValue = 0;
        return orderline.reduce((accumulator, currenValue) => accumulator + (currenValue.weight * currenValue.quantity), inialValue);
    }
    public totalCost(orderline: Array<OrderLine>) {
        let inialValue = 0;
        return orderline.reduce((accumulator, currenValue) => accumulator + currenValue.price, inialValue);
    }



    public removeOrderItem(productName) {
        this.orderLine = this.orderLine.filter(function (orderLine) {
            return orderLine.productName !== productName;
        });

    }

}
export class ServerDelivery{
    region: string ;
    district: string;
    weight: number;
    cost:number;
}
export class OrderLine {
    productID: string;
    unitPrice: number;
    imageUrl: string;
    productUrl: string;
    weight: number;
    totalWeight: number;
    productName: string;
    quantity: number;
    price: number;



}
export class ServerOrderItems{
    productName:string;
    quantity: number;
    weight:number;
    productPrice:number;
}

export class ServerOrderLine{
    orderID: string;
    productID: string;
    quantity: number;
   
}
export class DeleiveryDay {
    id: number;
    year: number;
    monthNumber: number;
    mouthName: string;
    dayOfMonthName: string;
    dayOfMonthNumber: number;
    start: string;
    end: string;
    shift: string;
}
export interface IDeleiveryDay {
    id: number;
    year: number;
    monthNumber: number;
    mouthName: string;
    dayOfMonthName: string;
    dayOfMonthNumber: number;
    start: string;
    end: string;
    shift: string;
}
export interface ICollectionDays {
    id: number;
    year: number;
    monthNumber: number;
    mouthName: string;
    dayOfMonthName: string;
    dayOfMonthNumber: number;
    shift: string;
}
export interface IDeliveryAreas {
    id: string
    region: string;
    district: string;
    distance: number;
    unit: string;

}
export class DeliveryAreas {
    id: string;
    region: string;
    district: string;
    distance: number;
    unit: string;

}
export interface IVehicles {
    costPerKillometer: number;
    payload: number;
    unit: string;
}
export class TransportCost {
    costPerKillometer: number;
    payload: number;
    unit: string;
}
//======================================== order Objects to server================================
export class PickUpOrder {
  
   
    collectionDate: string = "";
    customerName: string = "";
    momoNumber: string = "";
  
    momoProvider: string ="";
  
    orderDate: string = "";
    orderID: string = "";
    orderType: string ="";
    subTotal: number = 0.0000;
    weight : number = 0.00;
    orderLine: Array<OrderLine> = new Array<OrderLine>();
 
    /**
     * 
     
    constructor(
        customername?: string, 
          momo?: string, 
          momonumber?:string,
         orderdate: string,
         pickupdate: string, 
         orderline:  Array<OrderLine>,
          cost: number, 
          
          ) {
        this.customerName = customername;
        this.momoProvider = momo;
        this.momoNumber = this.momoNumber
        this.orderLine = orderline;
        this.orderDate = orderdate;
        this.pickUpDate = pickupdate;
        this.totalCost = cost;
    }

*/
}
export class CollectionOrder {
    orderID:string;
    customerName: string = "";
    momoProvider: string ="";
    momoNumber: string = "";
    orderDate: string = "";
    collectionDate: string = "";
    orderLine: Array<OrderLine> = new Array<OrderLine>();
    totalCost: number = 0;
    orderType:string ="";
    subTotal: number = 0.0000;

    /**  
    constructor(orderdate: string, collectiondate: string, orderline:
        Array<OrderLine>, cost: number, customername?: string, momo?: string, momoNumber?: string) {
        this.customerName = customername;
        this.momoProvider = momo;
        this.momoNumber= momoNumber
        this.orderLine = orderline;
        this.orderDate = orderdate;
        this.collectionDate = collectiondate;
        this.totalCost = cost;
    }
*/
}
export class DeliveryOrder {
    collectionDate: string = "";
    orderID:string = "";
    orderType:string = "";
    customerName: string = "";
    momoProvider: string ="";
    momoNumber: string = "";
    orderDate: string = "";
    deleiveryDay: string = "";
    costPerKillometer: number = 0;
    weight: number = 0;
    deliveryCost: number = 0;
    subTotal: number = 0;
    totalCost: number = 0;
    deliveryOption: DeliveryAreas = new DeliveryAreas();
    orderLine: Array<OrderLine> = new Array<OrderLine>();
    /**   
    constructor(

    
    orderdate:string,
    deleiveryday: string,
    costperkillometer: number,
    weight:number,
    deliverycost: number,
    subtotal: number,
    deliveryoption: DeliveryAreas,
    orderline: Array<OrderLine>,
    customer?: string,
    momo?: string, 
    momoNumber?: string
)
{
    
    this.orderDate = orderdate;
    this.deleiveryDay = deleiveryday;
    this.costPerKillometer = costperkillometer;
    this.weight = weight;
    this.deliveryCost = deliverycost;
    this.subTotal = subtotal
    this.totalCost = subtotal + deliverycost;
    this.deliveryOption = deliveryoption;
    this.orderLine = orderline;
    this.customerName = customer;
    this.momoProvider = momo;
    this.momoNumber= momoNumber
}
*/
}
