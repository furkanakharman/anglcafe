import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiconnService {
public customer;

  constructor(private http:HttpClient) { }

  getTables(): Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/users/tables");
  }
  //async return type should be promise
   createCustomer(customerJson): Observable<any>
    {
      const httpOptions: { headers; observe; } = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        }),
        observe: 'response'
      };
     // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');  {headers:headers}
     return this.http.put("http://localhost:8080/api/v1/users/customers",customerJson,httpOptions);
    }
    getMenuCategories(): Observable<any>{
      return this.http.get("http://localhost:8080/api/v1/menu/categories");
    }
    getMenuItems(id): Observable<any>{
      return this.http.get("http://localhost:8080/api/v1/menu/categories/"+id);

    }
    postMenuItems(id){
      //this.http.post();
    }
}
