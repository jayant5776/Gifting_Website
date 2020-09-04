import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public list: any = [];

  constructor(public router: Router, private http: HttpClient) { }

  async makeCall(){
    const url = "http://localhost:5000/alluser";
    const result = await this.http.get(url).toPromise();
    this.list = result;
  }


  ngOnInit(): void {
  }

}
