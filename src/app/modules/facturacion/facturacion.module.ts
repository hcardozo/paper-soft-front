import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { RegistrarPagosComponent } from './components/registrar-pagos/registrar-pagos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrearFacturaComponent,
    RegistrarPagosComponent
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    SharedModule
  ]
})
export class FacturacionModule { }
