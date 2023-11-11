import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuscarProductoComponent } from 'src/app/modules/shared/components/buscar-producto/buscar-producto.component';

@Component({
  selector: 'app-registro-entrada-productos',
  templateUrl: './registro-entrada-productos.component.html',
  styleUrls: ['./registro-entrada-productos.component.scss']
})
export class RegistroEntradaProductosComponent {
  durationInSeconds = 5;

  @ViewChild('alertaEntradaProducto') public alertaEntradaProducto: any;
  @ViewChild('buscarProductoComponent') public buscarProductoComponent!: BuscarProductoComponent;

  constructor(private snackBar: MatSnackBar) { }

  public registroEntradaProducto(value: any) {
    this.snackBar.open('Registro de entrada de producto exitoso.', 'OK', {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });

    this.buscarProductoComponent?.resetFormulario();
  }
}
