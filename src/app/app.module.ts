import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';

@NgModule({
  declarations: [AppComponent, ProductoListaComponent, AgregarProductoComponent, ModificarProductoComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, SweetAlert2Module.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
