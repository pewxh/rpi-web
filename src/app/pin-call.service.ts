import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PinCallService {
  constructor(private http: HttpClient) {}
  public getState() {
    return this.http.get('http://192.168.1.18:5000/pins/');
  }
}
