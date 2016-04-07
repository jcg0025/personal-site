$(document).ready(function(){
        
    $(window).scroll(function() {
        var scroll_top =$(this).scrollTop();
        var skillsTop = $('.Skills').offset().top;
        var bottom = skillsTop + $('.Skills').outerHeight();
        console.log('scrolltop: '+scroll_top+ " "+'skillsTop: ' +skillsTop+ ' '+ 'bottom: '+bottom)
        if (scroll_top > skillsTop && scroll_top < bottom) {
            $('.Img').addClass('up');
        } else {
            $('.Img').removeClass('up');
        }
    });
    
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    
    
    

});