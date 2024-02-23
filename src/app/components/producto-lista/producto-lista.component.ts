import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css'],
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoServicio.obtenerProductos().subscribe((datos) => {
      this.productos = datos;
    });
  }

  
}
