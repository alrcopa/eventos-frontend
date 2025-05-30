import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoRoutingModule } from './evento-routing.module';


@NgModule({
  declarations: [
    EventoDetailComponent,
    EventoListComponent,
    EventoFormComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class EventoModule { }
