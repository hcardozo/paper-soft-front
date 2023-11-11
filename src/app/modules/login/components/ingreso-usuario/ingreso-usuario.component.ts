import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.scss']
})
export class IngresoUsuarioComponent {
  public validarLogin = true;
  public formGroup: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        usuario: ['', new FormControl()]
      })
   }

  public redirectToRegister() {
    this.router.navigate(['/login/registroUsuario']);
  }

  public redirectToRecover() {
    this.router.navigate(['/login/recuperarContrasena']);
  }

  public login() {
    this.router.navigate(['/home']);
  }
}
