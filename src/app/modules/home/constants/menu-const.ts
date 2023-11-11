import { Menu } from "../interfaces/menu-interface";

export const MENU: Menu[] = [
  {
    name: 'Inventario',
    children: [
      { name: 'Consulta de inventario', icon: 'search' , path: 'home/inventario' },
      { name: 'Registrar producto', icon: 'library_add' },
      { name: 'Editar producto', icon: 'rebase_edit' },
      { name: 'Entrada de producto', icon: 'exit_to_app' },
      { name: 'Salida de producto', icon: 'start' },
    ],
  },
  {
    name: 'Facturacion',
    children: [
      { name: 'Generar factura', icon: 'search', path: 'home/facturacion/crearFactura' },
    ],
  },
  {
    name: 'Informes',
    children: [
      { name: 'Consulta', icon: 'search' },
    ],
  },
];
