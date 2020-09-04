import { Component, OnInit } from '@angular/core';
import { faSearch, faGift } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faLinkedin, faGooglePlus} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  public faFacebook = faFacebook;

  public faTwitter = faTwitter;

  public faLinkedin = faLinkedin;

  public faGooglePlus = faGooglePlus;

  public faSearch = faSearch;

  public faGift = faGift;


  linkList = [{ title: 'FEATURES', link: 'features' },
  { title: 'COLLECTION', link: 'collection' },
  { title: 'SHOP', link: 'shop' },
  { title: 'ABOUT US', link: 'about us' }];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const sid = sessionStorage.getItem('sid');
    if(!sid){
      this.router.navigate(['login']);
    }
  }

  logoutProcess(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

}
