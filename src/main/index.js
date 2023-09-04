import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { API_URL } from "../config/constants.js";
dayjs.extend(relativeTime);
dayjs.locale("ko");
function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch((err) => {
        console.error("에러발생", err);
      });
  }, []);

  return (
    <>
      <div id="banner">
        <img src="./images/banners/banner6.png" alt="" />
      </div>
      <h1 id="product-headline">판매 상품</h1>
      <div id="product-list">
        {products.map((product, index) => {
          return (
            <div className="product-card">
              {product.soldout === 1 && <div className="product-blur" />}
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-img"
                    src={`${API_URL}/${product.imageUrl}`}
                  />
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-footer">
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                      <span className="product-date">
                        {dayjs(product.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default MainPage;
