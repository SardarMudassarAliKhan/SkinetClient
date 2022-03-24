import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'errors',component:TestErrorComponent,data:{breadcrumb:'Test Error'}},
  {path:'shop',loadChildren:()=>
  import('./shop/shop.module').then(mod=>mod.ShopModule),data:{breadcrumb:"Shop"}},
  {path:'basket',loadChildren:()=>
  import('./basket/basket.module').then(mod=>mod.BasketModule),data:{breadcrumb:"Basket"}},
  {path:'checkout',loadChildren:()=>
  import('./checkout/checkout.module').then(mod=>mod.CheckoutModule),data:{breadcrumb:"Checkout"}},
  {path:"not-found",component:NotFoundComponent,data:{breadcrumb:'Not-found'}},
  {path:'server-error',component:ServerErrorComponent,data:{breadcrumb:'Server-error'}},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
