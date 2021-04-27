(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"33bc":function(e,t,n){"use strict";var a=n("fb3c"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Search",{attrs:{id:"search-bar"}}),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"hover-panel"}},[n("transition",{attrs:{name:"slide-out"}},[n("EventList",{directives:[{name:"show",rawName:"v-show",value:e.showPanel,expression:"showPanel"}]})],1),e.loadingMore?n("div",{staticClass:"load-more-overlay"},[n("CircleLoader",{attrs:{width:100}})],1):e._e(),n("button",{class:["toggle-button","fas",e.showPanel&&!e.isWindowSmall?"fa-caret-left":e.showPanel||e.isWindowSmall?e.showPanel&&e.isWindowSmall?"fa-caret-down":"fa-caret-up":"fa-caret-right"],attrs:{disabled:e.loadingMore,"aria-label":"Collapse side panel"},on:{click:function(t){e.showPanel=!e.showPanel}}})],1),n("Mapbox")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"search-bar"}},[n("div",{attrs:{id:"autocomplete"}},[n("div",{staticClass:"search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search location",required:""},domProps:{value:e.location},on:{focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setCoords(e.acResults[0])},input:function(t){t.target.composing||(e.location=t.target.value)}}}),this.location.length>2?n("button",{staticClass:"far fa-times-circle icon",on:{mousedown:e.clearLocation}}):e._e(),n("button",{staticClass:"fa fa-search icon",on:{click:e.getEvents}})]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isFocused&&this.acResults.length,expression:"isFocused && this.acResults.length"}],attrs:{id:"ac-list"}},e._l(e.acResults,(function(t,a){return n("li",{key:a,attrs:{item:t},on:{mousedown:function(n){return e.setCoords(t)}}},[e._v(" "+e._s(t.place_name)+" ")])})),0)])])},i=[],c=(n("96cf"),n("1da1")),l=(n("d3b7"),n("2c50")),u=n.n(l),d=u()({accessToken:"pk.eyJ1IjoiY2hhdGFvbGF1aiIsImEiOiJja2tnb2x1c2owOTMxMm5wdTZoa3BycjdqIn0.DMAWmKQr6vVTjcTNJJ0sew"});function f(e){return new Promise((function(t,n){d.forwardGeocode({query:e,limit:5,types:["place","region","postcode","country","address","locality","district"]}).send().then((function(e){t(e)}),(function(e){n(e)}))}))}var m={name:"Search",data:function(){return{location:"",coords:{},isFocused:!1,isSelected:!1,acResults:[],timeout:null}},methods:{searchLocation:function(){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f(e.location).then((function(t){e.acResults=t.body.features,console.log(t)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),300)},setCoords:function(e){this.coords={lng:e.center[0],lat:e.center[1]},this.isSelected=!0,this.acResults=[],this.getEvents()},clearLocation:function(){this.location="",this.acResults=[]},getEvents:function(){this.$store.dispatch("getEvents",this.coords)}},watch:{location:function(){this.location.length>2&&!this.isSelected?this.searchLocation():(this.acResults=[],this.isSelected=!1)}}},v=m,p=(n("77a8"),n("2877")),h=Object(p["a"])(v,r,i,!1,null,"f9815d38",null),g=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"no-scroll":e.loadingMore},attrs:{id:"event-list"}},[e.loading||e.events.length||!e.isEventsNull?e.loading?n("CircleLoader",{attrs:{width:100}}):!e.loading&&e.isEventsNull?n("h3",{staticClass:"no-results"},[e._v(" Could not find events based on the search criteria(s). ")]):n("ul",[e._l(e.events,(function(t,a){return n("li",{key:a,class:{active:a==e.activeItem},attrs:{item:t},on:{click:function(t){return e.setActive(a)}}},[n("h4",[e._v(e._s(t.name))]),n("p",[n("i",{staticClass:"fas fa-map-marker-alt"}),e._v(" "+e._s(t._embedded.venues[0].address.line1)+", "+e._s(t._embedded.venues[0].city.name)+", "+e._s(t._embedded.venues[0].state.stateCode)+", "+e._s(t._embedded.venues[0].postalCode)+" ")]),n("p",[n("i",{staticClass:"fas fa-calendar"}),e._v(" "+e._s(e._f("formatDate")(t.dates.start.dateTime,t.start_time))+" ")]),n("p",[n("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(e._f("formatTime")(t.dates.start.dateTime,t.stop_time))+" ")])])})),n("button",{staticClass:"load-more-button",on:{click:function(t){return e.loadMoreEvents()}}},[e._v(" Load More ")])],2):n("h3",{staticClass:"no-results"},[e._v(" Search for a location or postal code to obtain results. ")])],1)},w=[],k=(n("ac1f"),n("1276"),n("5530")),y=n("2f62"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader",style:{width:e.width+"px"}},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}})])])},_=[],M=(n("a9e3"),{name:"CircleLoader",props:{width:Number}}),E=M,P=(n("8d96"),Object(p["a"])(E,x,_,!1,null,"6566ea37",null)),j=P.exports,O={name:"EventList",components:{CircleLoader:j},computed:Object(k["a"])({},Object(y["b"])(["loading","events","isEventsNull","activeItem","loadingMore"])),methods:{setActive:function(e){this.$store.dispatch("setActive",e)},loadMoreEvents:function(){this.$store.dispatch("loadMoreEvents")}},filters:{formatDate:function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()},formatTime:function(e){var t=new Date(e),n=t.getHours(),a=t.getMinutes(),o=t.toLocaleString("en",{timeZoneName:"short"}).split(" ").pop();return(n>12?n-12:0==n?12:n)+":"+(a<10?"0"+a:a)+(n<12?" a.m.":" p.m.")+" "+o}}},L=O,I=(n("33bc"),Object(p["a"])(L,b,w,!1,null,"6cf8f928",null)),C=I.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mapbox"}})},T=[],N=(n("4160"),n("d81d"),n("b0c0"),n("159b"),n("ddb0"),n("3835")),R=n("b85c"),A=n("e192"),F=n.n(A),D=(n("ac6d"),{name:"Mapbox",data:function(){return{accessToken:"pk.eyJ1IjoiY2hhdGFvbGF1aiIsImEiOiJja2tnb2x1c2owOTMxMm5wdTZoa3BycjdqIn0.DMAWmKQr6vVTjcTNJJ0sew",map:null,markers:[]}},mounted:function(){F.a.accessToken=this.accessToken,this.map=new F.a.Map({container:"mapbox",style:"mapbox://styles/mapbox/streets-v11",center:[-100.88415824784241,39.860819332920386],zoom:3}),this.map.addControl(new F.a.NavigationControl,"top-right"),this.map.addControl(new F.a.GeolocateControl({positionOptions:{enableHighAcuracy:!0},trackUserLocation:!0})),this.events.length&&this.addMarkers()},computed:Object(k["a"])({},Object(y["b"])(["events","previousItem","activeItem","markerIndex"])),methods:{addMarkers:function(){var e=this;if(this.markers.length){var t,n=Object(R["a"])(this.markers);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.remove()}}catch(c){n.e(c)}finally{n.f()}}var o,s=new F.a.LngLatBounds,r=Object(R["a"])(this.events.entries());try{var i=function(){var t=Object(N["a"])(o.value,2),n=t[0],a=t[1],r=new F.a.Popup({className:"marker-popup"}).setHTML("<h1>".concat(a.name,"</h1>"));r.on("open",(function(){e.$store.commit("setActiveItem",n)}));var i=(new F.a.Marker).setLngLat([parseFloat(a._embedded.venues[0].location.longitude),parseFloat(a._embedded.venues[0].location.latitude)]).setPopup(r).addTo(e.map);s.extend(i.getLngLat()),e.markers.push(i),e.map.fitBounds(s,{padding:50})};for(r.s();!(o=r.n()).done;)i()}catch(c){r.e(c)}finally{r.f()}}},watch:{events:function(){this.addMarkers()},markerIndex:function(){this.markers.forEach((function(e){e.getPopup().isOpen()&&e.togglePopup()}));var e=this.markers[this.markerIndex];e.togglePopup()}}}),$=D,J=(n("5ca9"),Object(p["a"])($,S,T,!1,null,null,null)),W=J.exports,G={name:"app",components:{Search:g,EventList:C,CircleLoader:j,Mapbox:W},data:function(){return{isWindowSmall:null,showPanel:!0}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize),e.onResize()}))},computed:{loading:function(){return this.$store.state.loading},loadingMore:function(){return this.$store.state.loadingMore}},methods:{onResize:function(){window.innerWidth<=640?this.isWindowSmall=!0:this.isWindowSmall=!1}},watch:{loading:function(){this.showPanel=!0}}},z=G,B=(n("5c0b"),Object(p["a"])(z,o,s,!1,null,null,null)),q=B.exports,Y=(n("4de4"),n("2909")),Z=(n("99af"),n("4d90"),n("bc3a")),H=n.n(Z),K=n("ead3"),U="TKSXVkU56ad38PDMkGNkZvEMRfUDcmF0",V="https://app.ticketmaster.com/discovery/v2/events.json?apikey=".concat(U);function Q(e){var t=e.coords,n=e.date,a=e.radius,o=e.pageNumber,s=K["a"].encode(t.lat,t.lng,9);if(null==n||""==n){var r=new Date,i=String(r.getDate()).padStart(2,"0"),c=String(r.getMonth()+1).padStart(2,"0"),l=r.getFullYear();n=c+"/"+i+"/"+l}return null!=a&&""!=a||(a=25),H.a.get("".concat(V,"&geoPoint=").concat(s,"&radius=").concat(a,"&page=").concat(o))}function X(){var e=ne.state.searchParams,t=e.coords,n=e.date,a=e.radius,o=e.pageNumber,s=K["a"].encode(t.lat,t.lng,9);return o++,null!=a&&""!=a||(a=25),ne.commit("setSearchParams",{coords:t,date:n,radius:a,pageNumber:o}),H.a.get("".concat(V,"&geoPoint=").concat(s,"&radius=").concat(a,"&page=").concat(o))}var ee={getEvents:Q,loadMoreEvents:X};a["a"].use(y["a"]);var te=new y["a"].Store({state:{searchParams:{},loading:!1,events:[],isEventsNull:!0,maxPage:null,activeItem:null,markerIndex:null,loadingMore:!1},mutations:{setSearchParams:function(e,t){e.searchParams=t},setLoading:function(e,t){e.loading=t},setEvents:function(e,t){e.events=t},setIsEventsNull:function(e,t){e.isEventsNull=t},setMaxPage:function(e,t){e.maxPage=t},setActiveItem:function(e,t){e.activeItem=t},setMarkerIndex:function(e,t){e.markerIndex=t},setLoadingMore:function(e,t){e.loadingMore=t}},actions:{filterEvents:function(e,t){return new Promise((function(e,n){Array.isArray(t)||n("Invalid argument: is not of type Array.");var a=t.filter((function(e){var t=new Date,n=new Date(e.stop_time);if(n>=t||null==n)return e}));e(a)}))},getEvents:function(e,t){var n=e.state,a=e.commit;a("setLoading",!0),a("setActiveItem",null),a("setMarkerIndex",null);var o={coords:t,radius:"",date:"",pageNumber:0};a("setSearchParams",o),ee.getEvents(o).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a("setLoading",!1),a("setMaxPage",t.data.page.totalPages),console.log(t.data),a("setEvents",t.data._embedded.events),n.events.length?a("setIsEventsNull",!1):a("setIsEventsNull",!0)}catch(o){console.log(o),a("setLoading",!1),a("setIsEventsNull",!0)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),a("setLoading",!1),a("setIsEventsNull",!0)}))},loadMoreEvents:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,a=e.commit,a("setLoadingMore",!0),!(n.searchParams.pageNumber<n.maxPage)){t.next=5;break}return t.next=5,ee.loadMoreEvents().then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.data),(o=n.events).push.apply(o,Object(Y["a"])(t.data._embedded.events)),setTimeout((function(){a("setLoadingMore",!1)}),2e3);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),setTimeout((function(){a("setLoadingMore",!1)}),2e3)}));case 5:a("setLoadingMore",!1);case 6:case"end":return t.stop()}}),t)})))()},setActive:function(e,t){var n=e.commit;n("setActiveItem",t),n("setMarkerIndex",t)}},getters:{}}),ne=te;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(q)},store:ne}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"5ca9":function(e,t,n){"use strict";var a=n("5d37"),o=n.n(a);o.a},"5d37":function(e,t,n){},6655:function(e,t,n){},"77a8":function(e,t,n){"use strict";var a=n("ceb6"),o=n.n(a);o.a},"8d96":function(e,t,n){"use strict";var a=n("6655"),o=n.n(a);o.a},"9c0c":function(e,t,n){},ceb6:function(e,t,n){},fb3c:function(e,t,n){}});
//# sourceMappingURL=app.bd4d8375.js.map