import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistroSalidaProductosComponent } from './components/registro-salida-productos/registro-salida-productos.component';
import { GestionProductoComponent } from './components/gestion-producto/gestion-producto.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConsultaInventarioComponent } from './components/consulta-inventario/consulta-inventario.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    RegistroEntradaProductosComponent,
    RegistroSalidaProductosComponent,
    GestionProductoComponent,
    ConsultaInventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InventarioRoutingModule,
    SharedModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class InventarioModule { }
