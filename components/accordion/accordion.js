!function(t,i){"use strict";"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?module.exports=i():t.Accordion=i()}(this,function(){"use strict";function t(i,e){this.elem=i,this.options=_.extend(t.options,e),this.children=this.elem.getElementsByClassName(this.options.itemClass),console.log("accordion fn"),this._init()}return t.prototype={constructor:t,_init:function(){return console.log("accordion proto init"),console.log(t.cutsTheMustard),this.children?(setTimeout(this.attachEvent.bind(this),100),console.log(this),this):void console.log("no children in accordion with class: "+this.options.itemClass)},closeOpenItems:function(t){_.forEach(t,function(t){var i=t.getElementsByClassName(this.options.btnClass)[0];this.toggleItem(t,i)}.bind(this))},toggleItem:function(t,i){console.log(t),console.log(i);var e=Utils.strToBool(i.getAttribute("aria-expanded"));if(!this.options.allowMultipleOpen&&!e){var s=this.elem.getElementsByClassName(this.options.openClass);0!=s.length&&this.closeOpenItems(s)}t.classList.toggle(this.options.openClass,!e),i.setAttribute("aria-expanded",!e);var o=t.nextElementSibling;console.log(o),o.setAttribute("aria-hidden",e),o.style.maxHeight=e?"0px":o.scrollHeight+"px"},itemEvent:function(t,i){if(!Utils.clickKeydownChecker(t)){var e=t.target||t.srcElement;e.classList.contains(this.options.btnClass)&&(t.preventDefault(),console.log("button clicked"),this.toggleItem(i,e))}},attachEvent:function(){this.initialised||(this.initialised=!0,_.forEach(this.children,function(t){Utils.addListener(t,"click keydown",function(i){this.itemEvent(i,t)}.bind(this))}.bind(this)))},destory:function(){}},t.options={itemClass:"accordion__item",btnClass:"accordion__btn",openClass:"is-open",allowMultipleOpen:!0},t.cutsTheMustard=void 0!==Utils.features&&Utils.features.rAF&&Utils.features.bind&&Utils.features.classList,t});