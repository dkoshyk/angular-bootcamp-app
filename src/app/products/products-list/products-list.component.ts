import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

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
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(res => {
      console.log(res);

      this.productsService.getProducts().subscribe((products: ProductItemModel[]) => {
        this.products = res.categoryId === 'all' ? 
                        products : 
                        products.filter(x => x.category.toLowerCase() === res.categoryId);
      });

    })

    

  }
}
