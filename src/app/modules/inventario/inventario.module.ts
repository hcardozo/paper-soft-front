import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';


@NgModule({
  declarations: [
    RegistroEntradaProductosComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
