import React from "react";
import styles from "../../../styles/styles";
import CountDown from './CountDown'


const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[50%] flex flex-col justify-center ">
        <h2 className={`${styles.productTitle}`}>Iphone 15pro max 8/256gb</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptates temporibus dolor doloremque maxime sunt voluptas eos
          nostrum odio numquam! Eligendi consequatur optio sapiente possimus
          magnam, molestias mollitia vel quia. Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ratione accusamus nobis
          inventore commodi officiis. Suscipit hic quam, sed inventore nihil,
          neque perferendis tempora harum molestias laudantium, labore modi
          quisquam consequuntur
        </p>

      <div className="flex py-2 justify-between">
        <div className="flex">
          <h5 className="font-medium  text-lg text-red-500 pr-3 line-through">
            1099$
          </h5>
          <h5 className="font-bold text-xl text-[#333] font-Roboto">999$</h5>
        </div>
        <span className="pr-3 font-normal text-base text-[#44a55e]">120 Sold</span>
      </div>

      <CountDown/>
      </div>
    </div>
  );
};

export default EventCard;
