import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-lg px-1 leading-5 font-semibold cursor-pointer 800px:text-xl"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>

          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-lg px-1 leading-5 font-semibold cursor-pointer 800px:text-xl"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>

          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-lg px-1 leading-5 font-semibold cursor-pointer 800px:text-xl"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>

          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>

      {active === 1 ? (
        <>
          <p className="py-2 text-base leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>

          <p className="py-2 text-base leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            alias fugiat corrupti, adipisci deleniti doloribus, repellat sed,
            voluptate qui aliquid explicabo? Obcaecati nemo repellendus commodi
            nesciunt! Deleniti quam fugiat inventore.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <>
          <div className="w-full justify-center min-h-[40vh] flex items-center">
            <p>No Reviews yet!</p>
          </div>
        </>
      ) : null}

      {active === 3 && (
        <>
          <div className="w-full block 800px:flex p-5">
            <div className="w-full 800px:w-[50%]">
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="flex w-[50px] h-[50px] rounded-full"
                />

                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolorum saepe provident minus eveniet vel pariatur nisi
                facilis, sit delectus accusantium iure. Dolore voluptatum ea
                reiciendis illum assumenda nobis cum ex magnam fugiat
              </p>
            </div>

            <div className="w-full 800px:w-[50%] 800px:mt-0 800px:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-semibold">
                  Joined on: <span>14 Januari, 2024</span>
                </h5>
                <h5 className="font-semibold pt-3">
                  Total Products: <span className="font-[500]">1,223</span>
                </h5>
                <h5 className="font-semibold pt-3">
                  Total Reviews: <span className="font-[500]">256</span>
                </h5>
                <Link to={"/"}>
                  <div
                    className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                  >
                    <h4 className="text-white">Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsInfo;
