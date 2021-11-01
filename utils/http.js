// import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as axios from "axios";
import Toast from "react-native-toast-message";
// import * as RootNavigation from "../navigations/RootNavigation";
// let { toast } = require("react-toastify");
// require("react-toastify/dist/ReactToastify.css");

export default function http(token = "") {
  const instance = axios.create({
    baseURL: process.env.BASE_URL_API,
  });

  // console.log("http base " + "http://192.168.1.105:19000/api/");

  // set headers
  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  instance.defaults.headers.common["Accept"] = "application/json";
  instance.defaults.headers.common["Access-Control-Allow-Origin"] =
    "application/x-www-form-urlencoded";
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";

  /* --------------------- axios instance ----------------------- */

  // Add a request interceptor
  instance.interceptors.request.use(
    async function (config) {
      // Do something before request is sent
      // console.log("the token " + token);
      // console.log("http token : ", token);
      // user is not have any token for auth request
      const _token = await AsyncStorage.getItem("token");
      if (_token) config.headers.Authorization = "Bearer " + _token;

      // if (token) {
      //   // user most have token for every request
      //   config.headers.Authorization = "Bearer " + token;
      // }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      if (response?.data?.status != true) {
        errors_handler(response);
      }
      // if (response?.data?.status == true) {
      //   success_display(response?.data?.message);
      // }

      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  let error_display = (data, statusText) => {
    // toast notification
    if (!data) return;
    if (typeof statusText == "string") {
      console.log(statusText);
      Toast.show({
        text2: statusText ? statusText : "خطا",
        type: "error",
      });
    } else if (typeof statusText.message == "string") {
      Toast.show({
        text2: statusText.message ? statusText.message : "خطا",
        type: "error",
      });
    } else if (Array.isArray(statusText)) {
      statusText.forEach((item) => {
        setTimeout(() => {
          Toast.show({
            text2: item.message ? item.message : "خطا",
            type: "error",
          });
        }, 3000);
      });
    } else if (data.message.length > 1) {
      Toast.show({
        text2: data.message[0].message ? data.message[0].message : "خطا",
        type: "error",
      });
    } else {
      Toast.show({
        text2: statusText ? statusText : "خطا",
        type: "error",
      });
    }
  };
  let success_display = (status) => {
    // toast notification
    console.log(status);
    if (!status) return;
    if (typeof status.message == "string") {
      Toast.show({
        text2: status.message,
        type: status.isSuccess ? "success" : "error",
      });
    }
  };

  /* --------------------- axios instance errors ----------------------- */
  function errors_handler(error) {
    if (error?.data?.message && error?.data.success == false) {
      // error_display(error, error?.data?.message);
      return;
    }

    if (!error && !error.response && !error.response.data) {
      return;
    }
    let current_error = error?.response?.data;
    let current_error_status = error?.response?.status;
    let current_error_message = current_error?.message;

    switch (current_error_status) {
      case 200:
        //bad request
        error_display(current_error, current_error_message);
        break;
      case 400:
        //bad request
        error_display(current_error, current_error_message);
        break;
      case 401:
        //unauthenticate

        AsyncStorage.removeItem("token");
        // RootNavigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
      case 403:
        //unauthenticate
        AsyncStorage.removeItem("token");
        // RootNavigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
      case 410:
        //unauthenticate
        error_display(current_error, current_error_message);
        break;
      case 422:
        error_display(current_error, current_error_message);
        break;
      case 415:
        error_display(current_error, "اطلاعات وارد شده صحیح نمی باشد!");
        break;
      case 500:
        //server error
        // if (typeof window !== "undefined") AsyncStorage.removeItem("token");
        // if (typeof window !== "undefined") navigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
    }
  }
  /* --------------------- axios instance ----------------------- */
  return {
    // sample
    // **
    // inja bayad api hayi ke mikhay ro done be done bzari
    // **
    Login: (phone, callback, errCallback) => {
      const data = {
        code: "",
        phone: phone,
      };
      console.log("loginig...");
      return instance
        .post("/Token/Login", data)
        .then((res) => {
          callback(res);
          success_display(res.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          else errors_handler(err);
        });
    },
    LoginVerify: (data, callback, errCallback) => {
      return instance
        .post("Token/Verify", data)
        .then((res) => {
          callback(res);
          success_display(res.data);
        })
        .catch((err) => {
          console.log("errrr", err);
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },

    GetAllProvinces: (callback, errCallback) => {
      console.log("getting...")
      return instance
        .post("http://192.168.43.206:5000/api/ChoseAddress/GetAllProvinces")
        .then((res) => {
          console.log("hdone")
          callback(res);
          success_display(res.data);
        })
        .catch((err) => {
          console.log("errrr", err);
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
  };
}
