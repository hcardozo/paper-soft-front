import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistroSalidaProductosComponent } from './components/registro-salida-productos/registro-salida-productos.component';


@NgModule({
  declarations: [
    RegistroEntradaProductosComponent,
    RegistroSalidaProductosComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class InventarioModule { }
