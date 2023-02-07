import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Divider, Space } from "antd";
import React from "react";
import AccountMenu from "pages/App/subcomponents/MainLayout/subcomponents/Header/subcomponents/TopHeader/subcomponents/AccountMenu";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Header/subcomponents/TopHeader/TopHeader.module.css";

const TopHeader = () => {
  return (
    <section className={styles.wrapper}>
      <Space>
        <a href="http://">Tải ứng dụng</a>
        <Divider type="vertical" />
        <Space>
          <span>Kết nối</span>
          <a href="mailto:">
            <FacebookFilled />
          </a>
          <a href="http://">
            <InstagramFilled />
          </a>
        </Space>
      </Space>
      <Space>
        <AccountMenu />
      </Space>
    </section>
  );
};

export default TopHeader;
