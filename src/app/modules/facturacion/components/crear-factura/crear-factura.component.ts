import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent {
  public test(value: any) {
    console.log(value)
  }
}
