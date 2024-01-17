import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";


const Navbar = ({ active }) => {
    // console.log(navItems)
  return (
    <div className={` block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((nav, index) => (
          <div className="flex" key={nav.title}>
            <Link 
              to={nav.url}
              className={`${
                active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-white"
              } font-[500] px-6 cursor-pointer pb-7 800px:pb-0`}
            >
              {nav.title}
            </Link>
          </div>
        ))
            
    }

    </div>
  );
};

export default Navbar;
