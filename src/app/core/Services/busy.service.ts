import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount =0

  constructor(private spinnersservice:NgxSpinnerService) { }
  busy()
  {
    this.busyRequestCount++
    this.spinnersservice.show(undefined,{
      type:'timer',
      bdColor:'rgba(255,255,255,0.7)',
      color: 'orange'
    })
  }
  idle()
  {
    this.busyRequestCount--;
    if(this.busyRequestCount<=0)
    {
      this.busyRequestCount=0;
      this.spinnersservice.hide();
    }
  }
}
