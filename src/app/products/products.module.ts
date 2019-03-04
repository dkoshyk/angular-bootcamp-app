import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ProductsListComponent]
})

//ng g module products
export class ProductsModule { }
