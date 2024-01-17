import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Product/ProductDetails";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Product/SuggestedProduct"
const ProductsDetailsPage = () => {
  const { name } = useParams();
  const [data, setdata] = useState(null);

  const productName = name.replace(/-/g, " ");
  console.log(data);
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setdata(data);
  }, [productName]);

  return (
    <div>
      <Header />
      <ProductDetails data={data}/>
      {
        data && <SuggestedProduct data={data}/>
      }
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
