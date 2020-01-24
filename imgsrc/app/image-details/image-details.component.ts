import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() cardobj: any;
  @Input() isNew: boolean = false;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  save() {
    this.closeModal();
    this.onClose.emit({
      card: this.cardobj,
      isNew: this.isNew,
      state: this.isOpen,
      action: null
    });
  }

  delete() {
    this.closeModal();
    this.onClose.emit({
      card: this.cardobj,
      state: this.isOpen,
      action: 'delete'
    });
  }

  closeModal() {
    this.isOpen = false;
  }

  uploadFile(event) {
    let reader: any;
    reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
     this.cardobj.image = e.target.result;
    }
  }

  constructor() { }

  ngOnInit() {
    
  }

}
