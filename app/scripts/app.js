/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    //scrollify();
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {

  });

  /*function scrollify() {
  	var rootHeight = $('#mainContainer').height();
  	var aArray = [];
  	var aChildren = $('.scroll'); // find the a children of the list items

    for (var i=0; i < aChildren.length; i++) {
			var aChild = aChildren[i];
			var ahref = $(aChild).attr('href');
			aArray.push(ahref);
    }

  	console.log(rootHeight);
  	console.log(aArray);

    $('#mainContainer').scroll(function() {
	  	var rootPos = $('body').offset().top;
	  	console.log(rootPos);
    	for (var i=0; i < aArray.length; i++) {
				var theID = aArray[i];
				var divPos = $(theID).offset().top;
				var divHeight = $(theID).height();
				if (rootPos >= divPos && rootPos < (divPos + divHeight)) {
					$('a[href="' + theID + '"]').addClass('nav-active');
					console.log('ACTIVE');
				} else {
					$('a[href="' + theID + '"]').removeClass('nav-active');
					console.log('NOT ACTIVE');
				}
			}
    });

  }*/


})(document);
