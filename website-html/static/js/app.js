$(document).ready(function () {
	// 手风琴
	const accordion = (page, hd, bd) => {

		$(`${page} ${hd}`).on('click', function () {
			const $children = $(this).children('.iconfont');

			if ($children.hasClass('icon-up')) {
				$children.addClass('icon-down').removeClass('icon-up');
			} else {
				$children.addClass('icon-up').removeClass('icon-down');
			}

			$(this).toggleClass("active");
			$(this).next(bd).slideToggle(500).parents('li').siblings().children(bd).slideUp(500);

			$(this).parents('li').siblings().children(hd).removeClass('active');
			$(this).parents('li').siblings().find('.iconfont').addClass('icon-up').removeClass('icon-down');
		});
	}
	// 选项卡
	const successSwiper = (page) => {
		const swiper = new Swiper(`${page} .swiper-container`);
		$(`${page} .success-hd li`).on('mouseover', function (e) {
			e.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
			let i = $(this).index();
			swiper.slideTo(i, false);
		})
	}

	// search
	$('.header .search').click(function () {
		$('.fixed-search').addClass('active');
	})
	$('.fixed-search .close').click(function () {
		$('.fixed-search').removeClass('active');
	})
	$('.fixed-search button').click(function () {
		var _this = $('.fixed-search input[type="text"]');
		var _val = _this.val();
		val = $.trim(_val);
		if (val == "") {
			alert("请输入关键字");
			return false;
		}
	})

	// fullpage
	new fullpage('#fullpage', {
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		onLeave: function (origin, destination, direction) {
			var loadedSection = this;
			if (destination.anchor == 'page1') {
				$('.header').removeClass('down');
			} else {
				$('.header').addClass('down');
			}
		},
		afterLoad: function (origin, destination, direction) {
			if (destination.anchor == 'page6' || destination.anchor == 'page7') {
				$('.section6').addClass('active6');
			} else {
				$('.section6').removeClass('active6');
			}
		},
		// navigation: true,
		css3: true
	});
	//  section1
	new Swiper('.section1 .swiper-container', {
		speed: 800,
		// parallax : true,
		simulateTouch: false,
		navigation: {
			nextEl: '.section1 .button-next',
			prevEl: '.section1 .button-prev',
		},
		pagination: {
			el: '.section1 .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><span>0' + (index + 1) +
					'</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="495px" height="25px" viewBox="-0.278 16.444 495 25" enable-background="new -0.278 16.444 495 25"><polyline class="line-1" fill="none" stroke-width="2" stroke-miterlimit="10" points="1,0 1,40.362 493.892,40.362 493.892,0 "/><<polyline class="line-2" fill="none" stroke-width="2" stroke-miterlimit="10" points="1,0 1,40.362 493.892,40.362 493.892,0 "/></svg></div>';
			},
			bulletClass: 'num',
			bulletActiveClass: 'active',
		},
	});
	// section2
	$('.section2 .tab-tit .item').hover(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.section2 .tab-cont .item').eq($(this).index()).addClass('active').siblings()
			.removeClass('active');
	})

	// section3
	$('.section3 .tab-tit .item').hover(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.section3 .tab-cont .item').eq($(this).index()).addClass('active').siblings()
			.removeClass('active');
	})
	// section4
	$("#city_i").citySelect({ prov: "", city: "" });

	const swiper2 = new Swiper(".section4 .swiper2", {
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});

	const swiper1 = new Swiper(".section4 .swiper1", {
		spaceBetween: 10,
		navigation: {
			nextEl: '.section4 .button-next',
			prevEl: '.section4 .button-prev',
		},
		thumbs: {
			swiper: swiper2,
		},
	});
	// windchill
	successSwiper('.windchill-page .success')

	//creo 
	const creoSwiper = new Swiper('.creo-page .swiper-container');
	$('.creo-page .tabs-hd li').on('mouseover', function (e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		let i = $(this).index();
		creoSwiper.slideTo(i, false);
	})
	accordion('.creo-page', '.accordion-hd', '.accordion-bd');

	// mes
	accordion('.mes-page .main-modules', '.accordion-hd', '.accordion-bd');
	successSwiper('.mes-page .success')
	new Swiper('.mes-page .interface-swiper .swiper', {
		effect: 'coverflow',
		slidesPerView: 2,
		centeredSlides: true,
		initialSlide: 1,
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 400,
			depth: 200,
			modifier: 1,
			slideShadows: false
		},
		navigation: {
			nextEl: '.mes-page .interface-swiper .swiper-button-next',
			prevEl: '.mes-page .interface-swiper .swiper-button-prev',
		},
	});

	// 关于我们
	new Swiper(".about-page  .honour-swiper .swiper", {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			el: ".about-page  .honour-swiper .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".about-page  .honour-swiper .swiper-button-next",
			prevEl: ".about-page  .honour-swiper .swiper-button-prev",
		}
	});

	// 时间轴
	new Swiper(".about-page .history .swiper", {
		slidesPerView: 4,
		// spaceBetween: 30,
		pagination: {
			el: ".about-page .history .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".about-page .history .swiper-button-next",
			prevEl: ".about-page .history .swiper-button-prev",
		}
	});

});



