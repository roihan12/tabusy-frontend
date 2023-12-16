import React, { useEffect, useState } from "react";
import Headers from "../components/Layout/Header";

import { productData } from "../static/data";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const BestSellPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const product =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);

    setData(product);
  }, []);

  return (
    <div>
      <Headers activeHeading={2} />
      <br />
      <br />

      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data &&
            data.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-xl">
            No products Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default BestSellPage;
