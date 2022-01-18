import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "../shared/event/event.service";
import { UserService } from "../shared/users/user.service";
import { CardInfo } from "./card/card.component";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() readonly allCardInfo: CardInfo[];
  cardColumnWidth: number;
trots: number;
money_raised: number;
trotters: number;
constructor(private userService: UserService, private eventService: EventService){}
  ngOnInit() {
    this.cardColumnWidth = Math.floor(12 / this.allCardInfo.length);
    this.trots = this.userService.getTotalTrots();
    this.money_raised = this.eventService.getAmountRaised();
    this.trotters = this.userService.getNumUsers();

  }
}

