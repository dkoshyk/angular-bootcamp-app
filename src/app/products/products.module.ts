import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterPipe } from '@shared/pipes/filter.pipe'
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule, MatCardModule, MatDialogModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddNewProductComponent } from './modals/add-new-product/add-new-product.component';

@NgModule({
  providers: [ProductsService, { provide: FirestoreSettingsToken, useValue: {} }],
  declarations: [ProductsListComponent
    , ProductsListItemComponent
    , ProductsDetailsComponent
    , ProductsComponent
    , FilterPipe
    , ProductsDetailsComponent, ProductFormComponent, AddNewProductComponent],
  entryComponents: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    AngularFirestoreModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [ProductsListComponent
    , ProductsListItemComponent
    , ProductsDetailsComponent
    , ProductsComponent]
})

//ng g module products
export class ProductsModule { }
