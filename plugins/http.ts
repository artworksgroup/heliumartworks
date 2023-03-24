import axios, { AxiosError, AxiosInstance } from "axios";
import configs from "~/configs";

const http: AxiosInstance = axios.create({
  baseURL: configs.http.baseUrl,
  timeout: configs.http.requestTimeout,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Content-Type": "application/json",
  },
});

function decodeHttpError(error: AxiosError): {
  code: string | undefined;
  body: any;
} {
  return {
    code: error.code,
    body: error.response?.data ?? error.message,
  };
}

export { http, decodeHttpError };

export default defineNuxtPlugin(() => {
  return {
    provide: {
      http,
      decodeHttpError,
    },
  };
});
