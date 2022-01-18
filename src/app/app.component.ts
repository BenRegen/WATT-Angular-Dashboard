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
      title: "Trots",
      statistic: null,
      percentChanged: 3,
      imageUrl: 'https://i.picsum.photos/id/247/128/128.jpg?hmac=lDVL49vm2BeeRm82XeCMD2ZPLJ-ECXKrgGw-rRmLtK0'
    },
    {
      title: "Amount Raised",
      statistic: null,
      percentChanged: 4,
      imageUrl: 'https://i.picsum.photos/id/501/128/128.jpg?hmac=-PuUy3m3a95iP50WUmsYw1U0eGJSCGYZ64xSkTREtiU'
    },
    {
      title: "Trotters",
      statistic: null,
      percentChanged: -58,
      imageUrl: 'https://i.picsum.photos/id/627/128/128.jpg?hmac=9Grq32ADHeQBEZglUBaJ-jDICJAfmlopWdwDhhapgSA'
    },
  ]

}
