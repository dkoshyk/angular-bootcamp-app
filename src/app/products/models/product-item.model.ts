export class ProductItemModel {
    name: string;
    id: string | number;
    price: number;
    category?: string;
    description?: string;
    imgUrl?: string;
    isHidden: boolean;
  }