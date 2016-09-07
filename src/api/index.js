import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let baseUrl
if (process.env.NODE_ENV==='dev') {
  baseUrl = 'http://172.16.19.89:1234/api/'
}else {
  baseUrl = 'http://cnodejs.org/api/v1/topics'
}
export default {
  getTopics: (params) => {
  	console.log(params)
    return Vue.resource(baseUrl).get(params)
  }
}
