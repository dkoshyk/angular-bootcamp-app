export class ProductItemModel {
    name: string;
    id: string;
    price: number;
    category?: string;
    description?: string;
    imgUrl?: string;
    isHidden: boolean;
} 

// export class BaseProductItemModel {
//     name: string;
//     price: number;
//     category?: string;
//     description?: string;
//     imgUrl?: string;
//     isHidden: boolean;

//     constructor(model: ProductItemModel) {
//         this.name = model.name;
//         this.price = model.price;
//         this.category = model.category;
//         this.description = model.description;
//         this.imgUrl = model.imgUrl;
//         this.isHidden = model.isHidden;
//     }
// } 