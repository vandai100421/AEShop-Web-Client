import React from "react";
import { Row, Col } from "antd";
import styles from "pages/Home/subcomponents/RecommendProducts/RecommendProducts.module.css";
import ProductSearchItem from "components/ProductSearchItem";

const RecommendProducts: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div style={{ marginTop: "10px" }}>
        <Row className={styles.headerWrapper}>
          <Col>
            <div className={styles.contentWrapper}>
              <div className={styles.highlight}></div>
              <div className={styles.titleWrapper}>GỢI Ý HÔM NAY</div>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {new Array(5).fill({}).map((index) => (
            <ProductSearchItem key={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendProducts;
