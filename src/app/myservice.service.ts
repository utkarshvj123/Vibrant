import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
url = 'https://livescore.sportstarlive.com/api/';
  getLiveScore() {
    return this.http.get<any>(this.url + 'football/fixtures/8/widget');
  }
}
