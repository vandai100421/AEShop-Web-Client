import React from "react";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Footer/subcomponents/BottomFooter/BottomFooter.module.css";
import { Divider, Space } from "antd";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Space>
          <Link to="/">
            <span className={styles.linkText}>CHÍNH SÁCH BẢO MẬT</span>
          </Link>
          <Divider type="vertical" />
          <Link to="/">
            <span className={styles.linkText}>QUY CHẾ HOẠT ĐỘNG</span>
          </Link>
          <Divider type="vertical" />

          <Link to="/">
            <span className={styles.linkText}>CHÍNH SÁCH VẬN CHUYỂN</span>
          </Link>
          <Divider type="vertical" />

          <Link to="/">
            <span className={styles.linkText}>
              CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
            </span>
          </Link>
        </Space>
        <div className={styles.verifiedWrapper}>
          <Space>
            <img
              src="https://newshop.vn/public/assets/frontend/img/logoSaleNoti.png"
              alt=""
              className={styles.verifiedImg}
            />
          </Space>
        </div>
        <div>
          <div className={styles.companyName}>Công ty TNHH ShopMusic</div>
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
            hệ: 024 73081221 (ext 4678)
          </div>
          <div>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
