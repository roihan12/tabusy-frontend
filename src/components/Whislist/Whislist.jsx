import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";

import { BsCartPlus } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";

const Whislist = ({ setOpenWhislist }) => {
  const whislistData = [
    {
      id: 1,
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the",
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
              onClick={() => setOpenWhislist(false)}
            />
          </div>
          {/* Item Length */}
          <div className={`${styles.noramlFlex}`}>
            <AiOutlineHeart size={25} className="ml-4" />
            <h5 className="pl-2 text-xl font-[500]">3 items</h5>
          </div>

          {/* Cart single items */}
          <br />
          <div className="w-full border-t">
            {whislistData &&
              whislistData.map((items, index) => (
                <WhislistSingle key={index} data={items} />
              ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

const WhislistSingle = ({ data }) => {
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
      <RxCross1 size={20} className="cursor-pointer" />
        <img src={data.image_Url} className="w-[80px] h-[80px] ml-2" />
       
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-semibold text-[18px] text-red-500 font-Roboto">
            {" "}
            US${data.price}
          </h4>
        </div>
        <BsCartPlus size={30} className="cursor-pointer" tile="Add to cart" />
      </div>
    </div>
  );
};

export default Whislist;
