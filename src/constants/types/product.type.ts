export type ProductVariation = {
  name: string;
  options: Array<string>;
  images: Array<string>;
};

export type ProductModel = {
  _id: string;
  name: string;
  sku?: string;
  price: number;
  stock: number;
  promotion_price?: number;
  promotion_stock?: number;
  promotions?: Array<any>;
  product: Product;
};

export type Dimension = {
  width: number;
  height: number;
  length: number;
};

export type ProductCategory = {
  _id: string;
  name: string;
  description?: string;
};

export type Product = {
  _id?: string;
  images: Array<string>;
  videos: Array<string>;
  name: string;
  slug: string;
  description: string;
  product_category_id: string;
  product_category_path?: Array<string>;
  product_category: ProductCategory;
  product_categories: Array<ProductCategory>;
  extension?: any;

  variations: Array<ProductVariation>;
  models: Array<ProductModel>;
  weight: number;
  dimension: Dimension;
  parent_sku: string;
  price: number;
};
