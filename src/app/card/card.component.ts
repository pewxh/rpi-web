import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() pinState: string;
  @Input() pinDesc: string;
  @Input() pinNum: string;
  @Input() pinId: string;

  toggle(): void {
    if (this.pinState === 'ON') this.pinState = 'OFF';
    else this.pinState = 'ON';
  }

  // opacity(): void {
  //   let card = document.getElementsByClassName(
  //     'content'
  //   ) as HTMLCollectionOf<HTMLElement>;
  //   // if (this.pinState != 'OFF') {
  //   //   card[0].style.opacity = '1';
  //   // }
  // }

  ngOnInit(): void {
    // this.opacity();
  }
}
