import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {

  @Input() name    : string = "";
  @Input() surnames: string = "";
  @Input() age     : number = 0;
  @Input() isFav   : boolean = false;
  @Output() makeFav = new EventEmitter<boolean>;
  @Output() deleteCardEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  favClicked() {
    this.makeFav.emit(!this.isFav);
  }

  deleteCard() {
    this.deleteCardEvent.emit();
  }

}
