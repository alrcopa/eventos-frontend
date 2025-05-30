import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoListComponent } from './evento-list/evento-list.component';

const routes: Routes = [
  { path: '', component: EventoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
