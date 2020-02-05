import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from '../inicio/inicio.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    IonicModule
  ]
})
export class InicioModule { }
