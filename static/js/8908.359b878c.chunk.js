"use strict";(self.webpackChunkhardbank_dashboard=self.webpackChunkhardbank_dashboard||[]).push([[8908],{38908:function(n,e,t){t.r(e);var r=t(87757),a=t.n(r),o=(t(34596),t(82935));t(74303),t(97384),t(50449);function i(n,e,t,r,a,o,i){try{var u=n[o](i),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function u(n){i(o,r,a,u,s,"next",n)}function s(n){i(o,r,a,u,s,"throw",n)}u(void 0)}))}}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.heading,t=n.description,r=n.icon,i=n.html,s=n.button;return function(){var n=u(a().mark((function n(u){var c,d,l,h;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=u.wallet,d=u.address,l=u.stateSyncStatus,h=u.stateStore,null!==d){n.next=5;break}if(!l.address){n.next=5;break}return n.next=5,new Promise((function(n){l.address&&l.address.then(n),setTimeout((function(){null===d&&n(void 0)}),500)}));case 5:if(h.address.get()||!c||!c.name){n.next=7;break}return n.abrupt("return",{heading:e||"Login and Authorize Your Wallet",description:t||"This dapp requires access to your wallet, please login and authorize access to your ".concat(c.name," accounts to continue."),eventCode:"loginFail",action:c.connect,icon:r||o.e,html:i,button:s});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=8908.359b878c.chunk.js.map