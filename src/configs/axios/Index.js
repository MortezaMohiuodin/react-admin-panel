import axios from "axios"
import cookie from "js-cookie"

import {
  transformRequest,
  transformResponse,
  requestInterceptorConfig,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
} from "./setting"

const token = cookie.get('token') || ''

const option = {
  timeout: 5000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Authorization" : `Bearer ${token}`
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
  headers:option.headers,
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
