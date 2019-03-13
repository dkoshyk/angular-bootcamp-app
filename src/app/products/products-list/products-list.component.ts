import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddNewProductComponent } from '../modals/add-new-product/add-new-product.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

//ng g component products/products-list
export class ProductsListComponent implements OnInit {

  products: ProductItemModel[];
  searchQuery: string;
  isAdmin: boolean;

  constructor(private productsService: ProductsService
    , private authService: AuthService
    , private activatedRoute: ActivatedRoute
    , private dialog: MatDialog) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    
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
