import { IBasket } from './../shared/models/Basket';
import { environment } from './../../environments/environment';
import { ITypes } from './../shared/models/producttypes';
import { IBrands } from './../shared/models/brands';
import { IPagination } from 'src/app/shared/models/pagination';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl = environment.baseurl

   constructor(private httpclient:HttpClient)
   {

   }
   getProduct(id:number)
   {
     return this.httpclient.get<IProduct>(this.baseurl+"Products/GetProductById/?id="+id)
   }
   getProducts()
   {
    return this.httpclient.get<IPagination>(this.baseurl+'Products/GetProducts?pageSize=50');
   }
   gerBrands()
   {
    return this.httpclient.get<IBrands[]>(this.baseurl+"Products/GetProductBrand");
   }
   getProductTypes()
   {
    return this.httpclient.get<ITypes[]>(this.baseurl+"Products/GetProductTypes");
   }
}
