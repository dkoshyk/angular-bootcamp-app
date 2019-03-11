import { Component, OnInit, Input } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'boot-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})

//ng g component products/products-list-item
export class ProductsListItemComponent implements OnInit {
  @Input() product: ProductItemModel;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
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
