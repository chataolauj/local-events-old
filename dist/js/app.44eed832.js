(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3b9e":function(e,t,n){"use strict";var a=n("c167"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a,r,i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Search",{attrs:{id:"search-bar"},on:{search_parameters:e.getEvents}}),n("div",{attrs:{id:"content"}},[n("EventList",{attrs:{id:"event-list",isLoading:this.loading,isEventNull:this.isEventNull,events:this.events},on:{loading:e.isLoading,markerIndex:e.getMarkerIndex}}),n("GoogleMaps",{attrs:{id:"google-map",events:e.events,markerIndex:this.markerIndex}})],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"search-bar"}},[n("div",{staticStyle:{width:"20%"}},[n("div",{staticClass:"search-design"},[n("span",{staticClass:"fa fa-search icon",on:{click:e.setParameters}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search_parameters.location,expression:"search_parameters.location"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search location"},domProps:{value:e.search_parameters.location},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setParameters(t)},input:function(t){t.target.composing||e.$set(e.search_parameters,"location",t.target.value)}}})])]),n("div",{staticClass:"search-design"},[n("span",{staticClass:"fas fa-calendar-alt icon"}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.search_parameters.date,expression:"search_parameters.date"}],staticClass:"search-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.search_parameters,"date",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"All"}},[e._v("All")]),n("option",{attrs:{value:"Today"}},[e._v("Today")]),n("option",{attrs:{value:"This Week"}},[e._v("This Week")]),n("option",{attrs:{value:"Next Week"}},[e._v("Next Week")])])]),n("div",{staticClass:"search-design"},[n("span",{staticClass:"fa fa-road icon"}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.search_parameters.within,expression:"search_parameters.within"}],staticClass:"search-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.search_parameters,"within",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"5"}},[e._v("5 mi")]),n("option",{attrs:{value:"10"}},[e._v("10 mi")]),n("option",{attrs:{value:"25"}},[e._v("25 mi")]),n("option",{attrs:{value:"50"}},[e._v("50 mi")])])]),n("button",{attrs:{id:"search-button"},on:{click:e.setParameters}},[e._v("Search")])])},c=[],u={name:"Search",data:function(){return{search_parameters:{location:null,date:null,within:null}}},methods:{setParameters:function(){this.$emit("search_parameters",this.search_parameters)}}},d=u,p=(n("5832"),n("2877")),v=Object(p["a"])(d,l,c,!1,null,"528c1714",null),f=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"event-list"}},[this.loading||null!=this.eventList||this.nullEvent?this.loading?n("div",{staticClass:"loader"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}})])]):!this.loading&&this.nullEvent?n("h3",{staticClass:"no-results"},[e._v("\n        Could not find events for the location or postal code you searched for.\n    ")]):n("ul",{staticStyle:{width:"100%"}},e._l(e.eventList,function(t,a){return n("li",{key:a,class:{active:a==e.active_item},attrs:{item:t},on:{click:function(t){e.setMarkerIndex(a),e.setItemActive(a)}}},[n("h4",[e._v(e._s(t.title))]),n("p",[n("i",{staticClass:"fas fa-map-marker-alt"}),e._v(" "+e._s(t.venue_address)+", "+e._s(t.city_name)+", "+e._s(t.region_abbr))]),n("p",[n("i",{staticClass:"fas fa-calendar-day"}),e._v(" "+e._s(e._f("formatDate")(t.start_time,t.start_time)))]),n("p",[n("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(e._f("formatTime")(t.start_time,t.start_time)))])])}),0):n("h3",{staticClass:"no-results"},[e._v("\n        Search for a location or postal code to obtain results.\n    ")])])},m=[],g={name:"EventList",props:{events:Array,isLoading:Boolean,isEventNull:Boolean},data:function(){return{loading:null,nullEvent:null,eventList:null,active_item:null}},methods:{setMarkerIndex:function(e){this.$emit("markerIndex",e)},setItemActive:function(e){this.active_item=e}},filters:{formatDate:function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()},formatTime:function(e){var t=new Date(e),n=t.getHours(),a=t.getMinutes();return(n>12?n-12:12)+":"+(a<10?"0"+a:a)+(n<12?" AM":" PM")}},watch:{events:function(){this.eventList=this.events,this.$emit("loading",!1)},isLoading:function(){this.loading=this.isLoading,this.active_item=null},isEventNull:function(){this.nullEvent=this.isEventNull}}},_=g,k=(n("3b9e"),Object(p["a"])(_,h,m,!1,null,"48e81187",null)),w=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"google-map"}})},b=[],x=(n("96cf"),n("3b8d")),E=(n("c5f6"),n("d847")),C=n.n(E),S=C.a.google_maps_api_key,M="gmapsCallback",I=!!window.google,j=new Promise(function(e,t){a=e,r=t});function O(){if(I)return j;I=!0,window[M]=function(){return a(window.google)};var e=document.createElement("script");e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=".concat(S,"&callback=").concat(M),e.onerror=r,document.querySelector("head").appendChild(e);var t=document.createElement("script");return t.defer=!0,t.src="https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min.js",t.onerror=r,document.querySelector("head").appendChild(t),j}var L={name:"GoogleMaps",props:{events:Array,markerIndex:Number},data:function(){return{google:null,map:null,locations:[],infoWindow:null}},mounted:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:this.google=e.sent,t=new this.google.maps.Geocoder,this.map=new this.google.maps.Map(this.$el,{zoom:4}),t.geocode({address:"USA"},function(e,t){if("OK"!==t||!e[0])throw new Error(t);n.map.setCenter(e[0].geometry.location),n.map.fitBounds(e[0].geometry.viewport)}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}(),watch:{events:function(){var e=this;this.infoWindow=new this.google.maps.InfoWindow;var t=new OverlappingMarkerSpiderfier(this.map,{markersWontMove:!0,markersWontHide:!0,basicFormatEvents:!0});if(null!==this.locations){for(var n=0;n<this.locations.length;n++)this.locations[n].setMap(null);this.locations=[]}var a=new this.google.maps.LatLngBounds,r=new this.google.maps.InfoWindow;this.locations=this.events.map(function(n){var i=new e.google.maps.Marker({position:{lat:parseInt(n.latitude,10),lng:parseInt(n.longitude,10)},title:n.title});return i.addListener("spider_click",function(){r.setContent(n.description||"No description."),r.open(this.map,i)}),a.extend(i.position),t.addMarker(i),i}),this.map.fitBounds(a)},markerIndex:function(){var e=this.locations[this.markerIndex];this.google.maps.event.trigger(e,"spider_click")}}},N=L,P=(n("f1a2"),Object(p["a"])(N,y,b,!1,null,"25a47589",null)),W=P.exports,$=(n("f576"),n("bc3a")),A=n.n($),T="https://cors-anywhere.herokuapp.com/",D=C.a.eventful_api_key,B="".concat(T,"http://api.eventful.com/json/events/search?app_key=").concat(D);function G(e){var t=e.location,n=e.date,a=e.within;if(null==n||""==n){var r=new Date,i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();n=s+"/"+i+"/"+o}return null!=a&&""!=a||(a=5),A.a.get("".concat(B,"\n    &location=").concat(t,"\n    &date=").concat(n,"\n    &within=").concat(a,"\n    &page_size=25\n    &sort_order=date"))}var q={getEvents:G},z={name:"app",components:{Search:f,EventList:w,GoogleMaps:W},data:function(){return{loading:null,events:null,isEventNull:null,markerIndex:null}},methods:{getEvents:function(e){var t=this;this.loading=!0,q.getEvents(e).then(function(e){try{console.log(e.data),t.events=e.data.events.event,t.isEventNull=!1}catch(n){console.log(n),t.loading=!1,t.isEventNull=!0}})},isLoading:function(e){this.loading=e},getMarkerIndex:function(e){this.markerIndex=e}}},Y=z,F=(n("5c0b"),Object(p["a"])(Y,s,o,!1,null,null,null)),R=F.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(R)}}).$mount("#app")},5832:function(e,t,n){"use strict";var a=n("b9d3"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"7e8a":function(e,t,n){},b9d3:function(e,t,n){},c167:function(e,t,n){},d847:function(e,t){e.exports={google_maps_api_key:"AIzaSyCWYuT3NiZvt_YvPbhfLlR05z9qjWdEgUk",eventful_api_key:"N8GSsKvrnSqtbkGg"}},f1a2:function(e,t,n){"use strict";var a=n("7e8a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.44eed832.js.map