import { request } from "apis/base";

const flashSaleApi = {
  getAllSessionFlashSale: () => {
    return request("/flashsale/getAllSessions", {
      method: "GET",
    });
  },
  getAllProductFlashSale: (params?: any) => {
    return request("/flashsale/getAllProducts", {
      method: "GET",
      params,
    });
  },
};

export default flashSaleApi;
