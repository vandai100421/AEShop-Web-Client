import { Col, Row, Space } from "antd";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Footer/subcomponents/MainFooter/MainFooter.module.css";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Row gutter={32}>
          <Col xl={6}>
            <div className={styles.heading}>CHĂM SÓC KHÁCH HÀNG</div>
            <Space direction="vertical">
              <Link to="/">
                <span className={styles.linkText}>Trung Tâm Trợ Giúp</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>ShopMusic Blog</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Hướng Dẫn Mua Hàng</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Thanh Toán</span>
              </Link>
            </Space>
          </Col>
          <Col xl={6}>
            <div className={styles.heading}>VỀ SHOPMUSIC</div>
            <Space direction="vertical">
              <Link to="/">
                <span className={styles.linkText}>Trung Tâm Trợ Giúp</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>ShopMusic Blog</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Hướng Dẫn Mua Hàng</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Thanh Toán</span>
              </Link>
            </Space>
          </Col>
          <Col xl={6}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <div className={styles.heading}>THANH TOÁN</div>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <div className={styles.paymentItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.paymentItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.paymentItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.paymentItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.paymentItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                <div className={styles.heading}>ĐƠN VỊ VẬN CHUYỂN</div>
                <Row gutter={8}>
                  <Col span={8}>
                    <div className={styles.shippingItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/d10b0ec09f0322f9201a4f3daf378ed2"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.shippingItem}>
                      <a href="">
                        <img
                          src="https://cf.shopee.vn/file/77bf96a871418fbc21cc63dd39fb5f15"
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Space>
          </Col>
          <Col xl={6}>
            <div className={styles.heading}>
              TẢI ỨNG DỤNG SHOPMUSIC NGAY THÔI
            </div>
            <Space direction="vertical">
              <Link to="/">
                <span className={styles.linkText}>Trung Tâm Trợ Giúp</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>ShopMusic Blog</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Hướng Dẫn Mua Hàng</span>
              </Link>
              <Link to="/">
                <span className={styles.linkText}>Thanh Toán</span>
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainFooter;
