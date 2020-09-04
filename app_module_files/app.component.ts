import { Component } from '@angular/core';
import {faSearch, faGift} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanStack-project';

  public faSearch = faSearch;

  public faGift = faGift;
}
