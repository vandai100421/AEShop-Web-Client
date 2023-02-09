import React from "react";
import styles from "pages/Home/subcomponents/FlashSale/FlashSale.module.css";
import ProductFlashSaleItem from "components/ProductFlashSaleItem";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;

const FlashSale = () => {
  const deadline = Date.now() + 100 * 1000;

  return (
    <div className={styles.container}>
      <div style={{ marginTop: "10px" }}>
        <Row className={styles.headerWrapper}>
          <Col>
            <div className={styles.contentWrapper}>
              <div className={styles.flashSaleImage}></div>
              <div className={styles.highlight}></div>
              <Countdown
                value={deadline}
                className={styles.countdown}
                style={{ color: "var(--nc-primary);" }}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {new Array(5).fill({}).map((index) => (
            <ProductFlashSaleItem key={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FlashSale;
