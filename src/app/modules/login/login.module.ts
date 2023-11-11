import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoUsuarioComponent } from './components/ingreso-usuario/ingreso-usuario.component';
import { AlertComponent, RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    RegistroUsuarioComponent,
    IngresoUsuarioComponent,
    RecuperarContrasenaComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class LoginModule { }
