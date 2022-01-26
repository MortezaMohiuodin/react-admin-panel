import axios from "axios"

import {
  transformRequest,
  transformResponse,
  requestInterceptorConfig,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
} from "./setting"

const option = {
  timeout: 5000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  responseType: "json",
  responseEncoding: "utf8",
  transformRequest,
  transformResponse,
}
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: option.timeout,
  headers: option.headers,
  withCredentials: option.withCredentials,
  responseType: option.responseType,
  responseEncoding: option.responseEncoding,
  // transformRequest: option.transformRequest,
  // transformResponse: option.transformResponse,
})

Axios.interceptors.request.use(
  requestInterceptorConfig,
  requestInterceptorError,
)
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError)

export { Axios }
