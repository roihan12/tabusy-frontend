import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.jsx"


const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataProduct =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = dataProduct.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8 mb-12 border-0">

        {
            data && data.map((product, index) => (
                <ProductCard data={product} key={index}/>
            ))
        }
      </div>
    </div>
  );
};

export default BestDeals;
