import { BasketService } from './../../basket/basket.service';
import { IProduct } from './../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() product:IProduct;
  constructor(private basketservice:BasketService) { }

  ngOnInit(): void {
  }
  AddItemtoBasket()
  {
    this.basketservice.additemtobasket(this.product)
  }

}
