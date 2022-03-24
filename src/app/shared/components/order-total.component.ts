import { BasketService } from './../../basket/basket.service';
import { IBasketTotal } from './../models/Basket';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})
export class OrderTotalComponent implements OnInit {

  basketTotal$: Observable<IBasketTotal>
  constructor(private basketservice:BasketService) { }

  ngOnInit(): void {
    this.basketTotal$=this.basketservice.basketTotal$
  }

}
