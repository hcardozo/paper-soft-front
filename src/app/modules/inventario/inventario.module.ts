import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { GestionInventariosComponent } from './components/gestion-inventarios/gestion-inventarios.component';


@NgModule({
  declarations: [
    GestionInventariosComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
