(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b9e":function(t,e,n){"use strict";var a=n("c167"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a,r,i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Search",{attrs:{id:"search-bar"},on:{search_parameters:t.getEvents}}),n("div",{attrs:{id:"content"}},[n("EventList",{attrs:{id:"event-list",isLoading:this.loading,isEventNull:this.isEventNull,events:this.events},on:{loading:t.isLoading,markerIndex:t.getMarkerIndex}}),n("GoogleMaps",{attrs:{id:"google-map",events:t.events,markerIndex:this.markerIndex}})],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-bar"}},[n("div",{staticStyle:{width:"20%"}},[n("div",{staticClass:"search-design"},[n("span",{staticClass:"fa fa-search icon",on:{click:t.setParameters}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search_parameters.location,expression:"search_parameters.location"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search location"},domProps:{value:t.search_parameters.location},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setParameters(e)},input:function(e){e.target.composing||t.$set(t.search_parameters,"location",e.target.value)}}})])]),n("div",{staticClass:"search-design"},[n("span",{staticClass:"fas fa-calendar-alt icon"}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.search_parameters.date,expression:"search_parameters.date"}],staticClass:"search-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.search_parameters,"date",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"All"}},[t._v("All")]),n("option",{attrs:{value:"Today"}},[t._v("Today")]),n("option",{attrs:{value:"This Week"}},[t._v("This Week")]),n("option",{attrs:{value:"Next Week"}},[t._v("Next Week")])])]),n("div",{staticClass:"search-design"},[n("span",{staticClass:"fa fa-road icon"}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.search_parameters.within,expression:"search_parameters.within"}],staticClass:"search-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.search_parameters,"within",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"5"}},[t._v("5 mi")]),n("option",{attrs:{value:"10"}},[t._v("10 mi")]),n("option",{attrs:{value:"25"}},[t._v("25 mi")]),n("option",{attrs:{value:"50"}},[t._v("50 mi")])])]),n("button",{attrs:{id:"search-button"},on:{click:t.setParameters}},[t._v("Search")])])},c=[],u={name:"Search",data:function(){return{search_parameters:{location:null,date:null,within:null}}},methods:{setParameters:function(){this.$emit("search_parameters",this.search_parameters)}}},d=u,p=(n("5832"),n("2877")),v=Object(p["a"])(d,l,c,!1,null,"528c1714",null),f=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"event-list"}},[this.loading||null!=this.eventList||this.nullEvent?this.loading?n("div",{staticClass:"loader"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}})])]):!this.loading&&this.nullEvent?n("h3",{staticClass:"no-results"},[t._v("\n        Could not find events for the location or postal code you searched for.\n    ")]):n("ul",{staticStyle:{width:"100%"}},t._l(t.eventList,function(e,a){return n("li",{key:a,class:{active:a==t.active_item},attrs:{item:e},on:{click:function(e){t.setMarkerIndex(a),t.setItemActive(a)}}},[n("h4",[t._v(t._s(e.title))]),n("p",[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "+t._s(e.venue_address)+", "+t._s(e.city_name)+", "+t._s(e.region_abbr))]),n("p",[n("i",{staticClass:"fas fa-calendar-day"}),t._v(" "+t._s(t._f("formatDate")(e.start_time,e.start_time)))]),n("p",[n("i",{staticClass:"fas fa-clock"}),t._v(" "+t._s(t._f("formatTime")(e.start_time,e.start_time)))])])}),0):n("h3",{staticClass:"no-results"},[t._v("\n        Search for a location or postal code to obtain results.\n    ")])])},m=[],g={name:"EventList",props:{events:Array,isLoading:Boolean,isEventNull:Boolean},data:function(){return{loading:null,nullEvent:null,eventList:null,active_item:null}},methods:{setMarkerIndex:function(t){this.$emit("markerIndex",t)},setItemActive:function(t){this.active_item=t}},filters:{formatDate:function(t){var e=new Date(t);return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},formatTime:function(t){var e=new Date(t),n=e.getHours(),a=e.getMinutes();return(n>12?n-12:12)+":"+(a<10?"0"+a:a)+(n<12?" AM":" PM")}},watch:{events:function(){this.eventList=this.events,this.$emit("loading",!1)},isLoading:function(){this.loading=this.isLoading,this.active_item=null},isEventNull:function(){this.nullEvent=this.isEventNull}}},_=g,w=(n("3b9e"),Object(p["a"])(_,h,m,!1,null,"48e81187",null)),k=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"google-map"}})},b=[],x=(n("96cf"),n("3b8d")),E=(n("c5f6"),n("d847"),Object({NODE_ENV:"production",BASE_URL:"/"}).google_maps_api_key),C="gmapsCallback",S=!!window.google,M=new Promise(function(t,e){a=t,r=e});function O(){if(S)return M;S=!0,window[C]=function(){return a(window.google)};var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://maps.googleapis.com/maps/api/js?key=".concat(E,"&callback=").concat(C),t.onerror=r,document.querySelector("head").appendChild(t);var e=document.createElement("script");return e.defer=!0,e.src="https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min.js",e.onerror=r,document.querySelector("head").appendChild(e),M}var j={name:"GoogleMaps",props:{events:Array,markerIndex:Number},data:function(){return{google:null,map:null,locations:[],infoWindow:null}},mounted:function(){var t=Object(x["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:this.google=t.sent,e=new this.google.maps.Geocoder,this.map=new this.google.maps.Map(this.$el,{zoom:4}),e.geocode({address:"USA"},function(t,e){if("OK"!==e||!t[0])throw new Error(e);n.map.setCenter(t[0].geometry.location),n.map.fitBounds(t[0].geometry.viewport)}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}(),watch:{events:function(){var t=this;this.infoWindow=new this.google.maps.InfoWindow;var e=new OverlappingMarkerSpiderfier(this.map,{markersWontMove:!0,markersWontHide:!0,basicFormatEvents:!0});if(null!==this.locations){for(var n=0;n<this.locations.length;n++)this.locations[n].setMap(null);this.locations=[]}var a=new this.google.maps.LatLngBounds,r=new this.google.maps.InfoWindow;this.locations=this.events.map(function(n){var i=new t.google.maps.Marker({position:{lat:parseInt(n.latitude,10),lng:parseInt(n.longitude,10)},title:n.title});return i.addListener("spider_click",function(){r.setContent(n.description||"No description."),r.open(this.map,i)}),a.extend(i.position),e.addMarker(i),i}),this.map.fitBounds(a)},markerIndex:function(){var t=this.locations[this.markerIndex];this.google.maps.event.trigger(t,"spider_click")}}},I=j,N=(n("f1a2"),Object(p["a"])(I,y,b,!1,null,"25a47589",null)),L=N.exports,P=(n("f576"),n("bc3a")),A=n.n(P),$="https://cors-anywhere.herokuapp.com/",W=Object({NODE_ENV:"production",BASE_URL:"/"}).eventful_api_key,D="".concat($,"http://api.eventful.com/json/events/search?app_key=").concat(W);function T(t){var e=t.location,n=t.date,a=t.within;if(null==n||""==n){var r=new Date,i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();n=s+"/"+i+"/"+o}return null!=a&&""!=a||(a=5),A.a.get("".concat(D,"\n    &location=").concat(e,"\n    &date=").concat(n,"\n    &within=").concat(a,"\n    &page_size=25\n    &sort_order=date"))}var B={getEvents:T},G={name:"app",components:{Search:f,EventList:k,GoogleMaps:L},data:function(){return{loading:null,events:null,isEventNull:null,markerIndex:null}},methods:{getEvents:function(t){var e=this;this.loading=!0,B.getEvents(t).then(function(t){try{console.log(t.data),e.events=t.data.events.event,e.isEventNull=!1}catch(n){console.log(n),e.loading=!1,e.isEventNull=!0}})},isLoading:function(t){this.loading=t},getMarkerIndex:function(t){this.markerIndex=t}}},R=G,F=(n("5c0b"),Object(p["a"])(R,s,o,!1,null,null,null)),U=F.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(U)}}).$mount("#app")},5832:function(t,e,n){"use strict";var a=n("b9d3"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"7e8a":function(t,e,n){},b9d3:function(t,e,n){},c167:function(t,e,n){},d847:function(t,e){},f1a2:function(t,e,n){"use strict";var a=n("7e8a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.601ac8b4.js.map