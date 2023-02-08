import {
  BehanceCircleFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Header/subcomponents/MainHeader/MainHeader.module.css";

const MainHeader = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <BehanceCircleFilled style={{ paddingRight: 4 }} />
            BrothersShop
          </div>
        </Link>
      </div>

      <div className={styles.searchWrapper}>
        <form action="">
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm"
          />
          <Button type="primary" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
        </form>
        <Space className={styles.suggestSearch}>
          <span>Phụ kiện điện thoại</span>
          <span>Đồ nội thất</span>
          <span>Nhạc cụ</span>
          <span>Màn hình</span>
        </Space>
      </div>
      <div className={styles.cartPopover}>
        <ShoppingCartOutlined />
      </div>
    </section>
  );
};

export default MainHeader;
