import React from "react";
import styles from "pages/Home/subcomponents/Banner/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "antd";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageRatio from "components/ImageRatio";

const Banner: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <Row gutter={8}>
          <Col span={16}>
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className={styles.swiper}
            >
              <SwiperSlide>
                <ImageRatio
                  src="https://cf.shopee.vn/file/f2465526ee0dc815edcf5a3d6e64665a_xxhdpi"
                  alt=""
                  ratio={3}
                  className={styles.imageWrapper}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageRatio
                  src="https://cf.shopee.vn/file/e88928fca7a80709d66b04c6b9823d9d_xhdpi"
                  alt=""
                  ratio={3}
                  className={styles.imageWrapper}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageRatio
                  src="http://warmgun.com/wp-content/uploads/2021/10/banner-bds.png"
                  alt=""
                  ratio={3}
                  className={styles.imageWrapper}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageRatio
                  src="http://warmgun.com/wp-content/uploads/2021/10/banner-bds.png"
                  alt=""
                  ratio={3}
                  className={styles.imageWrapper}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col span={8}>
            <Row gutter={[0, 8]}>
              <Col span={24}>
                <ImageRatio
                  src="http://warmgun.com/wp-content/uploads/2021/10/banner-bds.png"
                  alt=""
                  ratio={3}
                />
              </Col>
              <Col span={24}>
                <ImageRatio
                  src="https://cf.shopee.vn/file/f2465526ee0dc815edcf5a3d6e64665a_xxhdpi"
                  alt=""
                  ratio={3}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
