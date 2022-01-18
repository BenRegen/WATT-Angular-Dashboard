import { Event } from './../models/events.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class EventService {

  private myEvent: Event;

  //returns event statistics
  getStats() {
    return this.myEvent.statistics;
  }

  //returns amount raised
  getAmountRaised() {
    return this.myEvent.amount_raised;
  }

  //
}
