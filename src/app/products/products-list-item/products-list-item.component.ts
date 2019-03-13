import { Component, OnInit, Input } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'boot-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})

//ng g component products/products-list-item
export class ProductsListItemComponent implements OnInit {
  @Input() product: ProductItemModel;

  isAdmin: boolean;

  constructor(private productsService: ProductsService
    , private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  delete(ev: any): void {
    ev.stopPropagation();
    this.productsService.delete(this.product.id);
  }

  clone(ev: any): void {
    ev.stopPropagation();

    let createProduct = this.product;

    this.productsService.clone(createProduct);
  }
}
