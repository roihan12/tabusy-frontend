import React, { useEffect } from "react";
import ShopLogin from "../components/Shop/ShopLogin";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const ShopLoginPage = () => {
  const { isSeller, seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
