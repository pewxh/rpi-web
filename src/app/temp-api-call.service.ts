import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TempApiCallService {
  constructor(private http: HttpClient) {}
  public getDataDB() {
    return this.http.post(
      'https://cdlv2pvspg.execute-api.ap-south-1.amazonaws.com/dev',
      {}
    );
  }
}
