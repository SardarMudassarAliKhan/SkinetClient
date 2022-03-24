import * as uuid from "uuid"
export interface IBasket {
    id: string;
    items: IBasketItem[];
}

export interface IBasketItem {
      id: string;
      name: string;
      price: number;
      quantity: number;
      pictureUrl: string;
      brand: string;
      type: string;
  }
  export class Basket implements IBasket
  {
    id= uuid.v4()
    items: IBasketItem[]=[];

  }
export interface IBasketTotal
{
  shipping:number,
  subtotal:number,
  total:number
}



