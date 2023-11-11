import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})

export class RegistroUsuarioComponent {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router){
    this.formGroup = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      confirmarContrasena: new FormControl('', Validators.required),
    })
  }

  public registrarUsuario(): void {
    if (this.formGroup.valid) {
      this.snackBar.open('Usuario registrado exitosamente.', 'OK', {
        duration: 2000,
        verticalPosition: "top", // Allowed values are  'top' | 'bottom'
        horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
      });

      this.router.navigate(['login'])
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
