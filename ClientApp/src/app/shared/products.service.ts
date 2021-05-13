import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../domain/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private producturl = 'data/products.json';
  private cementserverUrl = "api/products";
  private cementdataUrl = "data/cement.json"

  constructor(private http: HttpClient) { }
  //=============================================get cement products====================================
  getCementProducts(): Observable<IProduct[]>{ // http.get returns an  of Observable obj like a list of obj
    return this.http.get<IProduct[]>(this.cementdataUrl).pipe( //we pass the return data without manupulatio);
     tap( cementdata=> console.log('Avaliable Cements Products ' + JSON.stringify(cementdata))), catchError(this.handleError)

    )}
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

}
