"use strict";(self.webpackChunkhardbank_dashboard=self.webpackChunkhardbank_dashboard||[]).push([[4081],{44081:function(n,r,e){e.r(r);var t=e(87757),u=e.n(t),o=(e(34596),e(82935));e(74303),e(97384),e(50449);function a(n,r,e,t,u,o,a){try{var i=n[o](a),c=i.value}catch(s){return void e(s)}i.done?r(c):Promise.resolve(c).then(t,u)}function i(n){return function(){var r=this,e=arguments;return new Promise((function(t,u){var o=n.apply(r,e);function i(n){a(o,t,u,i,c,"next",n)}function c(n){a(o,t,u,i,c,"throw",n)}i(void 0)}))}}r.default=function(n){var r=n.apiKey,t=n.rpcUrl,a=n.networkId,c=n.preferred,s=n.label,f=n.iconSrc;return{name:s||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:f,wallet:function(){var n=i(u().mark((function n(c){var s,f,d,h,l,v,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4396).then(e.t.bind(e,4396,23));case 2:return s=n.sent,f=s.default,d=new f(r,t?{chainId:a,rpcUrl:t}:1===a?void 0:(0,o.n)(a)),h=d.getProvider(),l=c.BigNumber,v=c.getAddress,n.abrupt("return",{provider:h,instance:d,interface:{name:"Fortmatic",connect:function(){return d.user.login().then((function(n){return p=!0,n}))},disconnect:function(){return d.user.logout()},address:{get:function(){return p?v(h):Promise.resolve()}},network:{get:function(){return Promise.resolve(a)}},balance:{get:function(){var n=i(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p&&d.user.getBalances().then((function(n){return n[0]?l(n[0].crypto_amount).times(l("1000000000000000000")).toString(10):null})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return d.user.settings()}}});case 8:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:c}}}}]);
//# sourceMappingURL=4081.68b58a89.chunk.js.map