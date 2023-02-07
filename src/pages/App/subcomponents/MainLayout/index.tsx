import styles from "pages/App/subcomponents/MainLayout/MainLayout.module.css";
import Footer from "pages/App/subcomponents/MainLayout/subcomponents/Footer";
import Header from "pages/App/subcomponents/MainLayout/subcomponents/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainWrapper}>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
