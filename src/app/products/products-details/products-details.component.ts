import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemModel } from '../models/product-item.model';
import { ProductsService } from '../services/products.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'boot-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  product: ProductItemModel = new ProductItemModel();

  isEditMode: boolean;
  isAdmin: boolean;

  constructor(private activatedRoute: ActivatedRoute
    , private authService: AuthService
    , private productsService: ProductsService
    , private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();

    this.activatedRoute.data.subscribe(res => {
      console.log(res);
      this.product = res.detailsData;
    })
  }

  update() {
    this.productsService.update(this.product);
    this.editModeOff();
  }

  delete(ev: any): void {
    ev.stopPropagation();
    this.productsService.delete(this.product.id)
      .then(() => {
        this.router.navigate(["products", "all"])
      });
  }

  editModeOn() {
    this.isEditMode = true;
  }

  editModeOff() {
    this.isEditMode = false;
  }
}
