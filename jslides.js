var jSlides = function (selector) {
	var that = {};
	
	that.next = function () {
		that.element.find('.active').fadeOut('slow',function() {
			$(this).removeClass('active').show();

			var next = that.element.find('.next')
			next.removeClass('next').addClass('active');
			var nextnext = next.next()[0]? next.next() : that.element.find('li:first-child');
			nextnext.addClass('next');

		});
	}

	that.prev = function () {
		that.element.find('.next').removeClass('next');
		var cur = that.element.find('.active');
		(cur.prev()[0]? cur.prev() : that.element.find('li:last-child')).addClass('next');
		that.next();
	}

	that.start = function () { 
		if (that.interval) that.stop(); 
		that.interval = setInterval(that.next, 5000); 
		console.log('start')
	}

	that.stop = function () {
		clearInterval(that.interval); 
		that.interval = null;
		console.log('stop'); 
	}

	that.add = function (slide) { }
	that.remove = function (index) { }

	that.element = jQuery(selector);

	
	that.element.find('ul').addClass('jslides').find('li:first-child').addClass('active').next().addClass('next');
	that.element.hover(that.stop, that.start);
	that.start();

	return that;
};
