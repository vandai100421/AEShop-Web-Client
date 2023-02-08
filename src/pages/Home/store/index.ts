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
    image:
      "https://imagedelivery.net/90WUWQoUhu7lDQSQdLF4OQ/882a5455-c1e3-41a8-6b95-b98988668e00/public",
    name: "Điện thoại",
    subcategories: [],
  },
  {
    _id: "3",
    image:
      "https://imagedelivery.net/90WUWQoUhu7lDQSQdLF4OQ/882a5455-c1e3-41a8-6b95-b98988668e00/public",
    name: "Đồ gia dụng",
    subcategories: [],
  },
  {
    _id: "4",
    image:
      "https://imagedelivery.net/90WUWQoUhu7lDQSQdLF4OQ/882a5455-c1e3-41a8-6b95-b98988668e00/public",
    name: "Linh kiện điện thoại",
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
