!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}document.addEventListener("DOMContentLoaded",function(e){var t;document.addEventListener("keydown",function(e){s.arrowMovements(e)});var r=function e(t,r,i){n(this,e),this.x=0,this.y=0,this.direction="right"},o=function e(t,r){n(this,e),this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())},s=new(function(){function e(t,i,s,u){n(this,e),this.board=document.querySelector("#board").querySelectorAll("div"),this.furry=new r,this.coin=new o,this.score=0,this.index=function(e,t){return e+10*t}}return i(e,[{key:"showFurry",value:function(){return this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")}},{key:"hideVisibleFurry",value:function(){for(var e=0;e<this.board.length;e++)this.board[e].classList.remove("furry")}},{key:"showCoin",value:function(){return this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")}},{key:"moveFurry",value:function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y-1:"down"===this.furry.direction&&(this.furry.y=this.furry.y+1),this.gameOver(),this.checkCoinCollision(),this.showCoin(),this.showFurry()}},{key:"startGame",value:function(){t=setInterval(function(){s.moveFurry()},250)}},{key:"arrowMovements",value:function(e){switch(e.which||e.keyCode,e.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}}},{key:"checkCoinCollision",value:function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(this.board[this.index(this.coin.x,this.coin.y)].classList.remove("coin"),this.score++,document.querySelector("#score strong").innerText=this.score,this.coin=new o,s.showCoin())}},{key:"gameOver",value:function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){this.hideVisibleFurry(),clearInterval(t),u.style.display="none",c.style.display="none",document.querySelector("#over").style.display="inline-block",document.querySelector("#over strong").innerText=this.score}}}]),e}()),u=document.querySelector("#score"),c=document.querySelector("#board");document.querySelector("#startGame").addEventListener("click",function(e){s.startGame(),console.log(this),u.style.display="block",c.style.display="block",document.querySelector("#startButton").style.display="none"})})}]);
//# sourceMappingURL=out.js.map