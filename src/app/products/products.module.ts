import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterPipe } from '@shared/pipes/filter.pipe'
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsListItemComponent, FilterPipe], 
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule
  ],
  exports: [ProductsListComponent, ProductsListItemComponent]
})

//ng g module products
export class ProductsModule { }
