import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';

@NgModule({
  declarations: [
    ProductosComponent,
    ListarProductosComponent,
    AgregarProductosComponent,
    ModificarProductosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductosRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forChild(),
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [ProductosComponent],
})
export class ProductosModule {}
