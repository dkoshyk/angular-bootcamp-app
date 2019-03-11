import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductDetailsResolver } from './resolvers/product-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [{
      path: ':categoryId',
      component: ProductsListComponent
    },
    {
      path: ':categoryId/:id',
      component: ProductsDetailsComponent,
      resolve: {
        detailsData: ProductDetailsResolver
      }
    },
    {
      path: '',
      redirectTo: 'all'
    }]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  providers: [ProductDetailsResolver],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
