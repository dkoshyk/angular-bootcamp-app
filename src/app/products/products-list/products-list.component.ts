import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddNewProductComponent } from '../modals/add-new-product/add-new-product.component';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

//ng g component products/products-list
export class ProductsListComponent implements OnInit {

  products: ProductItemModel[];
  searchQuery: string;

  constructor(private productsService: ProductsService
    , private activatedRoute: ActivatedRoute
    , private dialog: MatDialog) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(res => {
      this.productsService.getProducts().subscribe((products: ProductItemModel[]) => {
        this.products = res.categoryId === 'all' ?
          products :
          products.filter(x => x.category.toLowerCase() === res.categoryId);
      });
    })
  }

  openAddNewProduct(): void {
    const dialogRef = this.dialog.open(AddNewProductComponent, {
      width: '450px',
      data: {
        name: null,
        description: null,
        price: null,
        category: null,
        imgUrl: null,
        isHidden: null
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productsService.add(res);
      }
    })
  }
}
