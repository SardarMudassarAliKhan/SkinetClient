import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baseurl = environment.baseurl;
  validationerror:any[];
  constructor(private https:HttpClient) { }

  ngOnInit(): void {

  }

  get404Error()
  {
    this.https.get(this.baseurl+"Products/GetProductById?id=42").subscribe(res=>{
      console.log(res)
    },errors=>{
      console.log(errors)
    })
  }
  get400Error()
  {
    this.https.get(this.baseurl+"Buggy/BadRequest").subscribe(res=>{
      console.log(res)
    },errors=>{
      console.log(errors)
    })
  }
  get400ValidationError()
  {
    this.https.get(this.baseurl+"Buggy/fortyTwo").subscribe((res:any[])=>{
      console.log(res)
    },errors=>{
      console.log(errors)
      this.validationerror=errors;
    })
  }
  get500Error()
  {
    this.https.get(this.baseurl+"Buggy/servererror").subscribe(res=>{
      console.log(res)
    },errors=>{
      console.log(errors)
    })
  }
}
