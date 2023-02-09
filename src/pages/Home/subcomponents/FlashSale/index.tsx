import React from "react";
import styles from "pages/Home/subcomponents/FlashSale/FlashSale.module.css";
import ProductFlashSaleItem from "components/ProductFlashSaleItem";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;

const FlashSale = () => {
  const deadline = Date.now() + 100 * 1000;

  return (
    <div className={styles.container}>
      {/* <Space>
        <div>FlashSale sẽ diễn ra trong: </div>
        <Countdown value={deadline} />
      </Space> */}
      <div style={{ marginTop: "10px" }}>
        <Row className={styles.headerWrapper}>
          <Col>
            <div className={styles.contentWrapper}>
              <div className={styles.highlight}></div>
              <div className={styles.titleWrapper}>FLASH SALE: </div>
              <Countdown value={deadline} className={styles.countdown} />
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
