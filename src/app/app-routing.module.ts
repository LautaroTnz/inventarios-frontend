import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  {
    path: 'productos',
    loadChildren: () =>
      import('./features/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
