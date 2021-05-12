import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'product-edit/:id',
    loadChildren: () =>
      import('./pages/product-edit/product-edit.module').then(
        (m) => m.ProductEditPageModule
      ),
  },
  {
    path: 'view-editions',
    loadChildren: () =>
      import('./pages/view-editions/view-editions.module').then(
        (m) => m.ViewEditionsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
