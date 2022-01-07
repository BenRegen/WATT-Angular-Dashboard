import { Component, Input } from "@angular/core";
import { CardInfo } from "./card/card.component";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
})
export class CardContainerComponent {
  @Input() readonly allCardInfo: CardInfo[];
  readonly cardColumnWidth = 4;
}
