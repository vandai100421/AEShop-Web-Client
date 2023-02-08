import React from "react";
import Banner from "pages/Home/subcomponents/Banner";
import CategoryList from "pages/Home/subcomponents/CategoryList";
import RecommendProducts from "pages/Home/subcomponents/RecommendProducts";
import FlashSale from "pages/Home/subcomponents/FlashSale";

const Search = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <CategoryList />
        <FlashSale />
        <RecommendProducts />
      </div>
    </div>
  );
};

export default Search;
