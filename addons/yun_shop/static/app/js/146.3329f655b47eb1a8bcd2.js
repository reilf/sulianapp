webpackJsonp([146],{D0Q9:function(t,o,e){t.exports=e.p+"static/app/img/o2o_coupon.7ae6412.png"},LOkZ:function(t,o,e){var n=e("SP0J");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("4ced9448",n,!0,{})},SP0J:function(t,o,e){var n=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"\n#open_member[data-v-1b43937e] {\n  background: #fff;\n  min-height: 41.25rem;\n}\n#open_member #content .coupon_box[data-v-1b43937e] {\n    width: 21.5625rem;\n    height: 6.25rem;\n    margin: 1.25rem auto;\n    background-image: url("+n(e("D0Q9"))+");\n    background-repeat: no-repeat;\n    background-size: 100%;\n    color: #ffb84c;\n    font-size: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#open_member #content .coupon_box .coupon_a[data-v-1b43937e] {\n      width: 15.3125rem;\n      padding: 0 1.25rem;\n}\n#open_member #content .coupon_box .coupon_a li[data-v-1b43937e] {\n        line-height: 1.25rem;\n        text-align: left;\n        font-size: 13px;\n}\n#open_member #content .coupon_box .coupon_b[data-v-1b43937e] {\n      width: 6.25rem;\n}\n#open_member #content .coupon_box .coupon_b p[data-v-1b43937e] {\n        font-size: 20px;\n        line-height: 2.25rem;\n}\n#open_member #content .coupon_box .coupon_b p span[data-v-1b43937e] {\n          font-size: 16px;\n}\n#open_member #content .coupon_box .coupon_b button[data-v-1b43937e] {\n        width: 4.25rem;\n        height: 1.625rem;\n        border-radius: 1.875rem;\n        background: #ffb84c;\n        color: #fff;\n        border: none;\n        font-size: 12px;\n}\n",""])},ny3U:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("Tg7E"),a="plugin.hotel.frontend.hotel.couponList.index",i={data:function(){return{loading:!1,allLoaded:!1,goload:!0,isLoadMore:!0,page:1,total_page:0,cupconList:[]}},activated:function(){this.initData(),this.getData()},mounted:function(){},methods:{initData:function(){this.loading=!1,this.allLoaded=!1,this.goload=!0,this.isLoadMore=!0,this.page=1,this.total_page=0,this.cupconList=[]},getData:function(){var t=this;$http.get(a,{hotel_id:this.$route.params.id,page:this.page},"加载中...").then(function(o){1==o.result&&(t.cupconList=o.data.data,t.total_page=o.data.last_page)}).catch(function(t){console.log(t)})},getMoreData:function(){var t=this;if(this.page!=this.total_page)return this.page>=this.total_page?(this.loading=!0,void(this.allLoaded=!0)):(this.page=this.page+1,void $http.get(a,{hotel_id:this.$route.params.id,page:this.page},"加载中...").then(function(o){if(1!=o.result)return t.page=t.page-1,t.loading=!0,t.allLoaded=!0,void(t.isLoadMore=!1);t.loading=!1,t.allLoaded=!1,t.cupconList=t.cupconList.concat(o.data.data)}).catch(function(t){console.log(t)}))},loadTop:function(){this.initData(),this.getData(),this.$refs.coupon_loadmore.onTopLoaded()},loadBottom:function(){this.isLoadMore?(this.getMoreData(this.page),this.$refs.coupon_loadmore.onBottomLoaded()):console.log("没有更多数据")},getCoupon:function(t,o){var e=this;$http.get("plugin.hotel.frontend.hotel.couponGet.index",{coupon_id:t},"领取中...").then(function(t){1==t.result?(e.$set(e.cupconList,o,t.data),n.MessageBox.alert("领取成功")):n.MessageBox.alert(t.msg)}).catch(function(t){console.log(t)})}},components:{cTitle:e("Pexp").a}},c={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"open_member"}},[e("c-title",{attrs:{hide:!1,text:"酒店优惠券"}}),t._v(" "),e("div",{attrs:{id:"content"}},[t.goload?e("mt-loadmore",{ref:"coupon_loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"下拉加载...",bottomLoadingText:"",autoFill:!1,id:"olis"}},[e("div",{staticStyle:{height:"40px"}}),t._v(" "),t._l(t.cupconList,function(o,n){return e("div",{key:n,staticClass:"coupon_box",on:{click:function(e){return t.getCoupon(o.id,n)}}},[e("ul",{staticClass:"coupon_a"},[e("li",[t._v(t._s(o.name))]),t._v(" "),e("li",[t._v("满"+t._s(o.enough)+"元使用")]),t._v(" "),e("li",[t._v("可领取张数："+t._s(o.available_count)+"张")]),t._v(" "),e("li",[t._v("已领取张数："+t._s(o.receive_count)+"张")])]),t._v(" "),e("div",{staticClass:"coupon_b"},[1==o.coupon_method?e("p",[e("span",[t._v("¥")]),t._v(t._s(o.deduct))]):t._e(),t._v(" "),2==o.coupon_method?e("p",[e("span",[t._v(t._s(o.discount))]),t._v("折")]):t._e(),t._v(" "),2==o.received?e("button",{attrs:{type:"button"}},[t._v("立即领取")]):t._e(),t._v(" "),1==o.received?e("button",{attrs:{type:"button"}},[t._v("已领取")]):t._e()])])})],2):t._e()],1)],1)},staticRenderFns:[]};var s=e("VU/8")(i,c,!1,function(t){e("LOkZ")},"data-v-1b43937e",null);o.default=s.exports}});