import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-entrada-productos',
  templateUrl: './registro-entrada-productos.component.html',
  styleUrls: ['./registro-entrada-productos.component.scss']
})
export class RegistroEntradaProductosComponent {

  public test(value: any) {
    console.log(value)
  }
}
