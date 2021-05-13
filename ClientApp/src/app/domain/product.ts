export interface IProduct{
    id: string;
    productName: string;
    price: number;
    origin: string;
    category: string;
    packaging: string;
    weight: number;
    unit: string;
	 stocklevel: number;
    imageUrl: string;
    productUrl: string;
   
    description: string;
	DetailDescription: string;
}
export class CementProduct{
 
}
export class Product{
    id: string;
    productName: string;
    price: number;
    origin: string;
    category: string;
    packaging: string;
    weight: number;
    unit: string;
    imageUrl: string;
    productUrl: string;
    stocklevel: number;
    description: string;
}

export class VProduct{
    pro: string;

}
export class ProductSale{
    id: string;
    productName: string;
    price: number;
    origin: string;
    packaging: string;
    weight: number;
    unit: string;
    imgUrl: string;
    productUrl: string;
}
export class IMomoProvider{

}
export class MomoProvider{
    
}
export class RelatedProducts{
    productName: string;
    imageUrl: string;
    productUrl: string

}
export interface IRelatedProducts{
    productName: string;
    imageUrl: string;
    productUrl: string;

}