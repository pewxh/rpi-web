import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pin } from './pin.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  private id: number = 4;
  constructor(private http: HttpClient, private router: Router) {}
  private pins: Pin[] = [];
  private url: string = 'http://localhost:5000/pins/';
  private pinUpdated = new Subject<Pin[]>();

  getPins() {
    this.http
      .get<Pin[]>(this.url)
      .pipe(
        map((pinData) => {
          return pinData.map((pin) => {
            return {
              id: pin.id,
              pin_num: pin.pin_num,
              state: pin.state,
              color: pin.color,
            };
          });
        })
      )
      .subscribe((alteredPinData) => {
        this.pins = alteredPinData;
        this.pinUpdated.next([...this.pins]);
      });
  }
  addPin(pin_num: number, color: string) {
    // const pin: Pin = {
    //   id: 0, //will be updated automatically
    //   pin_num: pin_num,
    //   state: state,
    //   color: color,
    // };
    let pin = {
      pin_num: pin_num,
      color: color,
      state: 'on',
      id: this.id++,
    };

    this.http
      .post<{ message: string; postId: string }>(this.url, pin)
      .subscribe((resp) => {
        // pin.id = resp.postId;
        // console.log(resp.postId);
        this.pins.push(pin);
        this.pinUpdated.next([...this.pins]);
        this.router.navigate(['']);
      });
  }
  getPinUpdatedListener() {
    return this.pinUpdated.asObservable();
  }

  deletePin(id: number) {
    this.http.delete(this.url + id).subscribe(() => {
      const updatedPins = this.pins.filter((pins) => pins.id !== id);
      this.pins = updatedPins;
      this.pinUpdated.next([...this.pins]);
    });
  }
  getPin(id: number) {
    return this.http.get<{
      id: number;
      pin_num: string;
      state: string;
      color: string;
    }>(this.url + id.toString);
  }

  updatePin(id: number, pin_num: number, state: string, color: string) {
    const pin: Pin = {
      id: id,
      pin_num: pin_num,
      color: color,
      state: state,
    };
    this.http.put(this.url + id, pin).subscribe((response) => {
      const updatedPins = [...this.pins];
      const oldPostIdx = updatedPins.findIndex((p) => p.id === pin.id);
      updatedPins[oldPostIdx] = pin;
      this.pins = updatedPins;
      this.pinUpdated.next([...this.pins]);
      this.router.navigate(['/']);
    });
  }
}
