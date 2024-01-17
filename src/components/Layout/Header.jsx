import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Tabusy from "../../assets/tabusy.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../Cart/Cart";
import Whislist from "../Whislist/Whislist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWhislist, setOpenWhislist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    const filterProducts = productData.filter((product) => {
      return product.name.toLowerCase().includes(term.toLowerCase());
    });
    setSearchData(filterProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div className="300px:flex justify-center items-center">
            <Link to="/">
              <img src={Tabusy} alt="Logo" />
            </Link>
          </div>

          {/* search box */}
          <div className="w-1/2 relative ">
            <input
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
              type="text"
              placeholder="Search Product..."
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
            <Link to="/shop-create">
              <h1 className="text-white flex items-center">
                Become Seller
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 w-full" : null
        } transition hidden 800px:flex items-center justify-between bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* {Categories} */}
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

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWhislist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255/83%)" />

                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  3
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255/83%)" />

                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  3
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}/${user.avatar}`}
                      className="w-[35px] h-[35px] object-cover rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255/83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* Cart Popup  */}

            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* Whislit Popup  */}

            {openWhislist ? (
              <Whislist setOpenWhislist={setOpenWhislist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={` ${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 w-full" : null
        } w-full h-[60px] bg-white z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src={Tabusy}
                alt="Logo"
                className="mt-0 cursor-pointer"
                width={150}
              />
            </Link>
          </div>

          <div>
            <div className="relative mr-[20px]">
              <AiOutlineShoppingCart size={30} />

              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                3
              </span>
            </div>
          </div>
        </div>

        {/* Header Siderbar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[60%] bg-white h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-4">
                    <AiOutlineHeart size={30} className="mt-4 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      3
                    </span>
                  </div>
                </div>

                <RxCross1
                  size={30}
                  className="ml-4 mt-5 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px] relative">
                <input
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

                {searchData && (
                  <div className="absolute bg-white shadow w-full z-10 left-0 p-3">
                    {searchData &&
                      searchData.map((product) => {
                        const d = product.name;

                        const Product_name = d.replace(/\s+/g, "-");

                        return (
                          <Link
                            key={product.id}
                            to={`/product/${Product_name}`}
                          >
                            <div className="flex items-center">
                              <img
                                src={product.image_Url[0].url}
                                alt={Product_name}
                                className="w-[50px] h-[50px] mr-2"
                              />
                              <h1>{product.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-white flex items-center">
                    Become Seller
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>

              <br />
              <br />
              <br />
              <div className="flex w-full justify-center">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to={"/login"}
                      className="text-lg pr-[10px] text-[#000000b7] font-semibold"
                    >
                      Login /
                    </Link>
                    <Link
                      to={"/sign-up"}
                      className="text-lg pr-[10px] text-[#000000b7] font-semibold"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <div>
                    <Link to={"/profile"}>
                      <img
                        src={`${backend_url}/${user.avatar}`}
                        className="w-[60px] h-[60px] object-cover rounded-full border-[3px] border-[#3ad132]"
                        alt=""
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
