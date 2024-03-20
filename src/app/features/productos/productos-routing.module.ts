import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    children: [
      { path: '', redirectTo: 'listar-productos', pathMatch: 'full' },
      { path: 'listar-productos', component: ListarProductosComponent },
      { path: 'agregar-productos', component: AgregarProductosComponent },
      {
        path: 'modificar-productos/:id',
        component: ModificarProductosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
