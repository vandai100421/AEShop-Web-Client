import React from "react";
import styles from "pages/Home/subcomponents/CategoryList/CategoryList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Grid, Pagination } from "swiper";
import ImageRatio from "components/ImageRatio";
import { useHookstate } from "@hookstate/core";
import store from "pages/Home/store";

const CategoryList: React.FunctionComponent = () => {
  const homeState = useHookstate(store);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerTitle}>Danh Mục</div>
        </div>
        <div style={{ height: "100%" }}>
          <Swiper
            slidesPerView={8}
            grid={{
              rows: 1,
            }}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className={styles.swiper}
          >
            {(homeState.categoryList.get() || []).map((category) => (
              <SwiperSlide className={styles.swiperSlide} key={category._id}>
                <Link className={styles.categoryContainer} to={"/"}>
                  <div className={styles.categoryWrapper}>
                    <div className={styles.imageWrapper}>
                      <ImageRatio
                        src={
                          category.image != undefined
                            ? category.image
                            : "https://tapchi247.com/wp-content/uploads/2018/11/n%E1%BB%91t-nh%E1%BA%A1c-vector-4.jpg"
                        }
                      />
                    </div>
                    <div className={styles.titleWrapper}>
                      <div className={styles.title}>{category.name}</div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
