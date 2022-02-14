"use strict";(self.webpackChunkhardbank_dashboard=self.webpackChunkhardbank_dashboard||[]).push([[3319],{73319:function(e,r,n){n.r(r);var t=n(87757),a=n.n(t);function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var t,a,o=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);u=!0);}catch(s){c=!0,a=s}finally{try{u||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,r)||l(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){if(e){if("string"===typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,r):void 0}}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function f(e,r,n,t,a,o,u){try{var c=e[o](u),s=c.value}catch(i){return void n(i)}c.done?r(s):Promise.resolve(s).then(t,a)}function h(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var o=e.apply(r,n);function u(e){f(o,t,a,u,c,"next",e)}function c(e){f(o,t,a,u,c,"throw",e)}u(void 0)}))}}function d(e){return w.apply(this,arguments)}function w(){return w=h(a().mark((function e(r){var t,o,c,l,p,f,d,w,m,y,b,v,g,x,k,P,S,O,A,E,L,j,T,C,I,M,N,z,B,U,D,V,_,K,W,Z,G,H,$,q,F,J,Q,R,X,Y,ee,re,ne,te,ae,oe;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe=function(){return(oe=h(a().mark((function e(r){var n,t,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==I.size){e.next=3;break}return e.next=3,K();case 3:return n=s(i(I.entries())[0],2),t=n[0],o=n[1],e.abrupt("return",new Promise((function(e,n){v.ethereumSignMessage({path:o,message:f.stripHexPrefix(r.data),hex:!0}).then((function(r){if(r.success){r.payload.address!==f.toChecksumAddress(t)&&n(new Error("signature doesnt match the right address"));var a="0x".concat(r.payload.signature);e(a)}else n(new Error(r.payload&&r.payload.error||"There was an error signing a message"))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},ae=function(e){return oe.apply(this,arguments)},te=function(){return(te=h(a().mark((function e(r){var n,t,o,s,l,h,d,w,m,y;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==I.size){e.next=3;break}return e.next=3,K();case 3:return t=i(I.values())[0],o=f.BN,s=f.toBuffer,l=new p({chain:j||L(P)}),(h=c.fromTxData(u(u({},r),{},{gasLimit:null!==(n=r.gas)&&void 0!==n?n:r.gasLimit}),{common:l,freeze:!1})).v=new o(s(P)),h.r=h.s=new o(s(0)),e.next=11,re(t,r);case 11:if((d=e.sent).success){e.next=14;break}throw new Error(d.payload.error);case 14:return w=d.payload.v.toString(16),(m=parseInt(w,16))!==(y=2*P+35)&&(m&y)!==m&&(y+=1),w=y.toString(16),h.v=new o(s("0x".concat(w))),h.r=new o(s("".concat(d.payload.r))),h.s=new o(s("".concat(d.payload.s))),e.abrupt("return","0x".concat(h.serialize().toString("hex")));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)},ne=function(e){return te.apply(this,arguments)},re=function(e,r){var n=r.nonce,t=r.gasPrice,a=r.gas,o=r.to,u=r.value,c=r.data;return v.ethereumSignTransaction({path:e,transaction:{nonce:n,gasPrice:t,gasLimit:a,to:o,value:u||"",data:c||"",chainId:P}})},ee=function(e){return new Promise((function(r,n){B.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&n(e);var a=t&&t.result;r(null!=a?new E(a).toString(10):null)}))}))},Y=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=h(a().mark((function r(n){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ee(e);case 2:t=r.sent,n({address:e,balance:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},X=function(){return(X=h(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return",[void 0]);case 2:if(!(I.size>0)||r){e.next=4;break}return e.abrupt("return",G());case 4:if(""===C&&(C=k),z){e.next=15;break}return e.prev=6,e.next=9,$();case 9:z=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),e.t0;case 15:return y(z,I.size).forEach((function(e){var r=e.dPath,n=e.address;I.set(n,r)})),e.abrupt("return",G());case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)},R=function(e){return X.apply(this,arguments)},Q=function(){return(Q=h(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(!0);case 2:return r=e.sent,e.abrupt("return",Y(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},J=function(){return Q.apply(this,arguments)},F=function(){return M?G()[0]:void 0},q=function(){return(q=h(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:return e.prev=2,e.next=5,v.getPublicKey({path:C,coin:"eth"});case 5:if((r=e.sent).success){e.next=8;break}throw new Error(r.payload.error);case 8:return z={publicKey:r.payload.publicKey,chainCode:r.payload.chainCode,path:r.payload.serializedPath},e.abrupt("return",z);case 12:throw e.prev=12,e.t0=e.catch(2),new Error("There was an error accessing your Trezor accounts.");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)},$=function(){return q.apply(this,arguments)},H=function(e){var r=i(I.entries()),n=r.findIndex((function(r){return s(r,1)[0]===e}));r.unshift(r.splice(n,1)[0]),I=new Map(r)},G=function(){return Array.from(I.keys())},Z=function(){return(Z=h(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Unable to derive address from path ".concat(r),e.prev=1,e.next=4,v.ethereumGetAddress({path:r,showOnTrezor:!1});case 4:if((t=e.sent).success){e.next=7;break}throw new Error(n);case 7:return e.abrupt("return",t.payload.address);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(n);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)},W=function(e){return Z.apply(this,arguments)},K=function(){return M=!0,R()},_=function(){return N},V=function(){return(V=h(a().mark((function e(r,n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==C&&(I=new Map),!n){e.next=17;break}return e.prev=4,e.next=7,W(r);case 7:return t=e.sent,I.set(t,r),C=r,N=!0,e.abrupt("return",!0);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("There was a problem deriving an address from path ".concat(r));case 17:return N=!1,C=r,e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)},D=function(e,r){return V.apply(this,arguments)},U=function(){C="",I=new Map,M=!1,B.stop()},e.next=25,n.e(3298).then(n.t.bind(n,33298,23));case 25:return t=e.sent,e.next=28,Promise.resolve().then(n.t.bind(n,29151,23));case 28:return o=e.sent,c=o.Transaction,e.next=32,Promise.resolve().then(n.t.bind(n,6762,23));case 32:return l=e.sent,p=l.default,e.next=36,Promise.resolve().then(n.t.bind(n,9142,23));case 36:return f=e.sent,e.next=39,Promise.all([n.e(5445),n.e(9962),n.e(374),n.e(5514),n.e(4851),n.e(2689),n.e(6613)]).then(n.bind(n,52689));case 39:return d=e.sent,w=d.default,e.next=43,Promise.all([n.e(9188),n.e(301)]).then(n.bind(n,40167));case 43:return m=e.sent,y=m.generateAddresses,b=m.isValidPath,v=t.default,g=t.DEVICE_EVENT,x=t.DEVICE,k="m/44'/60'/0'/0",P=r.networkId,S=r.email,O=r.appUrl,A=r.rpcUrl,E=r.BigNumber,L=r.networkName,j=r.customNetwork,T=r.resetWalletState,C="",I=new Map,M=!1,N=!1,v.manifest({email:S,appUrl:O}),B=w({getAccounts:function(e){R().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){ne(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){ae(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){ae(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){ae(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){ae(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:A}),v.on(g,(function(e){e.type===x.DISCONNECT&&(B.stop(),T({disconnected:!0,walletName:"Trezor"}))})),B.setPath=D,B.dPath=C,B.enable=K,B.setPrimaryAccount=H,B.getPrimaryAddress=F,B.getAccounts=R,B.getMoreAccounts=J,B.getBalance=ee,B.getBalances=Y,B.send=B.sendAsync,B.disconnect=U,B.isCustomPath=_,e.abrupt("return",B);case 69:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}r.default=function(e){var r=e.rpcUrl,n=e.networkId,t=e.email,o=e.appUrl,u=e.preferred,c=e.label,s=e.iconSrc,i=e.svg,l=e.customNetwork;return{name:c||"Trezor",svg:i||'\n\t<svg width="40px" height="40px" viewBox="0 0 114 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<path d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z" id="Trezor-logo" fill="currentColor"></path>\n\t\t</g>\n\t</svg>\n',iconSrc:s,wallet:function(){var e=h(a().mark((function e(u){var c,s,i,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.BigNumber,s=u.networkName,i=u.resetWalletState,e.next=3,d({rpcUrl:r,networkId:n,email:t,appUrl:o,BigNumber:c,networkName:s,customNetwork:l,resetWalletState:i});case 3:return p=e.sent,e.abrupt("return",{provider:p,interface:{name:"Trezor",connect:p.enable,disconnect:p.disconnect,address:{get:function(){var e=h(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=h(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=h(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.getPrimaryAddress(),e.abrupt("return",r&&p.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:u}}}}]);
//# sourceMappingURL=3319.e0b6945b.chunk.js.map