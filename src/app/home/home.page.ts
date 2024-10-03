import { Component } from '@angular/core';
import { PersonCard } from '../share/interfaces/person-card';
import { PeopleCardsService } from '../share/services/people-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    protected peopleCardsService: PeopleCardsService
  ) {}

  addPerson(personCard: PersonCard) {
    this.peopleCardsService.add(personCard);
  }

  alterFav(state: boolean, index: number) {
    this.peopleCardsService.alterFav(state, index);
  }

  deleteCard(index: number) {
    if (window.confirm("¿Seguro que desa borrar a esa persona?"))
      this.peopleCardsService.remove(index);
  }

}