import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css'],
})
export class ModificarProductosComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(
    private productoServicio: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => (this.producto = datos),
    });
  }

  onSubmit() {
    this.mostrarAlerta();
  }

  mostrarAlerta() {
    Swal.fire({
      title: '¿Está seguro de que desea modificar este producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Modificar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarProducto();
      }
    });
  }

  guardarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) => {
        this.mostrarMensajeExito();
        this.volver();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Producto modificado!',
      'Los cambios se guardaron correctamente.',
      'success'
    );
  }

  volver() {
    this.enrutador.navigate(['/productos']);
  }
}
