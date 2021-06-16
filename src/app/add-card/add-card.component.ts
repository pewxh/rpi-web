import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pin } from '../pin.model';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  constructor(private pinService: PinService) {}
  isHidden: boolean = true;
  pin_num: number;
  color: string = '';

  ngOnInit(): void {
    // this.opacity();
  }
  addPin() {
    this.isHidden = true;
    if (this.pin_num > 0 && this.pin_num < 30)
      this.pinService.addPin(this.pin_num, this.color);
  }
  toggle() {
    this.isHidden = false;
  }
}
