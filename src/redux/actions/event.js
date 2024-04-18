// create events

import axios from "axios";
import { server } from "../../server";

export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/events/create-event`,
      newForm,
      config
    );

    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all events

export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsShopRequest",
    });
    const { data } = await axios.get(
      `${server}/events/get-all-events-shop/${id}`
    );
    dispatch({
      type: "getAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteEventShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventShopRequest",
    });

    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/events/delete-shop-event/${id}`,
      config
    );
    dispatch({
      type: "deleteEventShopSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventShopFail",
      payload: error.response.data.message,
    });
  }
};
