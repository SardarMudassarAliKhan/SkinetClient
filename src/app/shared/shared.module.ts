import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    OrderTotalComponent,
    InputTextComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule
  ],
  exports:[
    CarouselModule,
    OrderTotalComponent,
    ReactiveFormsModule,
    InputTextComponent,
    CdkStepperModule
  ]
})
export class SharedModule { }
