import axios from "axios";
import configs from "~/configs";

export default defineNuxtPlugin(() => {
  const http = axios.create({
    baseURL: configs.http.baseUrl,
    timeout: configs.http.requestTimeout,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      /* "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers", */
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      http,
    },
  };
});
