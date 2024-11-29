import axios from "axios";
import { addTokenToHeader, getIdFromToken } from "../helper/utils";

export const getRestaurantById = async (id) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/restaurant/${id}`);
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

export const getAllRestaurants = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/restaurant/`);
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