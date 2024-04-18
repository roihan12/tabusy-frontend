// create products

import axios from "axios";
import { server } from "../../server";

export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/products/create-product`,
      newForm,
      config
    );

    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all products

export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });
    const { data } = await axios.get(
      `${server}/products/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteProductShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductShopRequest",
    });

    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/products/delete-shop-product/${id}`,
      config
    );
    dispatch({
      type: "deleteProductShopSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductShopFail",
      payload: error.response.data.message,
    });
  }
};
