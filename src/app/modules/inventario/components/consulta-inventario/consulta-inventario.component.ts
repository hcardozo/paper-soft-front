import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { INVENTARIO } from 'src/app/modules/shared/constants/inventario-consts';
import { Producto } from 'src/app/modules/shared/interfaces/producto-interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-inventario',
  templateUrl: './consulta-inventario.component.html',
  styleUrls: ['./consulta-inventario.component.scss']
})
export class ConsultaInventarioComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Producto>;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'precio',
    'descripcion',
    'acciones'
  ];
  public datosInventario: Producto[] = INVENTARIO;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(INVENTARIO);
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public editarProducto(item: Producto): void {
    this.router.navigate(['home/inventario/registroProducto', { p: btoa(JSON.stringify(item)) }]);
  }
}
