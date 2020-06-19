import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiconnService {
public customer;

private httpOptions: { headers; observe; } = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response'
};

  constructor(private http:HttpClient) { }

  getTables(): Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/users/tables");
  }
  //async return type should be promise
   createCustomer(customerJson): Observable<any>
    {
      
     // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');  {headers:headers}
     return this.http.put("http://localhost:8080/api/v1/users/customers",customerJson,this.httpOptions);
    }
    getMenuCategories(): Observable<any>{
      return this.http.get("http://localhost:8080/api/v1/menu/categories");
    }
    getMenuItems(id): Observable<any>{
      return this.http.get("http://localhost:8080/api/v1/menu/categories/"+id);

    }
    //customer adds items to their order
    addMenuItems(itemId,orderId):Observable<any>{
      // build a json  
      var itemOrder = [{
    "orderOwner": "string",
    "fkOrderId": orderId,
    "fkMenuItemId": itemId,
    "quantity": 0,
    "id": 0
       }];
       
      return this.http.put("http://localhost:8080/api/v1/orders/customer/additems",JSON.stringify(itemOrder),this.httpOptions);

    }


    //eoc
}
