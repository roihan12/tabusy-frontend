import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import Tabusy from "../../assets/tabusy.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    const filterProducts = productData.filter((product) => {
      return product.name.toLowerCase().includes(term.toLowerCase());
    });
    setSearchData(filterProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.screenY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className=" 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={Tabusy} alt="Logo" />
            </Link>
          </div>

          {/* search box */}
          <div className="w-1/2 relative">
            <input
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
              type="text"
              placeholder="Seacrh Product..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />

            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] p-4">
                {searchData &&
                  searchData.map((product) => {
                    const d = product.name;

                    const Product_name = d.replace(/\s+/g, "-");

                    return (
                      <Link key={product.id} to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={product.image_Url[0].url}
                            alt={Product_name}
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{product.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become Seller
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between bg-[#3321c8] h-[70px]`}
        >
          <div
            className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
          >
            {/* {Cat} */}
            <div onClick={() => setDropDown(!dropDown)}>
              <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                <button
                  className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                >
                  All Categories
                </button>
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />

                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            </div>

            {/*Nav items */}
            <div className={`${styles.noramlFlex}`}>
              <Navbar active={activeHeading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
