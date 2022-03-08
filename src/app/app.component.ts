import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from 'src/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet';
  products:any[];
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.http.get("https://localhost:44331/api/Products/GetProducts?pageSize=50")
    .subscribe((responce:IPagination)=>
    {
      this.products= responce.data
    },error=>
    {
      console.log(error)
    });
  }
}
