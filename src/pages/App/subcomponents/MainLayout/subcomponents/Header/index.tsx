import styles from "pages/App/subcomponents/MainLayout/subcomponents/Header/Header.module.css";
import MainHeader from "pages/App/subcomponents/MainLayout/subcomponents/Header/subcomponents/MainHeader";
import TopHeader from "pages/App/subcomponents/MainLayout/subcomponents/Header/subcomponents/TopHeader";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="container">
        <TopHeader />
        <MainHeader />
      </div>
    </header>
  );
};

export default Header;
