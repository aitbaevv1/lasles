$(document).ready(function() {
	$('.reviews-slider').slick({
		slidesToShow: 2.6,
		infinite: false,
		slidesToScroll: 1,
		dots: true,
		responsive:[
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 1.7,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
	});
	$('.header-burger').click(function() {
		$('.header-burger, .header-mobile, body').toggleClass('active');
	})
})