// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['../images/photography/photo1.jpg', '../images/photography/photo2.jpg', '../images/photography/photo3.jpg', '../images/photography/photo0.jpg', '../images/photography/photo4.jpg', '../images/photography/photo5.jpg', '../images/photography/photo6.jpg', '../images/photography/photo7.jpg', '../images/photography/photo8.jpg', '../images/photography/photo9.jpg', '../images/photography/photo10.jpg', '../images/photography/photo11.jpg', ];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
				}

				var slider_img2 = document.querySelector('.slider-img2');
				var images2 = ['../images/pubs/1.jpg', '../images/pubs/2.jpg', '../images/pubs/3.jpg', '../images/pubs/4.jpg', '../images/pubs/5.jpg', '../images/pubs/6.jpg', '../images/pubs/7.jpg', '../images/pubs/8.jpg', '../images/pubs/9.jpg', '../images/pubs/10.jpg', ];
				var i = 0;

				function prev2(){
					if(i <= 0) i = images2.length;	
					i--;
					return setImg2();			 
				}

				function next2(){
					if(i >= images2.length-1) i = -1;
					i++;
					return setImg2();			 
				}

				function setImg2(){
					return slider_img2.setAttribute('src', "images/"+images2[i]);
					
				}


var slider_img3 = document.querySelector('.slider-img3');
var images3 = ['../images/posters/trishtan.jpg', '../images/posters/trishtan2.jpg', '../images/posters/jssea.jpg', '../images/posters/riah.jpg', '../images/posters/karen.jpg',  ];
var i = 0;

function prev3(){
	if(i <= 0) i = images3.length;	
	i--;
	return setImg3();			 
}

function next3(){
	if(i >= images3.length-1) i = -1;
	i++;
	return setImg3();			 
}

function setImg3(){
	return slider_img3.setAttribute('src', "images/"+images3[i]);

}




var slider_img4 = document.querySelector('.slider-img4');
var images4 = ['../images/pubs/gif1.gif', '../images/pubs/gif2.gif', '../images/pubs/gif3.gif', '../images/pubs/gif4.gif',];
var i = 0;

function prev4(){
	if(i <= 0) i = images4.length;	
	i--;
	return setImg4();			 
}

function next4(){
	if(i >= images4.length-1) i = -1;
	i++;
	return setImg4();			 
}

function setImg4(){
	return slider_img4.setAttribute('src', "images/"+images4[i]);

}





var autoPlayVideo = document.getElementById("ocScreencapVideo");
    		autoPlayVideo.oncanplaythrough = function() {
	        autoPlayVideo.muted = false;
	        autoPlayVideo.play();
	        autoPlayVideo.pause();
	        autoPlayVideo.play();}


$(document).ready(function() {
			  $('#show-hidden-menu').click(function() {
			    $('.hidden-menu').slideToggle("slow");
			    $('.hidden-menu2').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu4').hide("slow");
			      $('.hidden-menu5').hide("slow");
			    $('.hidden-menu6').hide("slow");
			$('.hidden-menu7').hide("slow");
			  });
			  $('#show-hidden-menu2').click(function() {
			    $('.hidden-menu2').slideToggle("slow");
			    $('.hidden-menu').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu4').hide("slow");
			      $('.hidden-menu5').hide("slow");
			    $('.hidden-menu6').hide("slow");
			    $('.hidden-menu7').hide("slow");

			  });
			   $('#show-hidden-menu3').click(function() {
			    $('.hidden-menu3').slideToggle("slow");
			     $('.hidden-menu').hide("slow");
			    $('.hidden-menu2').hide("slow");
			    $('.hidden-menu4').hide("slow");
			      $('.hidden-menu5').hide("slow");
			    $('.hidden-menu6').hide("slow");
			    $('.hidden-menu7').hide("slow");

			  });
			   $('#show-hidden-menu4').click(function() {
			    $('.hidden-menu4').slideToggle("slow");
			     $('.hidden-menu').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu2').hide("slow");
			      $('.hidden-menu5').hide("slow");
			    $('.hidden-menu6').hide("slow");
				$('.hidden-menu7').hide("slow");
			  });

			
			   $('#show-hidden-menu5').click(function() {
			    $('.hidden-menu5').slideToggle("slow");
			     $('.hidden-menu').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu2').hide("slow");
			    $('.hidden-menu4').hide("slow");
			    $('.hidden-menu6').hide("slow");
			    $('.hidden-menu7').hide("slow");
			      });

		     $('#show-hidden-menu6').click(function() {
			    $('.hidden-menu6').slideToggle("slow");
			     $('.hidden-menu').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu2').hide("slow");
			      $('.hidden-menu4').hide("slow");
			    $('.hidden-menu5').hide("slow");
			     $('.hidden-menu7').hide("slow");

			     });

		     $('#show-hidden-menu7').click(function() {
			    $('.hidden-menu7').slideToggle("slow");
			     $('.hidden-menu').hide("slow");
			    $('.hidden-menu3').hide("slow");
			    $('.hidden-menu2').hide("slow");
			      $('.hidden-menu4').hide("slow");
			        $('.hidden-menu6').hide("slow");
			    $('.hidden-menu5').hide("slow");
	
			  });
			});




(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main, articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});

})(jQuery);