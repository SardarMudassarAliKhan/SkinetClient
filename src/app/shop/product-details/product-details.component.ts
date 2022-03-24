import { BasketService } from './../../basket/basket.service';
import { BreadcrumbService } from 'xng-breadcrumb';
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
  quantity=1;
  constructor(
    private shopService:ShopService,
    private activateRoute: ActivatedRoute,
    private braedcrumsevice:BreadcrumbService,
    private basketservice:BasketService) { }

  ngOnInit(): void {
   this.loadProduct()
  }
  loadProduct()
  {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(products=>{
      this.products=products
      this.braedcrumsevice.set('@Productdetails',products.name)
    },error=>{
      console.log(error)
    })
  }
  addproducttocart()
  {
    this.basketservice.additemtobasket(this.products,this.quantity)
  }
  decrementQuantity()
  {
    if(this.quantity>1)
    {
      this.quantity--
    }
  }
  incrementQuantity()
  {
    this.quantity++
  }


}
