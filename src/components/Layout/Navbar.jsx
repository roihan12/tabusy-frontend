import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";


const Navbar = ({ active }) => {
    // console.log(navItems)
  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((nav, index) => (
          <div className="flex" key={nav.title}>
            <Link 
              to={nav.url}
              className={`${
                active === index + 1 ? "text-[#17dd1f]" : "text-white"
              } font-[500] px-6 cursor-pointer`}
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
