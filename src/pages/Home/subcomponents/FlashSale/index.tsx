import React from "react";
import styles from "pages/Home/subcomponents/FlashSale/FlashSale.module.css";
import { Space, Statistic } from "antd";

const { Countdown } = Statistic;

const FlashSale = () => {
  const deadline = Date.now() + 100 * 1000;

  return (
    <div className={styles.container}>
      <Space>
        <div>FlashSale sẽ diễn ra trong: </div>
        <Countdown value={deadline} />
      </Space>
    </div>
  );
};

export default FlashSale;
