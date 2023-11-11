import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-entrada-productos',
  templateUrl: './registro-entrada-productos.component.html',
  styleUrls: ['./registro-entrada-productos.component.scss']
})
export class RegistroEntradaProductosComponent {
  durationInSeconds = 5;

  @ViewChild('alertaEntradaProducto') public alertaEntradaProducto: any;
  constructor(private snackBar: MatSnackBar) {

  }

  public test(value: any) {
    this.snackBar.open('Registro de entrada de producto exitoso.', 'Done', {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
