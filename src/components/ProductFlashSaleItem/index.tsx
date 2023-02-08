import { Badge, Col, Space, Progress } from "antd";
import { FireFilled } from "@ant-design/icons";
import React from "react";
import styles from "components/ProductFlashSaleItem/ProductFlashSaleItem.module.css";

const ProductFlashSaleItem = () => {
  return (
    <Col className={styles.wrapper}>
      <div>
        <div>
          <Badge.Ribbon text="- 99%" placement="end" color="Red">
            <div className={styles.imgWrapper}>
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22120-d60vcx51kklv47"
                alt=""
              />
            </div>
          </Badge.Ribbon>
        </div>
        <div className={styles.contentWrapper}>
          {/* <div className={styles.name}>
            Quần tây nam ống rộng vải Trượt tuyết mềm co giãn độ dày vừa phải
            kiểu dáng thoải mái phong cách Hàn Quốc
          </div> */}
          <Space className={styles.priceWrapper}>
            <div className={styles.price}>
              <span>₫</span>
              100.000
            </div>
          </Space>
          <Space>
            <div>
              <FireFilled className={styles.fireIcon} />
              <span className={styles.sold}> Đã bán 10,6k</span>
            </div>
          </Space>

          <Progress
            percent={30}
            strokeWidth={20}
            strokeColor="orange"
            showInfo={false}
          />
        </div>
      </div>
    </Col>
  );
};

export default ProductFlashSaleItem;
