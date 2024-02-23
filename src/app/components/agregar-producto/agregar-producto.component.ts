import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService, private enrutador: Router){}

  onSubmit(){
    this.mostrarAlerta();
  }

  guardarProducto(){
    this.productoServicio.agregarProducto(this.producto).subscribe(
      {
        next: (datos) => {
          this.mostrarMensajeExito();
          this.volver();
        },
        error: (error: any)=> {console.log(error)}
      }
    );
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
    Swal.fire(
      '¡Guardado!',
      'El producto se guardo correctamente.',
      'success'
    );
  }

  volver(){
    this.enrutador.navigate(['/productos'])
  }

}
