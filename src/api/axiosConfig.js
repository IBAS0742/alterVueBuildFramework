import axios from 'axios'
import { baseUrl } from './../utils/variable'

axios.interceptors.request.use(config => {
  if (config.url.indexOf('login') > -1) {
    config.headers.common.token = ''
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common.token = token
    } else {

    }
  }
  console.log(config)
  if (config.url_) {
    config.url = config.url_ + config.url
  } else {
    config.url = baseUrl + config.url
  }
  return config
}, err => {
  console.log(err)
})

axios.interceptors.response.use(res => {
  // if ('successCode' in res.config) {
  //
  // }
  if (res.status == 200) {
    if (res.data.code == 200) {
      if ((res.config.url.indexOf('login') > -1)) {
        localStorage.setItem('token', res.data.token)
        document.cookie = 'token=' + res.data.token + ';path=/;'
      } else {
      }
    } else if (res.data.code == 401) {
      if (location.hash.indexOf('#/home') + 1) {} else {
        location.hash = '#/home/user'
      }
    } else {
      throw new Error('请求失败');
    }
    res = res.data
  }
  return res
}, err => {
  console.log(err)
})

export default axios
