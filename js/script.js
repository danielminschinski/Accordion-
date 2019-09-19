'use strict';

(function(){
	var accordionVanillaJS = function(){
		var headers = document.getSelectorAll('#accordion-vanillajs h3');
		var headerClickCallback = function(){
			this.classList.add('active');
			for(var i = 0; i < headers.length; i++){
				if(headers[i].classList.contains('active') && headers[i] != this){
					headers[i].classList.remove('active');
				}
			}
		};
		for(var i = 0; i < headers.length; i++){
			headers[i].addEventListener('click', headerClickCallback);
		}
	};
	accordionVanillaJS();
})();