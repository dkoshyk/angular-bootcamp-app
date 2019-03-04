import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

//ng g component products/products-list
export class ProductsListComponent implements OnInit {

  products: ProductItemModel[];

  constructor() { }

  ngOnInit() {

    this.products = [
      {
        name: 'Product 1',
        id: 0,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 2',
        id: 1,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 3',
        id: 2,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 4',
        id: 3,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 5',
        id: 4,
        price: 100,
        isHidden: true
      },
      {
        name: 'Product 6',
        id: 5,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 7',
        id: 6,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 8',
        id: 7,
        price: 100,
        isHidden: true
      },
      {
        name: 'Product 9',
        id: 8,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 10',
        id: 9,
        price: 100,
        isHidden: false
      },
      {
        name: 'Product 11',
        id: 10,
        price: 100,
        isHidden: true
      },
      {
        name: 'Product 12',
        id: 11,
        price: 100,
        isHidden: false
      },
    ];

  }
}
