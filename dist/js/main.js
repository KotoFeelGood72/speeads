


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['calculator']);
		pageWidget(['package']);
		pageWidget(['page-about']);
		pageWidget(['page-blog']);
		pageWidget(['page-contacts']);
		pageWidget(['page-dillers']);
		pageWidget(['page-policy']);
		pageWidget(['page-tuning']);
		pageWidget(['page-send']);
		pageWidget(['shop-boat']);
		pageWidget(['shop-motors']);
		pageWidget(['shop-navigation']);
		pageWidget(['shop-trailers']);
		pageWidget(['single-article']);
		pageWidget(['single-boat']);
		pageWidget(['single-motors']);
		pageWidget(['single-package']);
		pageWidget(['single-trailer']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	initTxtSlider();
	maps('улица Металлургов, 44а', 'Екатеринбург', [40, 53], 'maps_contacts')
	if(windowWidth > mediaPoint1) {
		// popupForms('14px');
		// mapsChange('улица Металлургов, 44а', 'Екатеринбург', [40, 53], 'map')
	} else {
		// mapsChange('улица Металлургов, 44а', 'Екатеринбург', [40, 53], 'map')
	}
	// allDefautAnim();
	// burgerMobile();
	if(windowWidth > mediaPoint1) {
		popup('1.4rem', '.popup_send', '.trigger_form');
		popup('1.4rem', '.popup_lang', '.sidebar_lang');
		submenu();
	} else {
		popup('0', '.popup_send', '.trigger_form');
		popup('0', '.popup_lang', '.sidebar_lang');
		burger();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

// var styles = ['color: red', 'background: transparent'].join(';');
// var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
// console.info('%c%s', styles, message);



// $(document).ready(function() {
// 	const btns = document.querySelectorAll('.btn')

// 	btns.forEach(el => {
// 			el.addEventListener('click', function(e) {
// 					let
// 							size = Math.max(this.offsetWidth, this.offsetHeight),
// 							x = e.offsetX - size / 2,
// 							y = e.offsetY - size / 2,
// 							wave = this.querySelector('.wave')
	
// 					// Create an element if it doesn't exist
// 					if (!wave) {
// 							wave = document.createElement('span')
// 							wave.className = 'wave'
// 					}
// 					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
// 					this.appendChild(wave)
// 			})
// 	})
// })






function popup(pr, popups, trigger) {

	const popup = document.querySelector(popups)
	const triggerPopup = document.querySelectorAll(trigger)
	const removePopup = popup.querySelectorAll('.remove_popup')
	const popupSubmit = popup.querySelector('button[type="submit"]')
	const popupLink = popup.querySelectorAll('.lang_link')


	
	Array.from(triggerPopup).map((item) => {
		item.addEventListener('click', () => {
			popup.classList.add('active');
			win.style.overflow = "hidden";
			win.style.paddingRight = pr; 
		})
	})


	Array.from(removePopup).map((item) => {
		item.addEventListener('click', () => {
			popup.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})


	if(popupSubmit) {

		popupSubmit.addEventListener('click', () => {
			popup.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	}

	Array.from(popupLink).map((item) => {
		item.addEventListener('click', () => {
			popup.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 

			getLang();
		})
	})
}

function getLang()  {
	let lang = document.querySelector('.current_lang')
	console.log(lang)

	const setLang = new Promise(function(resolve, reject) {
		setTimeout(() => {
			console.log('Get data ...')

			const data = {
				lang: 'EN',
				url: '/'
			}
			resolve(data)
		}, 1000)
	})

	setLang.then(data => {
		console.log('Data resolver', data.lang)
		lang.innerHTML = `${data.lang}`
	})
}

// function burgerMobile() {
// 	const triggerBurger = document.querySelector('.burger_trigger')
// 	const burgerPopup = document.querySelector('.burger')
// 	const burgerFail = document.querySelectorAll('.burger_closer')
	
// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	Array.from(burgerFail).map((item) => {
// 		item.addEventListener('click', () => {
// 			burgerPopup.classList.remove('active')
// 			win.style.overflow = "";
// 		})
// 	})

// }

// $(document).ready(function() {

// 	$(".forms_action input").on("blur input focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this.value) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
	
// 	$(".forms_action input").on("focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
// })



async function maps(street, city, size, mapSelector) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var maps = await new ymaps.Map(mapSelector, {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
						scroll: false,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(maps.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

					maps.geoObjects
					.add(myPlacemark)
			}
		);
	}
	await ymaps.ready(init);

}


function initTxtSlider() {
	
	let txtSlider = $("[data-slider-id]");
	$(txtSlider).each(function() {
			let swiper_slider_id = $(this).attr('data-slider-id');
			var swiper = new Swiper(".details_slider", {
					navigation: {
							nextEl: ".next",
							prevEl: ".prev",
					},
					pagination: {
						el: '.other_pug',
						dynamicBullets: true,
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						480: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						640: {
							slidesPerView: 1.6,
							spaceBetween: 30
						}
					}
			});
	});
}


const singleSlider = new Swiper('.single_slider', {
	wathOverflow: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".single_btn--next",
		prevEl: ".single_btn--prev",
	},
	pagination: {
		el: '.single_pug',
		dynamicBullets: true,
	},
})

const recomendationSlider = new Swiper('.reco_slider', {
	wathOverflow: true,
	navigation: {
		nextEl: ".reco_btn--next",
		prevEl: ".reco_btn--prev",
	},
	pagination: {
		el: '.reco_pug',
		dynamicBullets: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		}
	}
})



function submenu() {
	const bg = document.querySelector('.big_menu_bg')
	const trigger = document.querySelectorAll('.open_menu')

	trigger.forEach(item => {
		item.addEventListener('mouseover', function() {
			bg.style.display = "block";
		})
	});

	trigger.forEach(item => {
		item.addEventListener('mouseout', function() {
			bg.style.display = "none";
		})
	});

}

function burger() {
	const sidebar = document.querySelector('.sidebar_w')
	const trigger = document.querySelector('.header_burger')
	const bg = document.querySelector('.big_menu_bg')


	trigger.addEventListener('click', () => {
		bg.classList.toggle('active')
		trigger.classList.toggle('active')
		sidebar.classList.toggle('active')
	})

	bg.addEventListener('click', function() {
		this.classList.remove('active')
		sidebar.classList.remove('active')
		trigger.classList.remove('active')
	})
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 107 ) {
			$('.header').addClass('fixed');
	}   
	if( scrolled <= 107 ) {     
			$('.header').removeClass('fixed');
	}
});



ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [50.443705, 30.530946],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        menu = $('<ul class="dillers_list"></ul>');
        
    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup (group) {
        var menuItem = $('<li><a href="#result">' + group.name + '</a></li>'),
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style });
        myMap.geoObjects.add(collection);
        menuItem
            .appendTo(menu)
            .find('a')
            .bind('click', function () {
                if (collection.getParent()) {
                    myMap.geoObjects.remove(collection);
										// changeCity();

                } else {
                    myMap.geoObjects.add(collection);
                }
            });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection);
        }
    }

    function createSubMenu (item, collection) {
            placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });
        collection.add(placemark);
    }

    menu.appendTo($('.dillers_city_w'));
    myMap.setBounds(myMap.geoObjects.getBounds());
}

// Группы объектов
var groups = [
	{
			name: "Известные памятники",
			style: "islands#redIcon",
			items: [
					{
							center: [50.426472, 30.563022],
							name: "Монумент &quot;Родина-Мать&quot;"
					},
					{
							center: [50.45351, 30.516489],
							name: "Памятник &quot;Богдану Хмельницкому&quot;"
					},
					{
							center: [50.454433, 30.529874],
							name: "Арка Дружбы народов"
					}
			]},
	{
			name: "Покушайки",
			style: "islands#greenIcon",
			items: [
					{
							center: [50.50955, 30.60791],
							name: "Ресторан &quot;Калинка-Малинка&quot;"
					},
					{
							center: [50.429083, 30.521708],
							name: "Бар &quot;Сало-бар&quot;"
					},
					{
							center: [50.450843, 30.498271],
							name: "Абсент-бар &quot;Палата №6&quot;"
					},
					{
							center: [50.454834, 30.516498],
							name: "Ресторан &quot;Спотыкач&quot;"
					}
			]},
	{
			name: "Оригинальные музейчики",
			style: "islands#orangeIcon",
			items: [
					{
							center: [50.443334, 30.520163],
							name: "Музей грамзаписи и старинных музыкальных инструментов"
					},
					{
							center: [50.446977, 30.505269],
							name: "Музей истории медицины или Анатомический театр"
					},
					{
							center: [50.452512, 30.530889],
							name: "Музей воды. Водно-информационный центр"
					}
			]},
	{
			name: "Красивости",
			style: "islands#blueIcon",
			items: [
					{
							center: [50.45987, 30.516174],
							name: "Замок Ричарда-Львиное сердце"
					},
					{
							center: [50.445049, 30.528598],
							name: "&quot;Дом с химерами&quot;"
					},
					{
							center: [50.449156, 30.511809],
							name: "Дом Рыцаря"
					}
			]}
];

















































