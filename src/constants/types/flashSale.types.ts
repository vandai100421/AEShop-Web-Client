export type FlashSaleType = "upcoming" | "happening" | "finished";

export type FlashSaleSession = {
  _id: string;
  name: string;
  start_time: string;
  end_time: string;
  status: FlashSaleType;
  number_of_products: number;
};

type FlashSaleProductModel = {
  _id: string;
  promotion_price: number;
  promotion_stock: number;
  product_model_id: string;
  origin_price: number;
};

export type FlashSaleProduct = {
  _id: string;
  name: string;
  images: Array<string>;
  product_models: Array<FlashSaleProductModel>;
};

export type FlashSaleParams = {
  flash_sale_id?: string;
  page?: number;
  limit?: number;
  status?: FlashSaleType;
};
