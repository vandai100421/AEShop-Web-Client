import { createState } from "@hookstate/core";
import { Product } from "constants/types/product.type";
import { ProductCategory } from "constants/types/productCategory.type";
import {
  FlashSaleProduct,
  FlashSaleSession,
} from "constants/types/flashSale.types";

const initialCurrentFlashSaleSession: FlashSaleSession = {
  _id: "",
  name: "",
  start_time: "",
  end_time: "",
  status: "happening",
  number_of_products: 0,
};

const initProductCategoryValue: Array<ProductCategory> = [
  {
    _id: "1",
    image:
      "https://imagedelivery.net/90WUWQoUhu7lDQSQdLF4OQ/882a5455-c1e3-41a8-6b95-b98988668e00/public",
    name: "Nhạc cụ",
    subcategories: [],
  },
  {
    _id: "2",
    image: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    name: "Điện thoại",
    subcategories: [],
  },
  {
    _id: "3",
    image: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    name: "Màn hình",
    subcategories: [],
  },
  {
    _id: "4",
    image: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    name: "Quần áo",
    subcategories: [],
  },
  {
    _id: "5",
    image: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    name: "Máy tính",
    subcategories: [],
  },
  {
    _id: "6",
    image: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    name: "Máy ảnh",
    subcategories: [],
  },
  {
    _id: "7",
    image: "https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
    name: "Thuốc",
    subcategories: [],
  },
  {
    _id: "8",
    image: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
    name: "Đồ gia dụng",
    subcategories: [],
  },
];

type homeState = {
  recommendProductList: Array<Product>;
  categoryList: Array<ProductCategory>;
  flashSaleProductList: Array<FlashSaleProduct>;
  currentFlashSaleSession: FlashSaleSession;
};

const initialState: homeState = {
  recommendProductList: [],
  categoryList: initProductCategoryValue,
  flashSaleProductList: [],
  currentFlashSaleSession: initialCurrentFlashSaleSession,
};

const store = createState(initialState);

export default store;
