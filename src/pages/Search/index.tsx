import { Col, Row } from "antd";
import ProductSearchItem from "components/ProductSearchItem";
import React from "react";

const Search = () => {
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
