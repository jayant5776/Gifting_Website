import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  fbFormGroup = this.fb.group({
    GiftId : ['',Validators.required],
    GiftName: ['', Validators.required],
    Price: ['',Validators.required],
    Rating: ['',Validators.required],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  async addToCart(){
    const data = this.fbFormGroup.value;
    console.log(data);

    const url = "http://localhost:5000/adduser";
    await this.http.post(url, data).toPromise();

    await this.fbFormGroup.reset();
  }

}
