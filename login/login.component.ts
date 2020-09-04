import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router, private fb : FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }


   async loginProcess(){
    const data = this.fbFormGroup.value;
    console.log(data);


    const url = "http://localhost:3000/auth-user";
    const results:any = await this.http.post(url,data).toPromise();

    if(results && results.opr){
      sessionStorage.setItem('sid','true');
      this.router.navigate(['Home']);
    }else{
      this.uiInvalidCredential = true;
    }
    // sessionStorage.setItem('sid','true');
    // this.router.navigate(['Home']);
  }
}
