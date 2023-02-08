export type ProductCategory = {
  _id: string;
  name: string;
  image: string;
  subcategories: Array<ProductCategory>;
};
