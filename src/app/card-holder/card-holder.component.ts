import { Component, OnInit } from '@angular/core';
import { Pin } from '../pin.model';
import { PinService } from '../pin.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css'],
})
export class CardHolderComponent implements OnInit {
  constructor(public pinService: PinService) {}
  pins: Pin[] = [];
  private pinSub: Subscription;
  ngOnInit(): void {
    this.pinService.getPins();
    this.pinSub = this.pinService
      .getPinUpdatedListener()
      .subscribe((pins: Pin[]) => {
        this.pins = pins;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.pinSub.unsubscribe();
  }
}
