import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ItemFactura } from '../interface/item-factura-interface';
import { Producto } from 'src/app/modules/shared/interfaces/producto-interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BuscarProductoComponent } from 'src/app/modules/shared/components/buscar-producto/buscar-producto.component';

const ELEMENT_DATA: ItemFactura[] = [
];

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})

export class CrearFacturaComponent {
  @ViewChild('buscarProductoComponent') public buscarProductoComponent!:BuscarProductoComponent;

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
  public formGroup: FormGroup;
  public totalProductos: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl(''),
      email: new FormControl('', Validators.email),
      telefono: new FormControl(''),
      total: new FormControl('')
    })
  }

  public agregarProducto(value: { cantidad: number, producto: Producto }) {
    this.totalProductos = 0;
    let producto: ItemFactura = {
      cantidad: value.cantidad,
      nombre: value.producto.nombre,
      precio: value.producto.precio,
      total: value.producto.precio * value.cantidad
    }
    this.dataSource = [...this.dataSource, producto];
    this.dataSource.forEach((producto) => {
      this.totalProductos += producto.total;
    });
    this.buscarProductoComponent.resetFormulario();
    // this.formGroup.get('total')?.setValue('prueba');
  }

}
