function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [60.144095, 29.930985],
						zoom: 16,
						scroll: false,
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
				}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/logo.jpg',
						iconImageSize: [26, 35],
						iconImageOffset: [-5, -38]
				});
	
		myMap.geoObjects
				.add(myPlacemark)
	});
}

async function topCart(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
						scroll: false,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/wp-content/uploads/2022/09/mapss.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
			}
		);
	}
	await ymaps.ready(init);

}