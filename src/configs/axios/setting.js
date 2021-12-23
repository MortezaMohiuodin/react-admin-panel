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
  return config
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
