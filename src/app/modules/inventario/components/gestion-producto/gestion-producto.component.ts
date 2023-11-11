import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/modules/shared/interfaces/producto-interface';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.scss']
})
export class GestionProductoComponent {
  @Input() public editarProducto!: Producto;

  public productoFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.productoFormGroup = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
    })
  }

  accionarProducto(): void {
    if (this.productoFormGroup.valid) {
      if (this.editarProducto) {
        this.snackBar.open('Producto modificado correctamente.', 'OK', {
          duration: 2000,
          verticalPosition: "top", // Allowed values are  'top' | 'bottom'
          horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
        });
      } else {
        this.snackBar.open('Producto registrado correctamente.', 'OK', {
          duration: 2000,
          verticalPosition: "top", // Allowed values are  'top' | 'bottom'
          horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
        });
      }
      this.productoFormGroup.reset();
    } else {
      this.productoFormGroup.markAllAsTouched();
    }
  }
}
