import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total.component'


@NgModule({
  declarations: [
    OrderTotalComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    CarouselModule,OrderTotalComponent
  ]
})
export class SharedModule { }
