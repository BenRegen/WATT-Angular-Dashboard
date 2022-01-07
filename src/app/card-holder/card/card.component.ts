import { Component, Input } from "@angular/core";

export interface CardInfo {
  title: string,
  statistic: number,
  percentChanged: number,
  imageUrl: string
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() info: CardInfo;

  constructor() {

  }
}
