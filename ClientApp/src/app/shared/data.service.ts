
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IProduct, CementProduct, Product, MomoProvider, IMomoProvider } from '../domain/product';
import { ReturnStatement } from '@angular/compiler';
import { CollectionOrder, DeliveryAreas, DeliveryOrder, ICollectionDays, 
  IDeleiveryDay, IDeliveryAreas, IVehicles, Order, OrderLine,
   PickUpOrder, ServerDelivery, ServerOrderItems,  ServerOrderLine} from '../domain/order';
import { ServerOrder } from '../domain/ServerOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //========================== URLs product =====================================
  private serverProductsUrl = 'api/Products';
  private serverSearchedProductUrl ='api/Products/GetSearchedProducts'
  //=============================MOMO NUMBERS=====================
  private serverAirTelUrl = 'api/AirTelNumbers';
  private serverMtnUrl = 'api/MTNNumbers';
  private serverVodafoneUrl = 'api/VodafoneNumbers';
  private serverMoMoProviderUrl = 'api/MoMoProviders';
  //================================ Delivery types====================
  private serverCollectionDaysUrl = 'api/CollectionDaysAvaliable';
  private serverDeliveryDaysUrl = 'api/DeliveryDaysAvaliable';
  private serverDeliveryAreasUrl = 'api/DeliveryAreas';
  private serverTransportCostUrl = 'api/TransportCost';
  //================================post data to server=========================
  private postOrdersUrl ='api/Orders';
  public postOrderLinesUrl = '';

  private postPickUpOrder ='api/PickUpOrders';
  public postDeliveryUrl = 'api/Delivery/';
  public decorativeAggregateDesc = `
  Instantly transform your garden, drive, path or pond with 
  gravel or aggregate. Gravel and aggregates are low maintenance, 
  affordable and easy to lay. It comes in 25kg bags, 
  we stock the most extensive range of quality aggregates`;
  public buildingAggregateDec = `
  We stock all grades of sand including 0-4mm Sharp Sand, 
  Building Sand and Cable or Reject Sand.
   We also supply specialist equestrian, landscaping, sports, play, and tree pit sands
  `;
  public tilesDes =`With its eclectic variation and veining, 
  marble is a bold and unique material. Alternatively, opt for a porcelain effect version
   that is more suitable for wet areas like the bathroom.`;
  public cementProductDescription= `It comes in 50kg bags, we stack 
  50 bags to the pallet. We can supply up
  to four pallets (200 bags) to a customer within 7 days. Anything more than that,
  you need place order a week in advance by calling 01245779324455`;
 //======================== TEST DATA URLs===========================

  private producturl = 'data/products.json';
  private cementUrl = 'data/cement.json';
  private deliveryDatesUrl = 'data/Calender.json';
  private collectionDaysUrl = 'data/Collection.Day.json';
  private momoProvidersUrl = 'data/Momo.Providers.json';
  private transportCostUrl ='data/transport.cost.json';
  private deliveryAreaUrl = 'data/delivery.areas.json';
  public vodafoneNumbersUrl = 'data/Vodafone.Numbers.json';
  public mtnNumbersUrl = 'data/MTN.Numbers.json';
  public airtelNumbersUrl = 'data/Airtel.Numbers.json';
  

  //===================== Objects =====================================
  public order: Order = new Order();
  public  pickUPOrder: PickUpOrder ;
  public  collectionOrder: CollectionOrder;
  public  deliveryOrder: DeliveryOrder;
  public checkOutObj : Object;
  public serverOrder : ServerOrder = new ServerOrder();
  public delivery: ServerDelivery;
  public serverItems: ServerOrderItems[] = []
  //============================ product prices===================================
  public ghacem_s_s_price = 0;
  public ghacem_s_r_price = 0;
  public ghacem_s_e_price = 0;
  public dangote_price = 0;
  public cimaf_ultimate_price = 0;
  public cimaf_classic_price = 0;
  public peblesPrice =0;
  public limestonePrice = 0;
  public sandstonePrice= 0;
  public chippingsPrice =0;
  public buildingAggregatesPrice = 0;
  //===================================== product IDs============================
  public ghacem_s_s_ID = "";
  public ghacem_s_r_ID = "";
  public ghacem_s_e_ID = "";
  public dangote_ID = "";
  public cimaf_ultimate_ID = "";
  public cimaf_classic_ID = "";
  public peblesID ="";
  public limestoneID = "";
  public sandstoneID= "";
  public chippingsID ="";
  public buildingAggregatesID = "";


  public orderID: string = "";
  //================================= products weight and units==================
  public ghacem_s_s_weight = 0;
  public ghacem_s_r_weight = 0;
  public ghacem_s_e_weight = 0;
  public dangote_weight = 0;
  public cimaf_ultimate_weight = 0;
  public cimaf_classic_weight = 0;
  //=========================== Order calculations============================
  public totalCost = 0;
  public deliveryCost: number = 0;
  public transportReuestLevel = 190;
  public deliveryDistance: number = 0;
  public deliveryCostPerKilometer: number = 0;
  public currentOrderType: string = "";
  //------------------------ UIs control booleans ------------------------
  public deliveryOption: boolean = false;
  public collectionOption: boolean = false;
  public areaSelected: boolean = false;
  public showTransportTypeOption: boolean = false;
  public showcollectionDays: boolean = false;
  public showPickUpOrders:boolean = false;
  public showCheckOutButton : boolean = false;
  public isCustomerDetailsComplete :boolean = false;
  public isCustomerNameComplete: boolean = false;
  public isMoMOmoneyValide: boolean= false;
  public isMomoNumbersValide: boolean= false;
//================ =========================== server data=======================================
public orderline: Array<ServerOrderLine> = new Array<ServerOrderLine>();

  
  //========================================   data=================================================
  public orderItems: {[key:string]:number} = {};
  public momoProvider: any[] = [];
  public product: IProduct[] = [];
  public deliveryDatesAvaliable: IDeleiveryDay[] = []
  public collectionDaysAvaliable: ICollectionDays[] =[];
  public deliveryVehicles: IVehicles[]= [];
  public deliveryArea: IDeliveryAreas[] = []
  public vodafoneNumbers: any[]= [];
  public mtnNumbers: any[]= [];
  public airtelNumbers: any[]= [];
  public stockedProductNames: string[] = [];

  public cementProducts: Array<Product> = new Array<Product>();
//==============================================  constructor================================
  constructor(private http: HttpClient) {
    this.getProducts().subscribe({
      next: data => { this.product = data; this.setProductData(data); this.setProductPrices(data); this.setProductweight(data) },
      error: err => { }
    });
    this.getAvaliableDeliveryDates().subscribe({
      next: data => { this.deliveryDatesAvaliable = data; },
      error: err => { }
    });
    this.getAvaliableCollectionDates().subscribe({
      next: data => { this.collectionDaysAvaliable = data; },
      error: err => { }
    });
    this.getVehicles().subscribe({
      next: data => { this.deliveryVehicles = data; },
      error: err => { }
    });
    this.getDeliveryAreas().subscribe({
      next: data => { this.deliveryArea = data; },
      error: err => { }
    });
    this.getMomoProviders().subscribe({
      next: data => {this.momoProvider = data},
      error: err => {}
    });
    this.getVodafoneNumbers().subscribe({
      next: data => {this.vodafoneNumbers = data},
      error: err => {}
    });
    this.getMTNNumbers().subscribe({
      next: data => {this.mtnNumbers = data},
      error: err => {}
    });
    this.getAirtelNumbers().subscribe({
      next: data => {this.airtelNumbers = data},
      error: err => {}
    });

  }

    //============================================get searching products===================================
    getSearchedProducts(searchTerm:string): Observable<IProduct[]> {
      
      let params1 = new HttpParams().set("term", searchTerm)
      return this.http.get<IProduct[]>(this.serverSearchedProductUrl, {params: params1}
        );//.pipe( //we pass the return data without manupulatio);
       // tap(returnedProducts => console.log('Searched Product ' + JSON.stringify(returnedProducts))), catchError(this.handleError)
  
      //);
    }

  //=============================== post deliver ====================================
  postDelivery(data:ServerDelivery):Observable<ServerDelivery>{
    return this.http.post<ServerDelivery>( this.postDeliveryUrl, data, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
  //==============================test orderline======================================
  orderlineServerUrl(orderid: string) : string{
    return "api/Orders//Orderlines";
    }
  //================================= test post===========================================
  testPost(data:DeliveryAreas):Observable<DeliveryAreas>{
    return this.http.post<DeliveryAreas>('api/Orders/132639048254256952/Orderlines', data, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
  //==============================checkout Picup order=============================
  checkOutPickUpOrder(order:PickUpOrder):Observable<PickUpOrder>{
    return this.http.post<PickUpOrder>(this.postOrdersUrl, order, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
  //============================================ check out PicUpOrders =======================
  checkOutOrder(order:ServerOrder):Observable<ServerOrder>{
    return this.http.post<ServerOrder>(this.postOrdersUrl, order, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
  //========================= post Orderlines===========================================
  postOrderlines(orderline:any):Observable<any>{
    return this.http.post<any>( this.postOrderLinesUrl, orderline, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
  }
    //============================================ check out Collection Orders =======================
    checkOutCollectionOrder(order:CollectionOrder):Observable<CollectionOrder>{
      return this.http.post<CollectionOrder>(this.postOrdersUrl, order, {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      });
    }
    //====================================================check out delivery orders======================
    checkOutDeliveryOrder(order:DeliveryOrder):Observable<DeliveryOrder>{
      return this.http.post<DeliveryOrder>(this.postOrdersUrl, order, {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      });
    }
  //=========================================Change delivery options=========================================================
  changeDeliveryOption(){
    this.deliveryOption = true;
  }
  changeCollectionOption(){
    this.deliveryOption = true;
  }
    //================================================ get MTN numbers=================================
    getAirtelNumbers() : Observable<any[]> {
      return this.http.get<any[]>(this.serverAirTelUrl)
      .pipe(
        tap(airtel => console.log("airtel numbers" + JSON.stringify(airtel))), catchError(this.handleError)
      );
    }
   //================================================ get MTN numbers=================================
   getMTNNumbers() : Observable<any[]> {
    return this.http.get<any[]>(this.serverMtnUrl)
    .pipe(
      tap(mtn => console.log("mtn numbers" + JSON.stringify(mtn))), catchError(this.handleError)
    );
  }
  //================================================ get vodafone numbers=================================
  getVodafoneNumbers() : Observable<any[]> {
    return this.http.get<any[]>(this.serverVodafoneUrl)
    .pipe(
      tap(vodafoneNumbers => console.log("vodafone numbers" + JSON.stringify(vodafoneNumbers))), catchError(this.handleError)
    );
  }
  //=============================================get cement products====================================
  getMomoProviders(): Observable<IMomoProvider[]> { // http.get returns an  of Observable obj like a list of obj
    return this.http.get<IMomoProvider[]>(this.serverMoMoProviderUrl).pipe( //we pass the return data without manupulatio);
      tap(momoMoney => console.log('Avaliable momo Providers ' + JSON.stringify(momoMoney))), catchError(this.handleError)

    );
  }

  //=============================================get cement products====================================
  getProducts(): Observable<IProduct[]> { // http.get returns an  of Observable obj like a list of obj
    return this.http.get<IProduct[]>(this.serverProductsUrl).pipe( //we pass the return data without manupulatio);
      tap(cementdata => console.log('Avaliable Cements Products ' + JSON.stringify(cementdata))), catchError(this.handleError)

    );
  }


   //=============================================get avaliable delivery dates====================================
   getAvaliableDeliveryDates(): Observable<IDeleiveryDay[]> { // http.get returns an  of Observable obj like a list of obj
    return this.http.get<IDeleiveryDay[]>(this.serverDeliveryDaysUrl).pipe( //we pass the return data without manupulatio);
      tap(delivery => console.log('Avaliable delivery dates ' + JSON.stringify(delivery))), catchError(this.handleError)

    );
  }
    //=============================================get avaliable collection days dates====================================
    getAvaliableCollectionDates(): Observable<ICollectionDays[]> { // http.get returns an  of Observable obj like a list of obj
      return this.http.get<ICollectionDays[]>(this.serverCollectionDaysUrl).pipe( //we pass the return data without manupulatio);
        tap(delivery => console.log('Avaliable collection dates ' + JSON.stringify(delivery))), catchError(this.handleError)
  
      );
    }
      //=============================================get transport vehicles====================================
      getVehicles(): Observable<IVehicles[]> { // http.get returns an  of Observable obj like a list of obj
        return this.http.get<IVehicles[]>(this.serverTransportCostUrl).pipe( //we pass the return data without manupulatio);
          tap(delivery => console.log('Avaliable Vehicles ' + JSON.stringify(delivery))), catchError(this.handleError)
    
        );
      }
      //=================================== get delivery areas=========================================
      getDeliveryAreas(): Observable<IDeliveryAreas[]> { // http.get returns an  of Observable obj like a list of obj
        return this.http.get<IDeliveryAreas[]>(this.serverDeliveryAreasUrl).pipe( //we pass the return data without manupulatio);
          tap(delivery => console.log('Avaliable delivery areas ' + JSON.stringify(delivery))), catchError(this.handleError)
    
        );
      }
    

  //=========================== set Product prices ==================================
  setProductData(product: IProduct[]): void {
  
    product.forEach(p => {
      if (p.category === "Cement") {
        let cement = new Product();
        cement.id = p.id;
        cement.productName = p.productName;
        cement.productUrl = p.productUrl;
        cement.imageUrl = p.imageUrl
        cement.packaging = p.packaging;
        cement.description = p.description;
        cement.origin = p.origin;
        cement.stocklevel = p.stocklevel;
        cement.price = p.price;
        cement.category = p.category;
        cement.weight = p.weight;
        cement.unit = p.unit;
        this.cementProducts.push(cement);
      }


    });
  }
  //==================== set weight=================
  setProductweight(product: IProduct[]) {

    product.forEach(p => {
      if (p.productName === "GHACEM Super Strong") {
        
        this.ghacem_s_s_weight = p.weight;

        
        console.log("ghacem ss weight " + this.ghacem_s_s_weight);
      }
      if (p.productName === "GHACEM Super Extra") {
        this.ghacem_s_e_price = p.price;
        this.ghacem_s_e_weight = p.weight;
      }
      if (p.productName === "GHACEM Super Rapid") {
        this.ghacem_s_r_price = p.price;
        this.ghacem_s_r_weight = p.weight;
      }
      if (p.productName === "CIMAF Ultimate") {
        this.cimaf_ultimate_price = p.price;
        this.cimaf_ultimate_weight = p.weight;
      }
      if (p.productName === "CIMAF Classic") {
        this.cimaf_classic_price = p.price;
        this.cimaf_classic_weight = p.weight;
      }
      if (p.productName === "Dangote") {
        this.dangote_price = p.price;
        this.dangote_weight = p.weight;
      }

    });



  }
  //---------------------- set cemtent prices-------------------
  setProductPrices(product: IProduct[]) {

    product.forEach(p => {
      if (p.productName === "GHACEM Super Strong") {
        this.ghacem_s_s_price = p.price;
        this.ghacem_s_s_ID = p.id.toString();
        

        console.log("ghacem ss price " + this.ghacem_s_s_price);
        
      }
      if (p.productName === "GHACEM Super Extra") {
        this.ghacem_s_e_price = p.price;
        this.ghacem_s_e_weight = p.weight;
        this.ghacem_s_e_ID = p.id.toString();
      }
      if (p.productName === "GHACEM Super Rapid") {
        this.ghacem_s_r_price = p.price;
        this.ghacem_s_r_weight = p.weight;
        this.ghacem_s_r_ID = p.id.toString();
      }
      if (p.productName === "CIMAF Ultimate") {
        this.cimaf_ultimate_price = p.price;
        this.cimaf_ultimate_weight = p.weight;
        this.cimaf_ultimate_ID = p.id.toString();
      }
      if (p.productName === "CIMAF Classic") {
        this.cimaf_classic_price = p.price;
        this.cimaf_classic_weight = p.weight;
        this.cimaf_classic_ID = p.id.toString();
      }
      if (p.productName === "Dangote") {
        this.dangote_price = p.price;
        this.dangote_weight = p.weight;
        this.dangote_ID = p.id.toString();
      }
      if (p.productName === "Pebles") {
        this.peblesPrice = p.price;
      
        this.peblesID = p.id.toString();
      }
      if (p.productName === "Sharp Sand") {
        this.buildingAggregatesPrice = p.price;
      
        this.buildingAggregatesID = p.id.toString();
      }
      if (p.productName === "Limestone") {
        this.limestonePrice = p.price;
      
        this.limestoneID = p.id.toString();
      }
      if (p.productName === "Sandstone") {
        this.sandstonePrice = p.price;
      
        this.sandstoneID = p.id.toString();
      }
      if (p.productName === "Chippings") {
        this.chippingsPrice = p.price;
      
        this.chippingsID = p.id.toString();
      }

    });



  }
  //========================== Find Product=====================================
  findProduct(name: string, product: IProduct[]) {
    let p = this.product.find(p => { p.productName == name });

    return p
  }
  //--------------------------------------------------------------------------------------------------------------------

  addToBasket(product: OrderLine) {
    //var  newOrder = new OrderLine();
    //newOrder.imageUrl = product.imageUrl;
    //newOrder.productName = product.productName;
    //newOrder.quantity = product.quantity;
    //newOrder.price = product.price;
    this.order.orderLine.push(product);

  }

  //============================================================end of getcement===============================
  //------ the http request meth must handle errors to safe gaurd and detect them==============================
  getDashBoardProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.producturl).pipe( // pipe the req res through this functions of the obervable obj
      tap(data => console.log('All ' + JSON.stringify(data))), catchError(this.handleError)
    );
  }
  // to handle errors from the http requset we create a method on the service useing HttpErrorRespose obj as a para
  private handleError(err: HttpErrorResponse) {
    let errorMessage = ``;
    if (err.error instanceof ErrorEvent) { //client side error, network connection or mishaps
      errorMessage = `An erreor happened: ${err.error.message} `
    } else {

      // Server side error,  server return db code or anything
      errorMessage = `Server return code: ${err.status}, error message is : ${err.message}`
    }
    console.log(errorMessage); // log to console
    return throwError(errorMessage);
  }
  //============================================= set cement products data ====================




}

