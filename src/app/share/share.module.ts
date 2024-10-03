import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { DataInputComponent } from './components/data-input/data-input.component';

@NgModule({
  declarations: [
    PersonalCardComponent,
    DataInputComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    PersonalCardComponent,
    DataInputComponent
  ]
})
export class ShareModule { }
