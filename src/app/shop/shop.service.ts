import { ITypes } from './../shared/models/producttypes';
import { IBrands } from './../shared/models/brands';
import { IPagination } from 'src/app/shared/models/pagination';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl:string='https://localhost:44331/api/Products';

   constructor(private httpclient:HttpClient)
   {

   }
   getProducts()
   {
    return this.httpclient.get<IPagination>(this.baseurl+'/GetProducts?pageSize=50');
   }
   gerBrands()
   {
    return this.httpclient.get<IBrands[]>(this.baseurl+"/GetProductBrand");
   }
   getProductTypes()
   {
    return this.httpclient.get<ITypes[]>(this.baseurl+"/GetProductTypes");
   }
}
