import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() id : number;

  @Output() clicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(id) {
    this.clicked.emit(id);
  }

}
