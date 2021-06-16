import { Component, Input, OnInit } from '@angular/core';
import { Pin } from '../pin.model';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private pinService: PinService) {}
  // @Input() pinState: string;
  // @Input() pinDesc: string;
  // @Input() pinNum: string;
  // @Input() pinId: string;
  @Input() pin: Pin;
  toggle(): void {
    if (this.pin.state === 'on') this.pin.state = 'off';
    else this.pin.state = 'on';
    this.pinService.updatePin(
      this.pin.id,
      this.pin.pin_num,
      this.pin.state,
      this.pin.color
    );
  }

  // opacity(): void {
  //   let card = document.getElementsByClassName(
  //     'content'
  //   ) as HTMLCollectionOf<HTMLElement>;
  //   // if (this.pinState != 'OFF') {
  //   //   card[0].style.opacity = '1';
  //   // }
  // }
  onDelete() {
    this.pinService.deletePin(this.pin.id);
  }
  ngOnInit(): void {
    // this.opacity();
  }
}
