import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../interfaces/producto-interface';
import { INVENTARIO } from '../../constants/inventario-consts';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent implements OnInit {

  @Output() public seleccionarProducto: EventEmitter<any> = new EventEmitter<any>();

  @Input() public botonIcono: string = 'add_circle';

  public dataProductos: Producto[] = INVENTARIO;
  public productoFormGroup: FormGroup;
  public productoSeleccionado!: Producto;

  constructor(private formBuilder: FormBuilder) {
    this.productoFormGroup = this.formBuilder.group({
      producto: new FormControl(null, [Validators.required]),
      cantidad: new FormControl(null, [Validators.required, Validators.min(1)]),
    })
  }

  public ngOnInit(): void {
    this.productoFormGroup.get('producto')?.valueChanges.subscribe((item: any) => {
      this.productoSeleccionado = item;
    });
  }


  public displayFn(value: any) {
    return value ? value.nombre : undefined;
  }

  public productosSeleccionados() {
    let objeto = {
      producto: this.productoSeleccionado,
      cantidad: this.productoFormGroup.get('cantidad')?.value
    }
    this.seleccionarProducto.emit(objeto);
  }

  public resetFormulario():void {
    this.productoFormGroup.reset();
    this.productoFormGroup.updateValueAndValidity();
  }
}
