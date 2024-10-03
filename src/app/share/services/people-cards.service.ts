import { Injectable } from '@angular/core';
import { PersonCard } from '../interfaces/person-card';
import { Crud } from '../interfaces/crud';
import { Person } from '../interfaces/person';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardActions } from '../interfaces/card-actions';

@Injectable({
  providedIn: 'root'
})
export class PeopleCardsService implements Crud<PersonCard>, CardActions {

  private _id: number = 1;
  private _people: BehaviorSubject<PersonCard[]> = new BehaviorSubject<PersonCard[]>([]);
  private people$: Observable<PersonCard[]> = this._people.asObservable();

  constructor() { }

  getObservable(): Observable<PersonCard[]> {
    return this.people$;
  }

  // Interface Crud<PersonCard> method
  getAll(): PersonCard[] {
    return this._people.getValue();
  }

  // Interface Crud<PersonCard> method
  get(id: string): PersonCard | null {
    try {
      let index = this._people.getValue().findIndex(p => p.id == id);
      return this._people.getValue()[index];
    } catch (error) {
      return null;
    }
  }

  // Interface Crud<PersonCard> method
  add(element: PersonCard): PersonCard | null {
    try {
    element.id = (this._id++).toString();
    let people = this._people.getValue();
    people.push(element);
    this._people.next(people);
    return element;
    } catch (error) {
      return null;
    }
  }

  // Interface Crud<PersonCard> method
  remove(index: number): PersonCard | null {
    try {
      let people = this._people.getValue();
      let person: PersonCard | null = null;
      if (index >= 0) {
        person = people[index]
        people.splice(index, 1);
        this._people.next(people);
      }
        return person;
    } catch (error) {
      return null;
    }
  }

  // Interface Crud<PersonCard> method 
  update(element: PersonCard): PersonCard | null {
    try {
      let people = this._people.getValue();
      let index = people.findIndex(person => person == element)
      if (index) {
        people[index] = element;
        this._people.next(people);
      }
        return element;
    } catch (error) {
      return null;
    }
  }

  // Interface CardActions method
  alterFav(state: boolean, index: number): void {
    let people = this._people.getValue();
    people[index].isFav = state;
  }

}
