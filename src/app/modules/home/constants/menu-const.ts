import { Menu } from "../interfaces/menu-interface";





export const MENU: Menu[] = [
  {
    name: 'Inventario',
    children: [
      { name: 'Consulta de inventario', icon: 'search', path: 'home/inventario/consultaInventario' },
      { name: 'Registrar producto', icon: 'library_add', path: 'home/inventario/registroProducto'  },
      { name: 'Editar producto', icon: 'rebase_edit', path: 'home/inventario/editarProducto'  },
      { name: 'Entrada de producto', icon: 'exit_to_app', path: 'home/inventario/registroEntradaProductos'  },
      { name: 'Salida de producto', icon: 'start', path: 'home/inventario/registroSalidaProductos'  },
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
