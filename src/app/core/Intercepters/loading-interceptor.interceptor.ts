import { delay, finalize } from 'rxjs/operators';
import { BusyService } from './../Services/busy.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptorInterceptor implements HttpInterceptor {

  constructor(private busyService:BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes('emailexists'))
    {
      this.busyService.busy();
    }
    return next.handle(request).pipe(
       delay(1000),
       finalize(()=>{
         this.busyService.idle();
       })
    );
  }
}
