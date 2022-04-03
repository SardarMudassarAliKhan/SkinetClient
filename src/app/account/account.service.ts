import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IUser } from './../shared/models/user';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 baseurl = environment.baseurl
 private curruntUserSource = new ReplaySubject<IUser>(1);
 curruntUser$ = this.curruntUserSource.asObservable();
  constructor(private http:HttpClient,private router:Router) {

  }
  // getCurruntuserValue()
  // {
  //   return this.curruntUserSource.value;
  // }
   loadCurruntUser(token:string)
   {
     if(token==null)
     {
       this.curruntUserSource.next(null);
       return of(null);
     }
    let headers = new HttpHeaders();
    headers = headers.set("Authorization",`Bearer ${token}`);
    return this.http.get(this.baseurl+'Account/GetCurruntUser',{headers}).pipe(
      map((user:IUser)=>{
          if(user)
          {
            localStorage.setItem("token",user.token);
            this.curruntUserSource.next(user);
          }
      })
    )
   }
  login(values:any)
  {
    return this.http.post(this.baseurl+"account/login",values).pipe(
      map((user:IUser)=>
      {
        if(user)
        {
          localStorage.setItem('token',user.token);
          this.curruntUserSource.next(user);
        }
      })
    );
  }
  register(values:any)
  {
   return this.http.post(this.baseurl+"account/register",values).pipe(
      map((user:IUser)=>
      {
        if(user)
        {
        localStorage.setItem("token",user.token);
        this.curruntUserSource.next(user);
        }
      })
    )
  }
  logout()
  {
    localStorage.removeItem('token');
    this.curruntUserSource.next(null);
    this.router.navigateByUrl('/');
  }
  checkemailexists(email:string)
  {
    return this.http.get(this.baseurl+'account/emailexists?Email='+email)
  }

}
