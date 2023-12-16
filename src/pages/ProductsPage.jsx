import React, { useEffect, useState } from "react";
import Headers from "../components/Layout/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const product =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(product);
    } else {
      const product =
        productData &&
        productData.filter((product) => product.category === categoryData);
      setData(product);
    }
  }, [categoryData]);

  return (
    <div>
      <Headers activeHeading={3}/>
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

export default ProductsPage;
