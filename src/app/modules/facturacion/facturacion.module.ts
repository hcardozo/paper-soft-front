import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { RegistrarPagosComponent } from './components/registrar-pagos/registrar-pagos.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CrearFacturaComponent,
    RegistrarPagosComponent
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    SharedModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class FacturacionModule { }
