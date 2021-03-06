import axios from "axios";
import {
  URL_SERVER,
  CHECK_ROUTE_USER_EMAIL,
  CHECK_ROUTE_USER_LOGIN,
  ROUTE_USER_NEW,
} from "../constants/server";

export const registrUser = async (userData) => {
  const data = {
    isSuccess: false,
    adminChatId: -1,
  };
  const sendData = {
    ...userData,
    birthPlace: userData.birthPlace || null,
  };
  await axios
    .post(URL_SERVER + ROUTE_USER_NEW, sendData)
    .then((res) => {
      const result = res.data;
      if (result) {
        data.isSuccess = true;
        data.adminChatId = result.adminChatId;
        data.userId = result.userId;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const checkEmail = async (email) => {
  let isExist = false;
  await axios
    .post(URL_SERVER + CHECK_ROUTE_USER_EMAIL, {
      email: email,
    })
    .then((res) => {
      const result = res.data;
      if (res.data) {
        isExist = result.isExist;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return isExist;
};

export const checkLogin = async (login) => {
  let isExist = false;
  await axios
    .post(URL_SERVER + CHECK_ROUTE_USER_LOGIN, {
      login: login,
    })
    .then((res) => {
      const result = res.data;
      if (res.data) {
        isExist = result.isExist;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return isExist;
};
