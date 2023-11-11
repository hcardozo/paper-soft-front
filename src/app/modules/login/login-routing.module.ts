import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { IngresoUsuarioComponent } from './components/ingreso-usuario/ingreso-usuario.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';


const routes: Routes = [
  {
    path: '',
    component: IngresoUsuarioComponent
  }, 
  {
    path: 'registroUsuario',
    component: RegistroUsuarioComponent
  }, 
  {
    path: 'recuperarContrasena',
    component: RecuperarContrasenaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
