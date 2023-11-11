import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuscarProductoComponent } from 'src/app/modules/shared/components/buscar-producto/buscar-producto.component';

@Component({
  selector: 'app-registro-salida-productos',
  templateUrl: './registro-salida-productos.component.html',
  styleUrls: ['./registro-salida-productos.component.scss']
})
export class RegistroSalidaProductosComponent {

  @ViewChild('alertaEntradaProducto') public alertaEntradaProducto: any;
  @ViewChild('buscarProductoComponent') public buscarProductoComponent!: BuscarProductoComponent;

  durationInSeconds = 5;


  constructor(private snackBar: MatSnackBar) {

  }

  public registroSalidaProducto(value: any) {
    this.snackBar.open('Registro de Salida de producto exitoso.', 'OK', {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });

    this.buscarProductoComponent?.resetFormulario();
  }
}
