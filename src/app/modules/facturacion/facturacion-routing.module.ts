import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';

const routes: Routes = [{
  path:'crearFactura',
  component: CrearFacturaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FacturacionRoutingModule { }
