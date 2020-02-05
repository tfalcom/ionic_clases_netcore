import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { EstructuraComponent } from '../estructura/estructura.component';
import { MenuComponent } from '../estructura/menu/menu.component';
import { FooterComponent } from '../estructura/footer/footer.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EstructuraComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    EstructuraRoutingModule,
    IonicModule
  ]
})
export class EstructuraModule { }
