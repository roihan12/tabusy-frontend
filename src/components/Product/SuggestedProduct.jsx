import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const suggestProduct =
      productData &&
      productData.filter((product) => product.category === data.category);
    setProducts(suggestProduct);
  }, []);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2 className={`${styles.heading} text-2xl font-[500] border-b mb-5`}>
            Related Products
          </h2>

          <div>
            {products &&
              products.map((product, index) => (
                <ProductCard data={product} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
