import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionInventariosComponent } from './components/gestion-inventarios/gestion-inventarios.component';

const routes: Routes = [{
  path:'',
  component: GestionInventariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
