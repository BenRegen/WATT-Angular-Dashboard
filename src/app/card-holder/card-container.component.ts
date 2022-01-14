import { Component, Input, OnInit } from "@angular/core";
import { CardInfo } from "./card/card.component";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() readonly allCardInfo: CardInfo[];
  cardColumnWidth: number;

  ngOnInit() {
    this.cardColumnWidth = Math.floor(12 / this.allCardInfo.length) - 1;
  }
}
