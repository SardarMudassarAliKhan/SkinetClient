import { BasketService } from './basket/basket.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  title = 'Skinet';
  constructor(private basketservice:BasketService)
  {

  }
  ngOnInit(): void {
    const basketId = localStorage.getItem("Basket_Id");
    if(basketId)
    {
      this.basketservice.getBasket(basketId).subscribe(()=>{
        console.log("Initiated Basket");
      },error=>{
        console.log(error)
      })
    }
  }



}
