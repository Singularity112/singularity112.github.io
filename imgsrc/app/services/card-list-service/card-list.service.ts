import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CardListService {

    // private http: HttpClient
  constructor() { }

  exampleCardsResponse = [
      {
        image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
        text: 'tooltip',
        top: '20px',
        left: '30px',
        color: '#ffffff'
      },
      {
        image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
        text: 'sadfsamfsa',
        top: '70px',
        left: '90px',
        color: '#444444'
      },
      {
        image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
        text: 'tooltip',
        top: '20px',
        left: '30px',
        color: '#ffffff'
      },
      {
        image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
        text: 'sadfsamfsa',
        top: '70px',
        left: '90px',
        color: '#444444'
      },
      {
        image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
        text: 'tooltip',
        top: '20px',
        left: '30px',
        color: '#ffffff'
      },
      {
        image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
        text: 'sadfsamfsa',
        top: '70px',
        left: '90px',
        color: '#444444'
      },
  ]

  getCards() {
      // return this.http.get('/api/cards');
     return of(this.exampleCardsResponse);
  }

  saveCards(cards) {
    // return this.http.post('/api/save', cards);
    return of('success');
  }
}
