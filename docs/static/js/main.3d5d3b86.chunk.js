(this["webpackJsonptravel-photos"]=this["webpackJsonptravel-photos"]||[]).push([[1],{12:function(t,e,a){"use strict";a.d(e,"h",(function(){return w})),a.d(e,"e",(function(){return x})),a.d(e,"a",(function(){return N})),a.d(e,"b",(function(){return P})),a.d(e,"g",(function(){return A})),a.d(e,"d",(function(){return E})),a.d(e,"c",(function(){return W})),a.d(e,"i",(function(){return T})),a.d(e,"f",(function(){return D}));var n=a(4),r=a(0),o=a.n(r),c=a(2),i=a(1),s=a(13),u=a(3),l=a(8),d=a(40),p=a(62),h=a(37),b="travel_photos",f=function(){var t=Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem(b);case 2:return e=t.sent,e=JSON.parse(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem(b,JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:if(null!==(e=t.sent)){t.next=7;break}return e=h,t.next=7,m(e);case 7:return t.abrupt("return",{data:e,success:!0});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(o.a.mark((function t(e){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(n.a)(Object(n.a)({},e),{},{id:Object(p.a)()}),t.next=3,f();case 3:return r=t.sent,m(Object(n.a)(Object(n.a)({},r),{},{collections:[].concat(Object(l.a)(r.collections),[a])})),t.abrupt("return",{data:a,success:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(o.a.mark((function t(e){var a,r,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.collection,r=e.photos,c=Object(n.a)(Object(n.a)({},a),{},{photos:[].concat(Object(l.a)(a.photos),Object(l.a)(r))}),t.next=4,f();case 4:return i=t.sent,m(Object(n.a)(Object(n.a)({},i),{},{collections:i.collections.map((function(t){return t.id===c.id?c:t}))})),t.abrupt("return",{data:c,success:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(o.a.mark((function t(e){var a,n,r,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],n=Object(u.a)(e),t.prev=2,n.s();case 4:if((r=n.n()).done){t.next=12;break}return c=r.value,t.next=8,v(c);case 8:i=t.sent,a.push(i.data);case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:return t.abrupt("return",{data:a,success:!0});case 21:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(o.a.mark((function t(e){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.latitude,n=e.longitude,t.abrupt("return",new Promise(function(){var t=Object(c.a)(o.a.mark((function t(e,r){var c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://nominatim.openstreetmap.org/reverse?lat=".concat(a,"&lon=").concat(n,"&format=json"));case 2:return c=t.sent,t.next=5,c.json();case 5:i=t.sent,e(i);case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var r={id:Object(p.a)(),url:e},i=new Image;i.onload=Object(c.a)(o.a.mark((function a(){var c,i,s,u,l,p,h,b,f,m,g,O,j,y,v;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.parse(e);case 2:if(a.t0=a.sent,a.t0){a.next=5;break}a.t0={};case 5:if(c=a.t0,i=c.CreateDate,s=c.ImageHeight,u=c.ImageWidth,l=c.latitude,p=c.longitude,!l||!p){a.next=19;break}return a.next=14,_({latitude:l,longitude:p});case 14:h=a.sent,b=[],f="",h&&(m=h.address,g=m.city,O=m.country,j=m.suburb,y=m.town,g?v=g:y&&(v=y),j&&v!==j&&b.push(j),v&&b.push(v),O&&b.push(O),f=b.join(", ")),r=Object(n.a)(Object(n.a)({},r),{},{created:i,latitude:l,location:h,longitude:p,origHeight:s,origWidth:u,name:f});case 19:t({data:r,success:!0});case 20:case"end":return a.stop()}}),a)}))),i.src=e})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){return Object(i.useContext)(s.b)},x=function(){var t=w().dispatch;return function(){var e=Object(c.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,t({payload:a.data,type:s.a.SET_INITIAL_DATA});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},I=function(t,e){var a=t.collections.byId[e];if(a)return Object(n.a)(Object(n.a)({},a),{},{photos:a.photos.map((function(e){return t.photos.byId[e]}))})},N=function(t){var e=w().state;return I(e,t)},P=function(){var t=w().state;return t.collections.allIds.map((function(e){return I(t,e)}))},A=function(t){return w().state.photos.byId[t]},E=function(){return function(){var t=Object(c.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(){var t=w().dispatch;return function(){var e=Object(c.a)(o.a.mark((function e(a){var r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.collection,c=a.photos,e.next=3,O(Object(n.a)(Object(n.a)({},r),{},{photos:c}));case 3:i=e.sent,t({payload:i.data,type:s.a.CREATE_COLLECTION});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var t=w(),e=t.dispatch,a=t.state;return function(){var t=Object(c.a)(o.a.mark((function t(r,c){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(Object(n.a)(Object(n.a)(Object(n.a)({},a.collections.byId[r.id]),r),{},{photos:c}));case 2:i=t.sent,e({payload:i.data,type:s.a.UPDATE_COLLECTION});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},D=function(){var t=w(),e=t.dispatch,a=t.state;return[Object(i.useMemo)((function(){return a.mapPosition}),[a.mapPosition]),function(t){e({payload:t,type:s.a.SET_MAP_POSITION})}]}},13:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return p}));var n=a(6),r=a(14),o=a(8),c=a(4),i=a(1),s=a(5),u={CREATE_COLLECTION:"createCollection",SET_INITIAL_DATA:"setInitialData",SET_MAP_POSITION:"setMapPosition",SET_ROUTES_DATA:"setRoutesData",UPDATE_COLLECTION:"updateCollection"},l={collections:{allIds:[],byId:[]},routesData:{current:null,previous:null},isLoading:!0,mapPosition:{bounds:null,center:null,zoom:null},photos:{allIds:[],byId:[]}},d=function(t,e){switch(e.type){case u.CREATE_COLLECTION:return function(t,e){var a={},n=e.photos.map((function(t){return a[t.id]=t,t.id}));return Object(c.a)(Object(c.a)({},t),{},{collections:{allIds:[].concat(Object(o.a)(t.collections.allIds),[e.id]),byId:Object(c.a)(Object(c.a)({},t.collections.byId),{},Object(r.a)({},e.id,Object(c.a)(Object(c.a)({},e),{},{photos:n})))},photos:{allIds:[].concat(Object(o.a)(t.photos.allIds),Object(o.a)(n)),byId:Object(c.a)(Object(c.a)({},t.photos.byId),a)}})}(t,e.payload);case u.SET_ROUTES_DATA:return function(t,e){return Object(c.a)(Object(c.a)({},t),{},{routesData:Object(c.a)(Object(c.a)({},t.routesData),e)})}(t,e.payload);case u.SET_INITIAL_DATA:return function(t,e){var a=e.collections,n=[],r=[],o={},i={};return a.forEach((function(t){n.push(t.id),o[t.id]=Object(c.a)(Object(c.a)({},t),{},{photos:t.photos.map((function(t){return t.id}))}),t.photos.forEach((function(t){r.push(t.id),i[t.id]=t}))})),Object(c.a)(Object(c.a)({},t),{},{collections:{allIds:n,byId:o},isLoading:!1,photos:{allIds:r,byId:i}})}(t,e.payload);case u.SET_MAP_POSITION:return function(t,e){return Object(c.a)(Object(c.a)({},t),{},{mapPosition:e})}(t,e.payload);case u.UPDATE_COLLECTION:return function(t,e){var a={},n=e.photos.map((function(t){return a[t.id]=t,t.id}));return Object(c.a)(Object(c.a)({},t),{},{collections:Object(c.a)(Object(c.a)({},t.collections),{},{byId:Object(c.a)(Object(c.a)({},t.collections.byId),{},Object(r.a)({},e.id,e))}),photos:{allIds:new Set([].concat(Object(o.a)(t.photos.allIds),Object(o.a)(n))),byId:Object(c.a)(Object(c.a)({},t.photos.byId),a)}})}(t,e.payload);default:throw new Error}},p=Object(i.createContext)(l),h=function(t){var e=t.children,a=Object(i.useReducer)(d,l),r=Object(n.a)(a,2),o=r[0],c=r[1];return Object(s.jsx)(p.Provider,{value:{dispatch:c,state:o},children:e})};e.c=h},21:function(t,e,a){"use strict";var n=a(12);a.d(e,"a",(function(){return n.a})),a.d(e,"b",(function(){return n.b})),a.d(e,"c",(function(){return n.c})),a.d(e,"d",(function(){return n.e})),a.d(e,"e",(function(){return n.f})),a.d(e,"f",(function(){return n.g})),a.d(e,"g",(function(){return n.h})),a.d(e,"h",(function(){return n.i}))},32:function(t,e,a){"use strict";a(1),a(49);var n=a(5),r=function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("svg",{className:"circle",viewBox:"25 25 50 50",children:Object(n.jsx)("circle",{className:"path",cx:"50",cy:"50",r:"15",fill:"none",strokeMiterlimit:"10",strokeWidth:"3"})})})})};e.a=r},37:function(t){t.exports=JSON.parse('{"collections":[{"id":"e602c162-33da-492a-9a95-f19ed7ce5735","name":"Perth 2019","photos":[{"id":"3f010189-2855-4dde-921e-47a7df1761cc","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845001/travel_photos/image1.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845001/travel_photos/image1.jpg","orientation":"landscape","created":"2019-11-19T21:58:52.000Z","latitude":-31.997447972222222,"location":{"place_id":95716044,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":24349503,"lat":"-31.9985805","lon":"115.5429329","display_name":"Forrest Avenue, Rottnest Island, Kingstown, City Of Cockburn, Western Australia, 6161, Australia","address":{"road":"Forrest Avenue","suburb":"Rottnest Island","village":"Kingstown","municipality":"City Of Cockburn","state":"Western Australia","postcode":"6161","country":"Australia","country_code":"au"},"boundingbox":["-31.9991279","-31.9985805","115.5429329","115.5432424"]},"longitude":115.543868,"origHeight":2112,"origWidth":4608,"name":"Rottnest Island, Australia"},{"id":"46c78a04-a1ee-4d62-b0c2-48d7be84c904","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845010/travel_photos/image2.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845010/travel_photos/image2.jpg","orientation":"landscape","created":"2019-11-20T00:23:08.000Z","latitude":-32.01857197222222,"location":{"place_id":95554124,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":24349619,"lat":"-32.018544426936124","lon":"115.49357055826945","display_name":"Karlak Boodjar Road, Rottnest Island, City Of Cockburn, Western Australia, 6161, Australia","address":{"road":"Karlak Boodjar Road","suburb":"Rottnest Island","municipality":"City Of Cockburn","state":"Western Australia","postcode":"6161","country":"Australia","country_code":"au"},"boundingbox":["-32.0185888","-32.0156992","115.4935076","115.4977125"]},"longitude":115.49358997222222,"origHeight":2112,"origWidth":4608,"name":"Rottnest Island, Australia"},{"id":"8d88c735-9bc6-432a-8994-24e5ae3c05e4","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845006/travel_photos/image3.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845006/travel_photos/image3.jpg","orientation":"landscape","created":"2019-11-20T00:57:37.000Z","latitude":-32.002192972222225,"location":{"place_id":134716724,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":188861330,"lat":"-32.00219543770808","lon":"115.52391880748945","display_name":"Digby Drive, Rottnest Island, Geordie Bay, City Of Cockburn, Western Australia, 6161, Australia","address":{"road":"Digby Drive","suburb":"Rottnest Island","village":"Geordie Bay","municipality":"City Of Cockburn","state":"Western Australia","postcode":"6161","country":"Australia","country_code":"au"},"boundingbox":["-32.0041092","-31.9976141","115.515098","115.5344706"]},"longitude":115.52391899999999,"origHeight":2112,"origWidth":4608,"name":"Rottnest Island, Australia"},{"id":"7a8faf60-79d8-4504-a7dd-5c89d6a6a973","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845005/travel_photos/image4.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845005/travel_photos/image4.jpg","orientation":"landscape","created":"2019-11-20T05:51:26.000Z","latitude":-31.954440972222223,"location":{"place_id":124779006,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":147048587,"lat":"-31.955215250000002","lon":"115.85894025629688","display_name":"Calibre House, London Court, Perth, City of Perth, Western Australia, 6000, Australia","address":{"building":"Calibre House","road":"London Court","suburb":"Perth","city":"Perth","county":"City of Perth","state":"Western Australia","postcode":"6000","country":"Australia","country_code":"au"},"boundingbox":["-31.9553846","-31.9550454","115.8587472","115.8591333"]},"longitude":115.85913897222221,"origHeight":2112,"origWidth":4608,"name":"Perth, Australia"}]},{"id":"2","name":"New Zealand 2021","photos":[{"id":"21","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845011/travel_photos/image5.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845011/travel_photos/image5.jpg","orientation":"portrait","created":"2021-04-24T04:30:28.000Z","latitude":-40.354384,"location":{"place_id":62160058,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"node","osm_id":5546976180,"lat":"-40.3544363","lon":"175.6143679","display_name":"515A, Main Street, West End, Palmerston North, Manawatu-Whanganui, 4440, New Zealand","address":{"house_number":"515A","road":"Main Street","suburb":"West End","city":"Palmerston North","region":"Manawatu-Whanganui","postcode":"4440","country":"New Zealand","country_code":"nz"},"boundingbox":["-40.3544863","-40.3543863","175.6143179","175.6144179"]},"longitude":175.614373,"origHeight":4608,"origWidth":2112,"name":"West End, Palmerston North, New Zealand"},{"id":"22","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845014/travel_photos/image6.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845014/travel_photos/image6.jpg","orientation":"portrait","created":"2021-04-24T04:30:43.000Z","latitude":-40.354384,"location":{"place_id":62160058,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"node","osm_id":5546976180,"lat":"-40.3544363","lon":"175.6143679","display_name":"515A, Main Street, West End, Palmerston North, Manawatu-Whanganui, 4440, New Zealand","address":{"house_number":"515A","road":"Main Street","suburb":"West End","city":"Palmerston North","region":"Manawatu-Whanganui","postcode":"4440","country":"New Zealand","country_code":"nz"},"boundingbox":["-40.3544863","-40.3543863","175.6143179","175.6144179"]},"longitude":175.614373,"origHeight":4608,"origWidth":2112,"name":"West End, Palmerston North, New Zealand"},{"id":"23","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845003/travel_photos/image7.jpg","thumbUurl":"https://res.cloudinary.com/carnold/image/upload//c_fit,h_330,w_330/v1626845003/travel_photos/image7.jpg","orientation":"portrait","created":"2021-04-24T04:31:37.000Z","latitude":-40.354429,"location":{"place_id":138254703,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":201306718,"lat":"-40.354489150000006","lon":"175.61336109722833","display_name":"Downtown Plaza, Main Street, West End, Palmerston North, Manawatu-Whanganui, 4440, New Zealand","address":{"shop":"Downtown Plaza","road":"Main Street","suburb":"West End","city":"Palmerston North","region":"Manawatu-Whanganui","postcode":"4440","country":"New Zealand","country_code":"nz"},"boundingbox":["-40.3550862","-40.3538809","175.6125692","175.6141563"]},"longitude":175.6138239722222,"origHeight":2112,"origWidth":4608,"name":"West End, Palmerston North, New Zealand"},{"id":"24","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845012/travel_photos/image8.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845012/travel_photos/image8.jpg","orientation":"landscape","created":"2021-04-24T04:32:12.000Z","latitude":-40.354429,"location":{"place_id":138254703,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":201306718,"lat":"-40.354489150000006","lon":"175.61336109722833","display_name":"Downtown Plaza, Main Street, West End, Palmerston North, Manawatu-Whanganui, 4440, New Zealand","address":{"shop":"Downtown Plaza","road":"Main Street","suburb":"West End","city":"Palmerston North","region":"Manawatu-Whanganui","postcode":"4440","country":"New Zealand","country_code":"nz"},"boundingbox":["-40.3550862","-40.3538809","175.6125692","175.6141563"]},"longitude":175.6138239722222,"origHeight":2112,"origWidth":4608,"name":"West End, Palmerston North, New Zealand"},{"id":"25","url":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_1080,w_1920/v1626845008/travel_photos/image9.jpg","thumbUrl":"https://res.cloudinary.com/carnold/image/upload/c_fit,h_330,w_330/v1626845008/travel_photos/image9.jpg","orientation":"portrait","created":"2021-04-24T04:33:14.000Z","latitude":-40.354075972222226,"location":{"place_id":138254703,"licence":"Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":201306718,"lat":"-40.354489150000006","lon":"175.61336109722833","display_name":"Downtown Plaza, Main Street, West End, Palmerston North, Manawatu-Whanganui, 4440, New Zealand","address":{"shop":"Downtown Plaza","road":"Main Street","suburb":"West End","city":"Palmerston North","region":"Manawatu-Whanganui","postcode":"4440","country":"New Zealand","country_code":"nz"},"boundingbox":["-40.3550862","-40.3538809","175.6125692","175.6141563"]},"longitude":175.61358099999998,"origHeight":2112,"origWidth":4608,"name":"West End, Palmerston North, New Zealand"}]}]}')},45:function(t,e,a){},46:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(35),c=a.n(o),i=(a(45),a(20)),s=a(7),u=a(63),l=(a(46),a(21)),d=a(32),p=(a(50),a(5)),h=function(){return Object(p.jsx)("div",{className:"loading_screen",children:Object(p.jsx)(d.a,{})})},b=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,99))})),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8),a.e(4)]).then(a.bind(null,100))})),m=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,101))})),g=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,98))})),O=function(){var t=Object(l.g)().state,e=Object(s.g)(),a=Object(l.d)();return Object(n.useEffect)((function(){t.isLoading&&a()}),[a,t.isLoading]),t.isLoading?Object(p.jsx)(h,{}):Object(p.jsx)(u.a,{initial:!1,children:Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(h,{}),children:Object(p.jsxs)(s.c,{location:e,children:[Object(p.jsx)(s.a,{component:m,path:"/collection/:collectionId/photo/:id"}),Object(p.jsx)(s.a,{component:f,path:"/collection/:collectionId"}),Object(p.jsx)(s.a,{component:g,path:"/upload"}),Object(p.jsx)(s.a,{component:b,path:"/"})]},e.pathname)})})},j=a(13),y=function(){return Object(p.jsx)(j.c,{children:Object(p.jsx)(i.a,{basename:"/travel-photos",children:Object(p.jsx)(O,{})})})},_=function(t){t&&t instanceof Function&&a.e(9).then(a.bind(null,95)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),o(t),c(t)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),_()}},[[59,2,3]]]);
//# sourceMappingURL=main.3d5d3b86.chunk.js.map