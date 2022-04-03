import { AccountService } from './../account/account.service';
import { BasketService } from './../basket/basket.service';
import { IBasket } from './../shared/models/Basket';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IUser } from '../shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  basket$: Observable<IBasket>;
  curruntUser$: Observable<IUser>;
  constructor(private basketservice:BasketService,private accountService:AccountService) { }

  ngOnInit(): void {
   this.basket$= this.basketservice.basket$;
   this.curruntUser$=this.accountService.curruntUser$;
  }
  logout()
  {
    this.accountService.logout();
  }

}
