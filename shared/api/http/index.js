import { API_SERVER } from 'shared/config'
import axios from 'axios'
import qs from 'qs'

// 请求拦截器
axios.interceptors.request.use(req => {
  let url = ''
  if (req.method === 'get') {
    url = req.url.method
    delete req.url.method
    req.params = req.url
  } else {
    url = req.url.method
    delete req.url.method
    req.data = qs.stringify(req.url, {arrayFormat: 'repeat'})
  }
  req.url = `${API_SERVER.default}/${url}`
  return req
}), err => {
  return Promise.reject(err)
}

// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}), err => {
  return Promise.reject(err)
}

export default axios
