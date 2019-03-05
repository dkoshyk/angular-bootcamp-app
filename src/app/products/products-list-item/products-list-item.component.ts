import { Component, OnInit, Input } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';

@Component({
  selector: 'boot-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})

//ng g component products/products-list-item
export class ProductsListItemComponent implements OnInit {
  @Input() product: ProductItemModel;

  constructor() { }

  ngOnInit() {
  }
}
