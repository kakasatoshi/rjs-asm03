import React, { useState } from "react";
import css from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import formatPrice from "../Layout/formatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ItemProduct from "../List/ItemProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import ShowPopup from "../List/ShowPopup";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.show.productData);
  const product = data.find((e) => e._id.$oid === id);
  const categoryData = data.filter(
    (e) => e.category === product.category && e._id.$oid !== id
  );

  const [quantity, setQuantity] = useState(1);
  const { listCart } = useSelector((state) => state.cart);
  const show = useSelector((state) => state.show.show);

  console.log(listCart, "LIST CART");

  if (!product) {
    return <div>Product not found</div>;
  }

  const text = product.long_desc;
  const formattedText = text.replace(/\n\n/g, "<br />");

  const onClickHandle = (e) => {
    e.preventDefault();
    const data = {
      product: product,
      quantity: quantity,
    };
    dispatch(cartActions.addCart(data));
  };

  return (
    <div className={css.content}>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="d-flex col-lg-6">
              <div className="d-flex flex-column align-items-center mr-2">
                {[product.img1, product.img2, product.img3, product.img4].map(
                  (img, idx) => (
                    <a
                      key={idx}
                      className="border mx-1 my-1 rounded-2 item-thumb"
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="100"
                        height="100"
                        className="rounded-2"
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                      />
                    </a>
                  )
                )}
              </div>
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  className="rounded-4"
                  href={product.img1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={product.img1}
                    alt="Main product"
                  />
                </a>
              </div>
            </aside>

            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h3 className="title text-dark">{product.name}</h3>

                <div className="mb-3">
                  <span className="h6">{formatPrice(product.price)}</span>
                </div>

                <p>{product.short_desc}</p>
                <p>CATEGORY: {product.category}s</p>

                <hr />
                <div>
                  <div
                    className={`d-flex justify-content-left ${css.quantity} align-items-center `}
                  >
                    QUANTITY
                    <button
                      className={`btn ${css.faCaret}`}
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <p className="align-items-center ">{quantity}</p>
                    <button
                      className={`btn ${css.faCaret}`}
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                    <a
                      href="#"
                      className={`btn shadow-0 bg-dark text-white`}
                      onClick={onClickHandle}
                    >
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
          <div className="containter">
            {/* col-lg-4 */}
            <h4 className="card-title">RELATED PRODUCT</h4>
            <div className="d-flex column ">
              {categoryData.map((item, idx) => (
                <ItemProduct product={item} key={idx} />
              ))}
            </div>
            {show && <ShowPopup />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
