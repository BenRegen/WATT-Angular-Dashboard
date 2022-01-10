import { Component } from '@angular/core';
import { CardInfo } from './card-holder/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // This is test data used to
  info: CardInfo[] = [
    {
      title: "Test0",
      statistic: 6,
      percentChanged: 3,
      imageUrl: 'https://i.picsum.photos/id/529/536/354.jpg?hmac=ItKRFzeMMS8zYbKrxh5qmJh9oLug_ZI8pqBB2z4kos0'
    },
    {
      title: "Test1",
      statistic: 10,
      percentChanged: 4,
      imageUrl: 'https://i.picsum.photos/id/590/536/354.jpg?hmac=MTWs2RHTled85txj1Gzavxbv320nZS8_8OWl98tvJXk'
    },
  ]
  name: string
}
