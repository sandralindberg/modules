var Utils = {
  features : {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  },
  clickKeydownChecker : function(e) {
    var etype = e.type;

    if(etype === 'keydown' && (e.keyCode !== 13 && e.keyCode !== 32)) {
      return true; // not space or enter
    } else {
      return false;
    }
  },
  strToBool : function(str) {
    if(typeof str == 'boolean') {
      return str;
    }
    switch(str.toLowerCase().trim()){
      case 'true': case 'yes': case '1': return true;
      case 'false': case 'no': case '0': case null: return false;
      default: return Boolean(str);
    }
  },
  findAncestor : function (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  },
  addListener : function( element, eventNames, listener ) {
    var events = eventNames.split(' ');
    for ( var i = 0; i < events.length; i++ ) {
      element.addEventListener( events[i], listener );
    }
  },
  removeListener : function( element, eventNames, listener ) {
    var events = eventNames.split(' ');
    for ( var i = 0; i < events.length; i++ ) {
      element.removeEventListener( events[i], listener, false );
    }
  }
};
