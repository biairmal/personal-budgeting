import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@personal-budgeting/api-interfaces';

@Component({
  selector: 'personal-budgeting-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
