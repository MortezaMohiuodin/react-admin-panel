const MockAdapter = require("axios-mock-adapter")

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

const initMock = (axiosInstance) => {
  const Mock = new MockAdapter(axiosInstance)
  Mock.onPost("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  })
}

export {
  transformRequest,
  transformResponse,
  requestInterceptorConfig,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
  initMock,
}
