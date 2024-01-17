import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      id: 1,
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url:
        "https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1_4.jpg",
      price: 1099,
    },

    {
      id: 1,
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url:
        "https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1_4.jpg",
      price: 1099,
    },
    {
      id: 1,
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url:
        "https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1_4.jpg",
      price: 1099,
    },
  ];

  return (
    <div className=" fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item Length */}
          <div className={`${styles.noramlFlex}`}>
            <IoBagHandleOutline size={25} className="ml-4" />
            <h5 className="pl-2 text-xl font-[500]">3 items</h5>
          </div>
          {/* Cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((items, index) => (
                <CartSingle key={index} data={items} />
              ))}
          </div>
        </div>

        <div className="px-5 mb-3">
          {/* Checkout Button */}
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-full bg-red-600 rounded-md">
              <h1 className="text-white text-lg font-semibold">Checkout Now</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className="bg-[#e44343] border border-[#e4434373 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={18} color="#7d879c" />
          </div>
        </div>

        <img src={data.image_Url} className="w-[80px] h-[80px] ml-2" />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-normal text-base text-gray-800">
            {" "}
            ${data.price} * {value}
          </h4>
          <h4 className="font-semibold text-[18px] text-red-500 font-Roboto">
            {" "}
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
