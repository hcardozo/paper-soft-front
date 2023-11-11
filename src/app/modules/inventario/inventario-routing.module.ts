import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEntradaProductosComponent } from './components/registro-entrada-productos/registro-entrada-productos.component';
import { RegistroSalidaProductosComponent } from './components/registro-salida-productos/registro-salida-productos.component';
import { GestionProductoComponent } from './components/gestion-producto/gestion-producto.component';
import { ConsultaInventarioComponent } from './components/consulta-inventario/consulta-inventario.component';

const routes: Routes = [
  {  path:'registroEntradaProductos',  component: RegistroEntradaProductosComponent},
  {  path:'registroSalidaProductos',  component: RegistroSalidaProductosComponent},
  {  path:'registroProducto',  component: GestionProductoComponent},
  {  path:'consultaInventario',  component: ConsultaInventarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
