import cookie from "js-cookie"

const transformRequest = [
  function (data, headers) {
    return data
  },
]

const transformResponse = [
  function (data, headers) {
    return data
  },
]

const requestInterceptorConfig = function (config) {
  const token = cookie.get("token") || ""

  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  }
}
const requestInterceptorError = function (error) {
  return Promise.reject(error)
}

const responseInterceptor = function (response) {
  return response
}

const responseInterceptorError = function (error) {
  return Promise.reject(error)
}

export {
  transformRequest,
  transformResponse,
  requestInterceptorConfig,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
}
