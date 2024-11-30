import axios from "axios";
import { addTokenToHeader, getIdFromToken } from "../helper/utils";

export const getCartById = async () => {
  try {
    const id = getIdFromToken()
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/id/${id}`);
    return {
      status: res?.status,
      data: res?.data
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
};

export const addItemsToCart = async (data) => {
  try {
    console.log("DATA: ", data)
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/add`, data, { headers });
    return {
      status: res?.status,
      data: res?.data
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
};