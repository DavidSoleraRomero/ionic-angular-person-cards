import { Component } from '@angular/core';
import { PersonCard } from '../share/interfaces/person-card';
import { PeopleCardsService } from '../share/services/people-cards.service';
import { ToastController } from '@ionic/angular';
import { DataInputComponent } from '../share/components/data-input/data-input.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    protected peopleCardsService: PeopleCardsService,
    private toastController: ToastController,
  ) {
    
  }

  addPerson(personCard: PersonCard) {
    this.peopleCardsService.add(personCard);
  }

  async alterFav(state: boolean, index: number) {
    const message = (state) ? "Tarjeta añadida a favoritos" : "Tarjeta borrada de favoritos";
    const favoriteToast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: "bottom",
      color: (state) ? "success" : "danger",
      header: "Info",
      animated: true
    });
    favoriteToast.present();
    this.peopleCardsService.alterFav(state, index);
  }

  async deleteCard(index: number) {
    if (window.confirm(`¿Seguro que desa borrar a esa persona?`)) {
      const message = "Tarjeta de la persona eliminada";
      const deletedToast = await this.toastController.create({
        message: message,
        duration: 1000,
        position: "bottom",
        color: "danger",
        header: "Info",
        animated: true
      });
      deletedToast.present();
      this.peopleCardsService.remove(index);
    }
  }

}