import { Component, OnInit } from '@angular/core';


import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'home-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[]
})
export class ProductComponent implements OnInit {
  products:Product[];
  

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    console.log("Fetching data from service");
    this.prodService.getProducts().
    subscribe(result=>this.products=result);
    
   
  }

}
