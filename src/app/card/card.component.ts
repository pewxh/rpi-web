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
  ngOnInit(): void {
    let card = document.getElementsByClassName(
      'content'
    ) as HTMLCollectionOf<HTMLElement>;

    if (this.pinState == 'ON') {
      card[0].style.opacity = '1';
    }
  }
}
