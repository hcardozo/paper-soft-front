import { ChangeDetectorRef, Component } from '@angular/core';
import { ItemFactura } from '../interface/item-factura-interface';
import { Producto } from 'src/app/modules/shared/interfaces/producto-interface';

const ELEMENT_DATA: ItemFactura[] = [
];

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})

export class CrearFacturaComponent {

  columns = [
    {
      columnDef: 'nombre',
      header: 'Nombre',
      cell: (element: ItemFactura) => `${element.nombre}`,
    },
    {
      columnDef: 'precio',
      header: 'Precio',
      cell: (element: ItemFactura) => `${element.precio}`,
    },
    {
      columnDef: 'cantidad',
      header: 'Cantidad',
      cell: (element: ItemFactura) => `${element.cantidad}`,
    },
    {
      columnDef: 'total',
      header: 'Total',
      cell: (element: ItemFactura) => `${element.total}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(){

  }

  public test(value: { cantidad: number, producto: Producto }) {
    let producto: ItemFactura = {
      cantidad: value.cantidad,
      nombre: value.producto.nombre,
      precio: value.producto.precio,
      total: value.producto.precio * value.cantidad
    }

    this.dataSource = [...this.dataSource,producto];
  }

}
