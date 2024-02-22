import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private clienteHttp: HttpClient) {}

  private urlBase = 'http://localhost:8080/inventario-app/productos';

  obtenerProductos(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }
}
