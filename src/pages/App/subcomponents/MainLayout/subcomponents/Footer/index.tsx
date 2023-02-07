import React from "react";
import styles from "pages/App/subcomponents/MainLayout/subcomponents/Footer/Footer.module.css";
import MainFooter from "pages/App/subcomponents/MainLayout/subcomponents/Footer/subcomponents/MainFooter";
import BottomFooter from "pages/App/subcomponents/MainLayout/subcomponents/Footer/subcomponents/BottomFooter";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <MainFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
