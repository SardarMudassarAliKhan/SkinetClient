import { LoadingInterceptorInterceptor } from './core/Intercepters/loading-interceptor.interceptor';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';
import { ErrorInterceptor } from './core/Intercepters/error-interceptor.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
   {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
