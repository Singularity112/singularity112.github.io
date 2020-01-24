import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardobj: Object;
  @Output() onCardClick: EventEmitter<any> = new EventEmitter();

  cardClick() {
    this.onCardClick.emit(this.cardobj);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
