import { IProduct } from "./product";

export interface IPagination
{
  pageIndex:number,
  pageSize:number,
  brandId:number,
  typeId:number,
  count:number
  data:IProduct[]
}
