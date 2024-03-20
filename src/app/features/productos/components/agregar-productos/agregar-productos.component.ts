import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import Swal from 'sweetalert2';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css'],
})
export class AgregarProductosComponent {
  producto: Producto = new Producto();

  constructor(
    private productoServicio: ProductosService,
    private enrutador: Router
  ) {}

  onSubmit() {
    this.mostrarAlerta();
  }

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datos) => {
        this.mostrarMensajeExito();
        this.volver();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  mostrarAlerta() {
    Swal.fire({
      title: '¿Estás seguro de guardar el producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarProducto();
      }
    });
  }

  mostrarMensajeExito() {
    Swal.fire('¡Guardado!', 'El producto se guardo correctamente.', 'success');
  }

  volver() {
    this.enrutador.navigate(['/productos']);
  }

  navigateToListarProductos(): void {
    this.enrutador.navigate(['/productos/listar-productos']);
  }
}
