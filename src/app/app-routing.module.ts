import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./modules/facturacion/facturacion.module').then(m => m.FacturacionModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./modules/informes/informes.module').then(m => m.InformesModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./modules/inventario/inventario.module').then(m => m.InventarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
