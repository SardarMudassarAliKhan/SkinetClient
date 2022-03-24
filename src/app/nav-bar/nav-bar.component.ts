import { BasketService } from './../basket/basket.service';
import { IBasket } from './../shared/models/Basket';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  basket$: Observable<IBasket>
  constructor(private basketservice:BasketService) { }

  ngOnInit(): void {
   this.basket$= this.basketservice.basket$
  }

}
