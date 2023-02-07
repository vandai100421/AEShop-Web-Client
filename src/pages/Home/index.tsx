import { Col, message, Row } from "antd";
import flashSaleApi from "apis/test";
import ProductSearchItem from "components/ProductSearchItem";
import React, { useEffect } from "react";

const handleGetAllSession = async () => {
  try {
    const dataRes = await flashSaleApi.getAllSessionFlashSale();
    console.log(dataRes.data.results);
  } catch (error: any) {
    message.error("Loi")
  }
};
const Search = () => {
  useEffect(() => {
    handleGetAllSession();
  }, []);
  return (
    <div>
      <Row gutter={16}>
        <Col xl={4}></Col>
        <Col xl={20}>
          <Row gutter={[16, 16]}>
            {new Array(10).fill({}).map((index) => (
              <ProductSearchItem key={index} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
