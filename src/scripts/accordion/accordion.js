(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  }
  else if (typeof exports === 'object') {
    module.exports = factory();
  }
  else {
    root.Accordion = factory();
  }
}(this, function() {
  'use strict';

	function Accordion(elem, options) {
		this.elem = elem;
		this.options = _.extend(Accordion.options, options);

		this.children = this.elem.getElementsByClassName(this.options.itemClass);

		console.log('accordion fn');

		this._init();
	}

	Accordion.prototype = {
    constructor : Accordion,


    _init : function () {
      console.log('accordion proto init');
      console.log(Accordion.cutsTheMustard);
      /*if(!Accordion.cutsTheMustard) {
      	console.log('Accordion doesn't cut the mustard');
        return;
      }*/

      if(!this.children) {
      	console.log('no children in accordion with class: '+this.options.itemClass);
      	return;
      }

      setTimeout(this.attachEvent.bind(this), 100);

      console.log(this);
      return this;

    },

    closeOpenItems : function (items) {
      _.forEach(items, (function(item) {

        var btn = item.getElementsByClassName(this.options.btnClass)[0];

        this.toggleItem(item, btn);

      }).bind(this));
    },

    toggleItem : function (item, btn) {
    	console.log(item);
    	console.log(btn);
  
    	var isOpen = Utils.strToBool( btn.getAttribute('aria-expanded') );
    	
      if( !this.options.allowMultipleOpen && !isOpen ) {
    		var openItems = this.elem.getElementsByClassName(this.options.openClass);
        if(openItems.length != 0) {
          this.closeOpenItems(openItems);
        }
    	} 

      /*else if( !this.options.allowToggleOpen && isOpen ) {
        return true;
      }*/
    	

    	item.classList.toggle(this.options.openClass, !isOpen);
    	btn.setAttribute('aria-expanded', !isOpen);

    	var content = item.nextElementSibling;
    	console.log(content);
    	content.setAttribute('aria-hidden', isOpen);

    	if(isOpen) {
    		content.style.maxHeight = "0px";
    	} else {
    		content.style.maxHeight = content.scrollHeight+"px";
    	}

    },

    itemEvent : function(e, item) {
    	if( Utils.clickKeydownChecker(e) ) return;
      
			var srcEl = e.target || e.srcElement;
				
			if(srcEl.classList.contains(this.options.btnClass)) {
				e.preventDefault();
				console.log('button clicked');

				this.toggleItem(item, srcEl);
			}
    },

    attachEvent : function () {

    	if(!this.initialised) {
        this.initialised = true;

    		_.forEach(this.children, (function(item) {

    			Utils.addListener(item, 'click keydown', (function(e) {
    				this.itemEvent(e, item);
    			}).bind(this));

    		}).bind(this));
    	}

    },

    destory : function () {
    	/*
      this.initialised = false;
      */
    }
	};

	Accordion.options = {
	  itemClass : 'accordion__item',
	  btnClass : 'accordion__btn',
	  openClass : 'is-open',
	  allowMultipleOpen : true,
    allowToggleOpen : true 
	};

  Accordion.cutsTheMustard = typeof Utils.features !== 'undefined' && Utils.features.rAF && Utils.features.bind && Utils.features.classList;

  return Accordion;

}));