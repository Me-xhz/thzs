<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userOrderDetile/userOrderDetile"],{"0b02":function(t,e,n){},"155a":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{isFail:!1,text2:"",isShow2:!1,text:"是否确认收货",isShow:!1,orderSn:"",orderInfo:{}}},onLoad:function(t){this.orderSn=t.orderSn,this.orderSn&&this.$tool.getRouter(2).showConfig(this.orderSn)},onShow:function(){this.getOrder()},methods:{fail:function(){this.isShow=!1},succer:function(){var e=this;e.$http.getConfirmOrder(data).then(function(r){var o=r.data;if(e.$tool.getRouter(2).hideConfig(),1!=o.success)return e.$common.toast(o.msg),void setTimeout(function(){n.navigateTo()},200);e.getOrder(),console.log(t(o," at pages\\userOrderDetile\\userOrderDetile.vue:87")),e.$common.toast(o.msg)})},succer2:function(){n.navigateBack()},getOrder:function(){var t=this,e={order_sn:t.orderSn};t.$http.getOrder(e).then(function(e){var n=e.data;1==n.success?t.orderInfo=n.result:(t.text2=n.msg,t.isShow2=!0)})},submit:function(){var t=this;t.orderInfo.order_sn;t.text="是否确认提货？",t.isShow=!0}}};e.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},6614:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"702a":function(t,e,n){"use strict";var r=n("0b02"),o=n.n(r);o.a},8845:function(t,e,n){"use strict";n.r(e);var r=n("6614"),o=n("f1ae");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("702a");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},ae0e:function(t,e,n){"use strict";(function(t){n("fae8"),n("921b");r(n("66fd"));var e=r(n("8845"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f1ae:function(t,e,n){"use strict";n.r(e);var r=n("155a"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=o.a}},[["ae0e","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userOrderDetile/userOrderDetile"],{"328c":function(n,t,e){"use strict";e.r(t);var r=e("c53d"),o=e("8628");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("7fb5");var a=e("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},"45d1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{orderSn:"",orderInfo:{}}},onLoad:function(n){this.orderSn=n.orderSn},onShow:function(){this.getOrder()},methods:{getOrder:function(){var t=this,e={order_sn:t.orderSn};t.$http.getOrder(e).then(function(e){var r=e.data;if(1==r.success)t.orderInfo=r.result;else{var o=r.msg,u="确定";t.$common.showModal(o,u,function(t){n.navigateBack({delta:1})})}})},submit:function(){var n=this,t={order_sn:n.orderInfo.order_sn};n.$common.showModal("是否确认提货？","确定",function(e){e.confirm&&n.$http.getConfirmOrder(t).then(function(t){var e=t.data;1==e.success?(n.getOrder(),n.$common.toast(e.msg)):n.$common.toast(e.msg)})})}}};t.default=e}).call(this,e("6e42")["default"])},"7fb5":function(n,t,e){"use strict";var r=e("87de"),o=e.n(r);o.a},8628:function(n,t,e){"use strict";e.r(t);var r=e("45d1"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t["default"]=o.a},"87de":function(n,t,e){},c53d:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o})}},[["fe7a","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
