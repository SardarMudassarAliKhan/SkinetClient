import { ProductItemsComponent } from './product-items/product-items.component';
import { ITypes } from './../shared/models/productTypes';
import { IBrands } from './../shared/models/brands';
import { ShopService } from './shop.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: IProduct[];
  Productbrands: IBrands[];
  producttypes: ITypes[];
  constructor(private shopService:ShopService) { }

  ngOnInit(){
    this.getproducts()
    this.getproductBrands()
    this.getproducysTypes()
  }
  getproducts()
  {
    this.shopService.getProducts().subscribe(responce=>{
      this.products = responce.data;
    },
    error=>{
      console.log(error)
    });
  }
  getproductBrands()
  {
    this.shopService.gerBrands().subscribe((responce:any)=>{
      this.Productbrands = responce;
    },
    error=>{
      console.log(error)
    })
  }
  getproducysTypes()
  {
    this.shopService.getProductTypes().subscribe((responce:any)=>{
      this.producttypes = responce;
    },
    error=>{
      console.log(error)
    })
  }
}
