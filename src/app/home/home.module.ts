import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonalCardComponent } from '../personal-card/personal-card.component';
import { DataInputComponent } from '../data-input/data-input.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ], 
  declarations: [
    HomePage,
    PersonalCardComponent,
    DataInputComponent
  ]
})
export class HomePageModule {}
