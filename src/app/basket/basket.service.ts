import { map } from 'rxjs/operators';
import { Basket , IBasket, IBasketItem, IBasketTotal } from './../shared/models/Basket';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseurl=environment.baseurl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotal>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  //Contructor
  constructor(private http:HttpClient) { }
  //Get Basket Product
  getBasket(id:string)
  {
     return this.http.get(this.baseurl+'Basket/GetBasketElement?id='+id)
     .pipe(
       map((Basket:IBasket)=>{
         this.basketSource.next(Basket);
         this.CalculateTotals();
         console.log(this.getCurruntValue())
       },error=>{
        console.log(error);
      })
     );
  }
  //Set Basket product
  setBasket(Basket:IBasket)
  {
    return this.http.post(this.baseurl+"Basket/UpdateProduct",Basket).subscribe((Response:IBasket)=>{
      this.basketSource.next(Response);
      this.CalculateTotals();
    },error=>{
      console.log(error);
    });
  }
  //Get Currunt Value Object
  getCurruntValue()
  {
    return this.basketSource.value;
  }
  //add item to basket
  additemtobasket(item:IProduct,quantity=1)
  {
    const idemtoadd:IBasketItem=this.mapItemtoBaskte(item,quantity);
    const basket = this.getCurruntValue()?? this.createbasket()
    basket.items = this.addorupdateitem(basket.items,idemtoadd,quantity)
    this.setBasket(basket)
  }
  private addorupdateitem(items: IBasketItem[], idemtoadd: IBasketItem, quantity: number)
  : IBasketItem[]
  {
    console.log(items)
    const index = items.findIndex(i=>i.id==idemtoadd.id);
    if(index==-1)
    {
      idemtoadd.quantity = quantity;
      items.push(idemtoadd)
    }
    else{
      items[index].quantity +=quantity
    }
    return items
  }
  private createbasket():IBasket {
    const basket:IBasket = new Basket;
    localStorage.setItem("Basket_Id",basket.id);
    return basket;
  }
  private mapItemtoBaskte(item:IProduct,quantity:number):IBasketItem
  {
    return {
      id:item.id,
      name:item.name,
      price:item.price,
      pictureUrl:item.pictureUrl,
      quantity,
      brand:item.productBrand,
      type:item.productType
    };
  }
  //SubTotalInBasket
  private CalculateTotals()
  {
    const basket = this.getCurruntValue();
    const shipping =0;
    const subtotal = basket.items.reduce((a,b)=>(b.price*b.quantity)+a,0)
    const total = subtotal+shipping
    this.basketTotalSource.next({shipping,total,subtotal})
  }
  //ItemIncrement
  IncrementQuantity(item:IBasketItem)
  {
    const basket = this.getCurruntValue();
    const foundItemIndex = basket.items.findIndex(x=>x.id==item.id)
    basket.items[foundItemIndex].quantity++
    this.setBasket(basket)
  }
   decrementQuantity(item:IBasketItem)
  {
    const basket = this.getCurruntValue();
    const foundItemIndex = basket.items.findIndex(x=>x.id==item.id)
    if(basket.items[foundItemIndex].quantity>1)
    {
      basket.items[foundItemIndex].quantity--
      this.setBasket(basket)
    }
    else
    {
      this.removeitemfrombasket(item);
    }
  }
  //Remove Basket Elemet
  removeitemfrombasket(item: IBasketItem) {
    const basket = this.getCurruntValue();
    if(basket.items.findIndex(x=>x.id==item.id))
    {
      basket.items = basket.items.filter(x=>x.id!==item.id)
      if(basket.items.length>0)
      {
        this.setBasket(basket)
      }
      else
      {
        this.delete(basket)
      }
    }

  }
  //Delete product Method
  delete(basket: IBasket) {
    return this.http.delete(this.baseurl+'Basket/DeleteProduct?id='+basket.id).subscribe(()=>{
      this.basketSource.next(null)
      this.basketTotalSource.next(null)
      localStorage.removeItem('Basket_id')
    },error=>{
      console.log(error)
    })
  }
}

