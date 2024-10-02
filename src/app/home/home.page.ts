import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  persons: Person[] = [
    { name: 'Juan', surnames: 'Pérez', age: 30 },
    { name: 'María', surnames: 'González López', age: 25 },
    { name: 'Carlos', surnames: 'López Pepo', age: 35 }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  addPerson(person: Person) {
    this.persons.push(person);
  }

}

export interface Person {
  name: string;
  surnames: string;
  age: number;
}
