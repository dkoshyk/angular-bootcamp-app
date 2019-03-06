import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterPipe } from '@shared/pipes/filter.pipe'
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material';

@NgModule({
  providers: [ProductsService, { provide: FirestoreSettingsToken, useValue: {} }],
  declarations: [ProductsListComponent, ProductsListItemComponent, ProductsComponent, FilterPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    AngularFirestoreModule,
    ProductsRoutingModule,
    MatButtonModule
  ],
  exports: [ProductsListComponent, ProductsListItemComponent, ProductsComponent]
})

//ng g module products
export class ProductsModule { }
