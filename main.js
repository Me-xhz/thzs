import Vue from 'vue'
import App from './App'
import http from './apis/index.js'
import url from './apis/url.js'
import * as common from './utils/common.js'
import * as tool from './utils/tool.js'
import popup from '@/components/popup.vue'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$URL = url
Vue.prototype.$tool = tool
Vue.prototype.$common = common

Vue.component('popup',popup)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
