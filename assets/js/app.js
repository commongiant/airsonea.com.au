
$('#header-carousel').carousel({
  interval: 4000
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".stickytop");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 3100) {
            header.removeClass('stickytop').addClass("stickybottom");
        } else {
            header.removeClass("stickybottom").addClass('stickytop');
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".stickytop-screen");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 3100) {
            header.removeClass('stickytop-screen').addClass("stickybottom-screen");
        } else {
            header.removeClass("stickybottom-screen").addClass('stickytop-screen');
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 600) {
            header.addClass("iPhone-Two");
        } else {
            header.removeClass("iPhone-Two");
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1200) {
            header.addClass("iPhone-Three");
        } else {
            header.removeClass("iPhone-Three");
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1800) {
            header.addClass("iPhone-Four");
        } else {
            header.removeClass("iPhone-Four");
        }
    });
}); 
// classie - class helper functions from bonzo https://github.com/ded/bonzo

( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

// Menu Activation
var menuLeft = document.getElementById( 'cbp-spmenu' ),
				showLeftPush = document.getElementById( 'showLeftPush' ),

				body = document.body;

			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
			};