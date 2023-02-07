import { Badge, Col, Rate, Space } from "antd";
import React from "react";
import styles from "components/ProductSearchItem/ProductSearchItem.module.css";

const ProductSearchItem = () => {
  return (
    <Col className={styles.wrapper}>
      <div>
        <div>
          <Badge.Ribbon text="- 20%" placement="start" color="red">
            <div className={styles.imgWrapper}>
              <img
                src="https://vietthuong.vn/image/cache/catalog/kawai/dan-piano-kawai-k300-450x471.jpg"
                alt=""
              />
            </div>
          </Badge.Ribbon>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.name}>
            Quần tây nam ống rộng vải Trượt tuyết mềm co giãn độ dày vừa phải
            kiểu dáng thoải mái phong cách Hàn Quốc
          </div>
          <Space className={styles.priceWrapper}>
            <div className={styles.oldPrice}>
              <span>₫</span>
              175.000
            </div>
            <div className={styles.price}>
              <span>₫</span>
              175.000
            </div>
          </Space>
          <Space>
            <Rate className={styles.rate} value={5} />
            <span className={styles.sold}>Đã bán 10,6k</span>
          </Space>
          <div className={styles.location}>Hà Nội</div>
        </div>
      </div>
    </Col>
  );
};

export default ProductSearchItem;
