import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Product} from './product';

@Injectable()
export class ProductService {
 products:Product[];

  constructor(private _http:Http) { }

  getProducts():Observable<any> {
    return this._http.get("../assets/products.json")
    .map(response=>this.extractData(response))
  }

 /* getSpecificProducts(prodName:string):Observable<any> {
    console.log("Prduct Name passed is::" + prodName);
    return this._http.get("../assets/products.json")
    .map(res=>this.extractData(res))
    //return {"prodId":110,"prodName":'Hard Drive',"prodPrice":4500,"purchaseDate":"2014/3/12"};
  }*/

  private extractData(res:Response) {
    console.log("###########");
    let body = res.json();
    //console.log("***********" + body[0].prodName);
    return body || {}
  }
}
