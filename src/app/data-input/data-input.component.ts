import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../home/home.page';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
})
export class DataInputComponent  implements OnInit {

  @Output() addPerson = new EventEmitter<Person>();

  name: string = "";
  surnames: string = "";
  age: number = 0;

  constructor() { }

  ngOnInit() {}

  resetProperties() {
    this.name = "";
    this.surnames = "";
    this.age = 0;
  }

  addPersonEvent() {
    if (this.name !== "" && this.surnames !== "" && this.age > 0) {
      this.addPerson.emit({
        name: this.name,
        surnames: this.surnames,
        age: this.age
      })
      this.resetProperties();
    }
  }

}
