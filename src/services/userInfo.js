import axios from "axios";
import { addTokenToHeader, getIdFromToken } from "../helper/utils";

export const addAddress = async (data) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/address/add`, {newAddress: data}, { headers });
    console.log(res)
    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
};

export const updateAddress = async (id, data) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/v1/user/address/update/${id}`, {updatedAddress: data}, { headers });

    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
}

export const deleteAddress = async (id) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/user/address/delete/${id}`, { headers });
    console.log(res)
    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
}

export const updateUserInfo = async (userData) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/user/update`, userData, { headers });
    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
  
}

export const addPaymentMethod = async (data) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/payment/add`, data, { headers });
    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
}

export const removePaymentMethod = async (id) => {
  try {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/user/payment/remove/${id}`, { headers });
    return {
      status: res.status,
      message: res.data.message
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
}