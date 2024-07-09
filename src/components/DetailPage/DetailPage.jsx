import React, { useState } from "react";
import css from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import formatPrice from "../Layout/formatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ItemProduct from "../List/ItemProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.show.productData);
  const product = data.filter((e) => e._id.$oid === id);
  // console.log(product, "product");
  const categoryData = data.filter((e) => e.category == product[0].category &&  e._id.$oid !== id);
  // console.log(categoryData, "categoryData");
  const quantityData=(useSelector(state=>state.show.cart)).filter((e)=>e.id===id).quantity;
  console.log(quantityData,"quantityData");
  const [quantity,setQuantity]=useState(quantityData||1);
  // const arrQuantity=(useSelector(state=>state.show.cart)).filter((e)=>e.id===id).quantity;

  const listCart = useSelector((state) => state.cart.listCart);

  console.log(listCart,"listcart"); // In ra console để kiểm tra

  if (product.length === 0) {
    return <div>Product not found</div>;
  }
  const text = product[0].long_desc;
  const formattedText = text.replace(/\n\n/g, "<br />");

  const onClickHanle=()=>{
    const data={
      product:product[0],
      quantity:quantity,
    };
    dispatch(cartAction.ADD_CART(data));
  };

  return (
    <div className={css.content}>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="d-flex col-lg-6">
              <div className="d-flex flex-column align-items-center mr-2">
                {[
                  product[0].img1,
                  product[0].img2,
                  product[0].img3,
                  product[0].img4,
                ].map((img, idx) => (
                  <a
                    key={idx}
                    data-fslightbox="mygalley"
                    className="border mx-1 my-1 rounded-2 item-thumb"
                    target="_blank"
                    data-type="image"
                    href={img}
                  >
                    <img
                      width="100"
                      height="100"
                      className="rounded-2"
                      src={`${img}`}
                      alt={`Thumbnail ${idx + 1}`}
                    />
                  </a>
                ))}
              </div>
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  href={product[0].img1}
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={product[0].img1}
                    alt="Main product"
                  />
                </a>
              </div>
            </aside>

            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h3 className="title text-dark">{product[0].name}</h3>

                <div className="mb-3">
                  <span className="h6">{formatPrice(product[0].price)}</span>
                </div>

                <p>{product[0].short_desc}</p>
                <p>CATEGORY: {product[0].category}s</p>
                {/* <p className="text-muted mb-3">{product[0].long_desc}</p> */}

                <hr />
                <div>
                  <div
                    className={`d-flex justify-content-left ${css.quantity} align-items-center `}
                  >
                    QUANTITY
                    <button className={`btn ${css.faCaret}`} onClick={()=>setQuantity(quantity-1)}>
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <p className="align-items-center ">{quantity}</p>
                    <button className={`btn ${css.faCaret}`} onClick={()=>setQuantity(quantity+1)}>
                      <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                    <a href="#" className={`btn shadow-0 bg-dark text-white`} onClick={onClickHanle}>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="d-flex column">
        <div className="container">
        <button className="btn bg-dark text-white mb-2">DESCRIPTION</button>
        <h6>PRODUCT DESCRIPTION</h6>
        </div>     
      </section>

      <section className="bg-light border-top py-4">
        <div className="container">
          <div
            className="col-lg-8 mb-4"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          ></div>
          <div className="col-lg-4">
          <h4 className="card-title">RELATED PRODUCT</h4>
              <div className="d-flex column ">
                {categoryData.map((item, idx) => (
                  <ItemProduct product={item} key={idx} />
                ))}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
