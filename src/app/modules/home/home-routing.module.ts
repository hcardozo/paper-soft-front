import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'facturacion',
        loadChildren: () => import('./../../modules/facturacion/facturacion.module').then(m => m.FacturacionModule)
      },
      {
        path: 'informes',
        loadChildren: () => import('./../../modules/informes/informes.module').then(m => m.InformesModule)
      },
      {
        path: 'inventario',
        loadChildren: () => import('./../../modules/inventario/inventario.module').then(m => m.InventarioModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
