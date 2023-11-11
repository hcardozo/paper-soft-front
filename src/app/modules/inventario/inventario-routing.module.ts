import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';
import { RegistroSalidaProductosComponent } from './components/registro-salida-productos/registro-salida-productos.component';

const routes: Routes = [
  {  path:'registroEntradaProductos',  component: RegistroEntradaProductosComponent},
  {  path:'registroSalidaProductos',  component: RegistroSalidaProductosComponent},
  {  path:'registroProducto',  component: RegistroEntradaProductosComponent},
  {  path:'editarProducto',  component: RegistroEntradaProductosComponent},
  {  path:'consultaInventario',  component: RegistroEntradaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
