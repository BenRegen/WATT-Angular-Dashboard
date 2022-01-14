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
      imageUrl: 'https://i.picsum.photos/id/247/128/128.jpg?hmac=lDVL49vm2BeeRm82XeCMD2ZPLJ-ECXKrgGw-rRmLtK0'
    },
    {
      title: "Test1",
      statistic: 10,
      percentChanged: 4,
      imageUrl: 'https://i.picsum.photos/id/501/128/128.jpg?hmac=-PuUy3m3a95iP50WUmsYw1U0eGJSCGYZ64xSkTREtiU'
    },
    {
      title: "Test3",
      statistic: 4012,
      percentChanged: -58,
      imageUrl: 'https://i.picsum.photos/id/627/128/128.jpg?hmac=9Grq32ADHeQBEZglUBaJ-jDICJAfmlopWdwDhhapgSA'
    },
  ]

}
