import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserModel } from './shared/users.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) {

  }

  
  selector = '0';

  onTabSelected(selector: string) {
    this.selector = selector;
  }
}
