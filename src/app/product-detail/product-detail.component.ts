import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'home-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
prodObject:Product;
flag:boolean;
  constructor(private prodService:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
     // Route parameters are fetched from Activated Route: Observables..paramMap[key and value pair].
    this.route.paramMap.subscribe(params=>
    {
      let pname = params.get('pname');
      this.prodService.getProducts()
      .subscribe(result=>{
        console.log("****" + result[0].prodName);
        
        for(let i=0;i<result.length;i++) {
          if(result[i].prodName==pname) {
            this.flag=true;
            this.prodObject=result[i];
          }
        }
      })
      
    })
  }

}
