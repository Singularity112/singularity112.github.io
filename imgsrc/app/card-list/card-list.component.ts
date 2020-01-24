import { Component, OnInit } from '@angular/core';
import { CardListService } from '../services/card-list-service/card-list.service'

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  isDetailsOpen:boolean = false;
  cards: Array<Object> = [];
  isNew:boolean = false;

  defaultCard: any = {
    image: 'https://via.placeholder.com/300',
    top: '20px',
    left: '30px',
    text: 'tooltip',
    color: '#ffffff'
  }

  currentCard: any;
  
  openDetails(item) {
    this.isNew = item === this.defaultCard ? true : false;
    this.currentCard = this.isNew ? Object.assign({}, item) : item;
    this.isDetailsOpen = true;
  }

  changeImage(data) {

    if (data.action === 'delete') { 
      this.cards = this.cards.filter(function( obj ) {
        return obj !== data.card;
      });
    }

    if (data.isNew) {
      this.cards.push(data.card);
    }

    this.isDetailsOpen = data.state;

    this.cardService.saveCards(this.cards).subscribe(res => {
      console.log(res);
    });
  }

  constructor(private cardService: CardListService) {}

  // probably this will be async call
  ngOnInit() {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
    this.currentCard = this.defaultCard;
  }



}
