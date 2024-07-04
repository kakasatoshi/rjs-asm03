import React from "react";
import css from "./HomePage.module.css"; // Giả sử bạn tạo một file CSS riêng cho các style của trang này
import { Link } from "react-router-dom";
import ListProduct from "../components/List/ListProduct";
import useProducts from "../http/useProduct";
import FooterList from "../components/List/FooterList";
import { useDispatch, useSelector } from "react-redux";
// import { showAction } from "../store";
import HeadList from "../components/List/HeadList"


const HomePage = () => {
  // const { products, isLoading, error } = useProducts();
  // const usedispatch=useDispatch();
  const products =useSelector((state)=>state.show.productData) || [];
  console.log(products);


  

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }


  return (
    <div className={"" }>
      {/* Banner*/}
      <div className={css["banner-container"]}>
        <div className={css["banner-img"]}>
          <img
            src="img/banner1.jpg"
            alt="Miêu tả về hình ảnh"
            // className={css["banner-img"]}
          />
        </div>
        <div className={css.content}>
          <h6>NEW INSPIRATION 2020</h6>
          <h1>20% OFF ON NEW SEASON</h1>
          <div className={css["button-container"]}>
            <Link to="shop">
              
              <button className={css.btn}>Browse collection</button>
            </Link>
          </div>
        </div>
      </div>
      {/* //////////danh sach///////////////// */}
      <div className={css.list}>
        <div className={css.tittleList}>
          <h6>CAREFULLY CREATED COLLECTION</h6>
          <h4>BROWSE OUT CATEGORIES</h4>
        </div>
        <div className={css.list1}>
          <div>
            <img src="img/product_1.png" alt="" />
          </div>
          <div>
            <img src="img/product_2.png" alt="" />
          </div>
        </div>
        <div className={css.list2}>
          <div>
            <img src="img/product_3.png" alt="" />
          </div>
          <div>
            <img src="img/product_4.png" alt="" />
          </div>
          <div>
            <img src="img/product_5.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <HeadList />
        <ListProduct products={products} />
      </div>
      <FooterList/>
    </div>
  );
};

export default HomePage;
