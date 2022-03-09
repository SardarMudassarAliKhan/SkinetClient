import { IProduct } from './../../shared/models/product';
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  products:IProduct
  constructor(private shopService:ShopService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.loadProduct()
  }
  loadProduct()
  {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(products=>{
      this.products=products
    },error=>{
      console.log(error)
    })
  }

}
