import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent {
  productos: Producto[];

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoServicio.obtenerProductos().subscribe((datos) => {
      this.productos = datos;
    });
  }

  editarProducto(id: number) {
    if (id !== undefined) {
      this.enrutador.navigate(['productos/modificar-productos', id]);
    } else {
      console.error('ID de producto indefinido');
    }
  }

  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Está seguro de que desea eliminar el producto?',
      text: 'Esta acción no se puede deshacer y eliminará permanentemente el producto del inventario.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoServicio.eliminarProducto(id).subscribe({
          next: (datos) => {
            this.obtenerProductos();
            Swal.fire(
              '¡Eliminado!',
              'El producto ha sido eliminado correctamente.',
              'success'
            );
          },
          error: (error) => {
            console.error('Error al eliminar el producto:', error);
            Swal.fire(
              'Error',
              'Hubo un error al intentar eliminar el producto. Por favor, inténtalo de nuevo más tarde.',
              'error'
            );
          },
        });
      }
    });
  }
}
