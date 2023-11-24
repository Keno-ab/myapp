import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPasajerosPageRoutingModule } from './c-pasajeros-routing.module';

import { CPasajerosPage } from './c-pasajeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPasajerosPageRoutingModule
  ],
  declarations: [CPasajerosPage]
})
export class CPasajerosPageModule {}
