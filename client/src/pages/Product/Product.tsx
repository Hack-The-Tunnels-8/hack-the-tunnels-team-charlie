import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Product.style.scss";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProduct(id);
      if (json.error !== null) {
        setMessage(json.error);
        return;
      }

      setProduct(json.data.product);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="product-page">
        {message && <p>{message}</p>}
        {product && (
          <>
            <div className="product-page__product">
              <h3 className="product-page__title">Title: {product.title}</h3>
              <img className="product-page__img" src={product.imageUrl}/>
              <p className="product-page__id">ID: {id}</p>
              <p className="product-page__description">Description: {product.description}</p>
            </div>
            <Link to={`/checkout/${product.id}`}>
              <button className="product-page__btn">Buy Now</button>
            </Link>
          </>
        )}
      </div>
    </Page>
  );
}

export default Product;
