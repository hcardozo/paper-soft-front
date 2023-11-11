import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';

const routes: Routes = [{
  path:'',
  component: RegistroEntradaProductosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
