import { BasketService } from './basket.service';
import { observable, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasket, IBasketItem } from '../shared/models/Basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket$:Observable<IBasket>
  constructor(private basketservice:BasketService) { }

  ngOnInit(): void {
   this.basket$ = this.basketservice.basket$
  }
  removebasketItem(item:IBasketItem)
  {
    this.basketservice.removeitemfrombasket(item);
  }
  IncremetItem(item:IBasketItem)
  {
    this.basketservice.IncrementQuantity(item)
  }
  DecerementItem(item:IBasketItem)
  {
    this.basketservice.decrementQuantity(item)
  }

}
