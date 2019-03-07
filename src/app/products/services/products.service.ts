import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductItemModel } from '../models/product-item.model';

@Injectable()

//ng g service products/services/products
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<ProductItemModel[]> {
    return this.firestore.collection<ProductItemModel>('products').snapshotChanges()
      .pipe(map((products) => {
        return products.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        }) as any[];
      }))
  }

  getDetails(id: string): any {
    return this.firestore.doc('products/' + id)
      .get()
      .pipe(map((product) => {
        return {
          id: product.id,
          ...product.data()
        };
      }));
  }

  clone(cloneObj: any): any {
      this.firestore.collection('products').add(cloneObj);
  }

  delete(id: string): Promise<void> {
    return this.firestore.doc('products/' + id).delete();
  }
}
