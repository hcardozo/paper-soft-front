import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modules/shared/interfaces/producto-interface';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.scss']
})
export class GestionProductoComponent {
  public producto!: Producto;

  public productoFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productoFormGroup = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
    })
    let producto: any = this.activatedRoute.snapshot.paramMap.get('p');
    if (producto) {
      this.producto = JSON.parse(atob(producto));
      this.productoFormGroup.patchValue({
        nombre: this.producto.nombre,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
      })
    }
  }

  accionarProducto(): void {
    if (this.productoFormGroup.valid) {
      if (this.producto) {
        this.snackBar.open('Producto modificado correctamente.', 'OK', {
          duration: 2000,
          verticalPosition: "top", // Allowed values are  'top' | 'bottom'
          horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
        });
        this.router.navigate(['home/inventario/consultaInventario'])
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
