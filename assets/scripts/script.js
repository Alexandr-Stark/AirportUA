const menuHeaderPlane = document.getElementById('menu-header_plane');

const menuHeader = document.getElementById('header-wrapper__menu-nav');

const menuHeaderService = document.getElementById('menu-header_service'); 

const menuHeaderDeal = document.getElementById('menu-header_deal'); 

const menuHeaderServiceTool = document.getElementById('menu-header_service-tool'); 
const menuHeaderDealTool = document.getElementById('menu-header_deal-tool'); 

const menuHeaderServiceToolClose  = document.getElementById('services-tool_close');
const menuHeaderDealToolClose  = document.getElementById('deal-tool_close');

const toolbarHeaderLang = document.getElementById('toolbar-header_lang-block');
const toolbarHeaderLangWind = document.getElementById('lang-body');

toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/ukraine.svg)");
menuHeaderPlane.style.setProperty("--custom-coordinate", "255px");
//document.getElementById('language-ua').classList.toggle('--disable');

const toolbarHeaderNav = document.getElementById('header-wrapper__toolbar-nav');
const toolbarMobileBtn = document.getElementById('toolbar-header-wrapper__mobile-btn');

const menuMobileBtn = document.getElementById('menu-header-wrapper__mobile-btn');

const overlay = document.getElementById('overlay');


menuHeaderPlane.addEventListener('click', function() {

    menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');
    menuHeaderService.classList.remove('menu-header-wrapper__service--active');
    menuHeaderDeal.classList.remove('menu-header-wrapper__deal--active');

    menuHeaderServiceTool.style.visibility = 'hidden';
    menuHeaderDealTool.style.visibility = 'hidden';

    menuHeaderServiceTool.style.height = '0px';
	menuHeaderServiceTool.style.opacity = '0';

	menuHeaderDealTool.style.height = '0px';
	menuHeaderDealTool.style.opacity = '0';

});

menuHeaderService.addEventListener('click', function() {

	if (menuHeaderServiceTool.style.visibility == 'visible') {

    	menuHeaderServiceTool.style.visibility = 'hidden';
		menuHeaderService.classList.remove('menu-header-wrapper__service--active');
		menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');
		menuHeaderServiceTool.style.height = '0px';
		menuHeaderServiceTool.style.opacity = '0';
    }
    else {
	    menuHeaderService.classList.add('menu-header-wrapper__service--active');
	    menuHeaderPlane.classList.remove('menu-header-wrapper__plane--active');
	    menuHeader.classList.remove('menu-header-wrapper--active');
	    menuHeaderDeal.classList.remove('menu-header-wrapper__deal--active');

	    menuHeaderServiceTool.style.visibility = 'visible';
	    menuHeaderDealTool.style.visibility = 'hidden';
	    menuHeaderDealTool.style.height = '0px';
		menuHeaderDealTool.style.opacity = '0';

	    menuHeaderServiceTool.style.height = '300px';
	    menuHeaderServiceTool.style.opacity = '1';
	}
});

menuHeaderDeal.addEventListener('click', function() {

	if (menuHeaderDealTool.style.visibility == 'visible') {

    	menuHeaderDealTool.style.visibility = 'hidden';
		menuHeaderDeal.classList.remove('menu-header-wrapper__deal--active');
		menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');
		menuHeaderDealTool.style.height = '0px';
		menuHeaderDealTool.style.opacity = '0';
    }
    else {

	    menuHeaderDeal.classList.add('menu-header-wrapper__deal--active');
	    menuHeaderPlane.classList.remove('menu-header-wrapper__plane--active');
	    menuHeader.classList.remove('menu-header-wrapper--active');
	    menuHeaderService.classList.remove('menu-header-wrapper__service--active');

	    menuHeaderDealTool.style.visibility = 'visible';
	    menuHeaderServiceTool.style.visibility = 'hidden';
	    menuHeaderServiceTool.style.height = '0px';
		menuHeaderServiceTool.style.opacity = '0';

	    menuHeaderDealTool.style.height = '300px';
	    menuHeaderDealTool.style.opacity = '1';
	}

});

menuHeaderServiceToolClose.addEventListener('click', function() {
	menuHeaderServiceTool.style.visibility = 'hidden';

	menuHeaderService.classList.remove('menu-header-wrapper__service--active');
	menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');
	menuHeaderServiceTool.style.height = '0px';
	menuHeaderServiceTool.style.opacity = '0';

	let a = menuMobileBtn.firstElementChild;
	menuMobileBtn.removeChild(a);
	menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_plane1" class="menu-header-wrapper__plane">${pageLanguageIs().flights}</a>`);
});

menuHeaderDealToolClose.addEventListener('click', function() {
	menuHeaderDealTool.style.visibility = 'hidden';

	menuHeaderDeal.classList.remove('menu-header-wrapper__deal--active');
	menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');
	menuHeaderDealTool.style.height = '0px';
	menuHeaderDealTool.style.opacity = '0';

	let a = menuMobileBtn.firstElementChild;
	menuMobileBtn.removeChild(a);
	menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_plane1" class="menu-header-wrapper__plane">${pageLanguageIs().flights}</a>`);
});

toolbarHeaderLang.addEventListener('click', function() {

	// if (toolbarHeaderLangWind.style.visibility == 'visible') {

	// 	toolbarHeaderLangWind.style.visibility = 'hidden';
	// 	toolbarHeaderLangWind.style.height = '13px';
	// 	toolbarHeaderLangWind.style.opacity = '0';
	// }
	// else{
	// 	toolbarHeaderLangWind.style.visibility = 'visible';
	// 	toolbarHeaderLangWind.style.height = '90px';
	// 	toolbarHeaderLangWind.style.opacity = '1';
	// }

	toolbarHeaderLangWind.classList.toggle('language-toolbar-header-wrapper__body--open');
	//document.getElementById('language-ua').classList.toggle('--disable');
});



function getLanguages(){

	let lan = document.querySelectorAll('.toolbar-header-wrapper__language p');
	let lanArr = Array.from(lan);
	lanArr.splice(0, 1);
	return lanArr;
}

document.getElementById('language-ua').addEventListener('click', function() {
	document.getElementById('currentLang').innerHTML = getLanguages()[0].innerText;

	document.getElementById('language-ua').classList.add('--disable');
	document.getElementById('language-ua').classList.remove('--active');

	document.getElementById('language-en').classList.add('--active');
	document.getElementById('language-en').classList.remove('--disable');

	document.getElementById('language-ru').classList.add('--active');
	document.getElementById('language-ru').classList.remove('--disable');

	toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/ukraine.svg)");
	menuHeaderPlane.style.setProperty("--custom-coordinate", "255px");

	window.onhashchange = doPageTranslate;

});

document.getElementById('language-en').addEventListener('click', function() {
	document.getElementById('currentLang').innerHTML = getLanguages()[1].innerText;
	// document.getElementById('language-en').style.display = 'none';

	// document.getElementById('language-ua').style.display = 'block';
	// document.getElementById('language-ru').style.display = 'block';

	document.getElementById('language-en').classList.add('--disable');
	document.getElementById('language-en').classList.remove('--active');

	document.getElementById('language-ua').classList.add('--active');
	document.getElementById('language-ua').classList.remove('--disable');

	document.getElementById('language-ru').classList.add('--active');
	document.getElementById('language-ru').classList.remove('--disable');

	 toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/united-states.svg)");
	 menuHeaderPlane.style.setProperty("--custom-coordinate", "270px");
	 
	 window.onhashchange = doPageTranslate;

});

document.getElementById('language-ru').addEventListener('click', function() {
	document.getElementById('currentLang').innerHTML = getLanguages()[2].innerText;

	document.getElementById('language-ru').classList.add('--disable');
	document.getElementById('language-ru').classList.remove('--active');

	document.getElementById('language-ua').classList.add('--active');
	document.getElementById('language-ua').classList.remove('--disable');

	document.getElementById('language-en').classList.add('--active');
	document.getElementById('language-en').classList.remove('--disable');

	toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/russia.svg)");
	menuHeaderPlane.style.setProperty("--custom-coordinate", "255px");

	window.onhashchange = doPageTranslate;
});


toolbarMobileBtn.addEventListener('click', function() {	
	
	toolbarHeaderNav.classList.toggle('header-wrapper__toolbar-nav--open');
	document.getElementById('currentLang').classList.remove('--active');
	document.getElementById('currentLang').classList.add('--disable');
	//toolbarHeaderLang.classList.toggle('--active');
	toolbarHeaderLangWind.classList.add('language-toolbar-header-wrapper__body--open');
	toolbarHeaderLangWind.classList.add('language-toolbar-header-wrapper__body-mobile--open');

	menuHeader.classList.remove('menu-header-wrapper--visible');

});

 window.addEventListener('resize', function(){
 	if (window.innerWidth > 1075) {
 		document.getElementById('currentLang').classList.remove('--disable');
 		document.getElementById('currentLang').classList.add('--active');
 		toolbarHeaderLangWind.classList.remove('language-toolbar-header-wrapper__body--open');
 		//console.log(`${window.innerWidth} >= 1075px`);
 		toolbarHeaderLangWind.classList.remove('language-toolbar-header-wrapper__body-mobile--open');
 		return true;
 	}
 	else if (window.innerWidth < 1075) {
 		document.getElementById('currentLang').classList.remove('--active');
 		document.getElementById('currentLang').classList.add('--disable');
 		toolbarHeaderLangWind.classList.add('language-toolbar-header-wrapper__body--open');	
 		//console.log(`${window.innerWidth} < 1075px`);
 		toolbarHeaderLangWind.classList.add('language-toolbar-header-wrapper__body-mobile--open');
 		return true;	
 	}
 	document.getElementById('currentLang').classList.remove('--active');
 	document.getElementById('currentLang').classList.add('--disable');
 	toolbarHeaderLangWind.classList.add('language-toolbar-header-wrapper__body--open');
 	return false;
});


 if (window.innerWidth < 701) {
		menuHeaderService.addEventListener('click', function() {
			let a = menuMobileBtn.firstElementChild;
			menuMobileBtn.removeChild(a);
			menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_service" class="menu-header-wrapper__services">${pageLanguageIs().services}</a>`);
		}); 

		menuHeaderDeal.addEventListener('click', function() {
			let a = menuMobileBtn.firstElementChild;
			menuMobileBtn.removeChild(a);
			menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_deal" class="menu-header-wrapper__deal">${pageLanguageIs().partners}</a>`);
		});

		// menuHeaderPlane.addEventListener('click', function() {
		// 	let a = menuMobileBtn.firstElementChild;
		// 	menuMobileBtn.removeChild(a);
		// 	menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_plane1" class="menu-header-wrapper__plane">${pageLanguageIs().flights}</a>`);
		// });

		// menuMobileBtn.addEventListener('click', function() {
		// 	let a = menuMobileBtn.firstElementChild;
		// 	menuMobileBtn.removeChild(a);
		// 	menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_plane1" class="menu-header-wrapper__plane">${pageLanguageIs().flights}</a>`);
		// });
 
 	}

 menuMobileBtn.addEventListener('click', function() {
 	menuHeader.classList.toggle('menu-header-wrapper--visible');

 	toolbarHeaderNav.classList.remove('header-wrapper__toolbar-nav--open');

 	menuHeaderServiceTool.style.visibility = 'hidden';
 	menuHeaderDealTool.style.visibility = 'hidden';
 });


 menuHeaderPlane.addEventListener('click', function() {
 	menuHeader.classList.remove('menu-header-wrapper--visible');
 });	

document.addEventListener("click", function (event) {
		if (event.target != toolbarHeaderLang && event.target != document.getElementById('currentLang')) {
			toolbarHeaderLangWind.classList.remove('language-toolbar-header-wrapper__body--open');
		}
		if (event.target != toolbarHeaderNav && event.target != toolbarMobileBtn && event.target != document.getElementById('toolbar-btn')) {
			toolbarHeaderNav.classList.remove('header-wrapper__toolbar-nav--open');
		}
		if (event.target != menuMobileBtn && event.target != document.getElementById('menu-header_plane1')) {
		 	menuHeader.classList.remove('menu-header-wrapper--visible');
		}
		if (event.target != menuHeaderService && event.target != menuHeaderDeal) {

			menuHeaderServiceTool.style.visibility = 'hidden';
		    menuHeaderServiceTool.style.height = '0px';
			menuHeaderServiceTool.style.opacity = '0';

			menuHeaderDealTool.style.visibility = 'hidden';
		    menuHeaderDealTool.style.height = '0px';
			menuHeaderDealTool.style.opacity = '0';

			let a = menuMobileBtn.firstElementChild;
			menuMobileBtn.removeChild(a);
			menuMobileBtn.insertAdjacentHTML('beforeend', `<a id="menu-header_plane1" class="menu-header-wrapper__plane">${pageLanguageIs().flights}</a>`);

			menuHeaderService.classList.remove('menu-header-wrapper__service--active');
			menuHeaderDeal.classList.remove('menu-header-wrapper__deal--active');
			menuHeaderPlane.classList.add('menu-header-wrapper__plane--active');

		}
	}
);


var slideIndex = [0, 0, 0];
showSliders();

function showSliders() {

  createSliders('slider-1', 'offers-block-1', 0);
  createSliders('slider-2', 'offers-block-2', 1);
  createSliders('slider-3', 'offers-block-3', 2);
;

  setTimeout(showSliders, 10000);
}


function createSliders(sliderByClassName, offerBlockId, counter) {
  var i;
  var slides = document.getElementsByClassName(sliderByClassName);

  var destinationPoint = document.querySelectorAll(`#${offerBlockId} .point-item-rout-block-content__city p`);

  var label = document.querySelector(`#${offerBlockId} .offer-content-wrapper__label p`);

  var dots = document.querySelectorAll(`#${offerBlockId} .offer-slider__btn`);
  //console.log(dots);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex[counter]++;
  if (slideIndex[counter] > slides.length || destinationPoint[slideIndex[counter]-1] === undefined) {slideIndex[counter] = 1; destinationPoint[slideIndex[counter]-1] = ''} 

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" offer-slider__btn--active", "");
  }

  slides[slideIndex[counter]-1].style.display = "block";
  dots[slideIndex[counter]-1].className += " offer-slider__btn--active";

  label.innerHTML = `${label.getAttribute('city-name')} - ` + destinationPoint[slideIndex[counter]-1].innerText;
  //console.log(destinationPoint[slideIndex-1].innerHTML);
}

function sliderPicker(sliderByClassName, offerBlockId, slidePosition, counter){

	var slides = document.getElementsByClassName(sliderByClassName);

	var destinationPoint = document.querySelectorAll(`#${offerBlockId} .point-item-rout-block-content__city p`);

  	var label = document.querySelector(`#${offerBlockId} .offer-content-wrapper__label p`);
  	var dots = document.querySelectorAll(`#${offerBlockId} .offer-slider__btn`);

	 for (var i = 0; i < slides.length; i++) {
	 	if(i == slidePosition) {
	 		slides[i].style.display = "block";
	 		label.innerHTML = `${label.getAttribute('city-name')} - ` + destinationPoint[i].innerText;

	 		(i == slides.length-1) ? slideIndex[counter] = i - i : slideIndex[counter] = i + 1;  
	 		dots[i].className += " offer-slider__btn--active";
	 	}
	 	else {
	 		slides[i].style.display = "none";
	 		dots[i].className = dots[i].className.replace(" offer-slider__btn--active", "");
	 	}
	 }
}

// 1
document.querySelector(`#offers-block-1 .offer-slider__btn-1`).addEventListener('click', function() {

	sliderPicker('slider-1', 'offers-block-1', 0, 0);

  });

document.querySelector(`#offers-block-1 .offer-slider__btn-2`).addEventListener('click', function() {

	sliderPicker('slider-1', 'offers-block-1', 1, 0);

  });

document.querySelector(`#offers-block-1 .offer-slider__btn-3`).addEventListener('click', function() {

	sliderPicker('slider-1', 'offers-block-1', 2, 0);

  });

document.querySelector(`#offers-block-1 .offer-slider__btn-4`).addEventListener('click', function() {

	sliderPicker('slider-1', 'offers-block-1', 3, 0);

  });

// 2 
document.querySelector(`#offers-block-2 .offer-slider__btn-1`).addEventListener('click', function() {

	sliderPicker('slider-2', 'offers-block-2', 0, 1);

  });

document.querySelector(`#offers-block-2 .offer-slider__btn-2`).addEventListener('click', function() {

	sliderPicker('slider-2', 'offers-block-2', 1, 1);

  });

document.querySelector(`#offers-block-2 .offer-slider__btn-3`).addEventListener('click', function() {

	sliderPicker('slider-2', 'offers-block-2', 2, 1);

  });

document.querySelector(`#offers-block-2 .offer-slider__btn-4`).addEventListener('click', function() {

	sliderPicker('slider-2', 'offers-block-2', 3, 1);

  });

// 3 
document.querySelector(`#offers-block-3 .offer-slider__btn-1`).addEventListener('click', function() {

	sliderPicker('slider-3', 'offers-block-3', 0, 2);

  });

document.querySelector(`#offers-block-3 .offer-slider__btn-2`).addEventListener('click', function() {

	sliderPicker('slider-3', 'offers-block-3', 1, 2);

  });

document.querySelector(`#offers-block-3 .offer-slider__btn-3`).addEventListener('click', function() {

	sliderPicker('slider-3', 'offers-block-3', 2, 2);

  });

document.querySelector(`#offers-block-3 .offer-slider__btn-4`).addEventListener('click', function() {

	sliderPicker('slider-3', 'offers-block-3', 3, 2);

  });


// 1

const offerBlock1FindButton = document.querySelectorAll(`#offers-block-1 .item-rout-block-content__btn`);
const offerBlock2FindButton = document.querySelectorAll(`#offers-block-2 .item-rout-block-content__btn`);
const offerBlock3FindButton = document.querySelectorAll(`#offers-block-3 .item-rout-block-content__btn`);
const inputFilterTables = document.getElementsByClassName('light-table-filter')[0];

offerBlock1FindButton[0].addEventListener('click', function() {
	findByOffer('offers-block-1', 0)
  });

offerBlock1FindButton[1].addEventListener('click', function() {
	findByOffer('offers-block-1', 1)
  });

offerBlock1FindButton[2].addEventListener('click', function() {
	findByOffer('offers-block-1', 2)
  });

offerBlock1FindButton[3].addEventListener('click', function() {
	findByOffer('offers-block-1', 3)
  });

// 2

offerBlock2FindButton[0].addEventListener('click', function() {
	findByOffer('offers-block-2', 0)
  });

offerBlock2FindButton[1].addEventListener('click', function() {
	findByOffer('offers-block-2', 1)
  });

offerBlock2FindButton[2].addEventListener('click', function() {
	findByOffer('offers-block-2', 2)
  });

offerBlock2FindButton[3].addEventListener('click', function() {
	findByOffer('offers-block-2', 3)
  });

// 3

offerBlock3FindButton[0].addEventListener('click', function() {
	findByOffer('offers-block-3', 0)
  });

offerBlock3FindButton[1].addEventListener('click', function() {
	findByOffer('offers-block-3', 1)
  });

offerBlock3FindButton[2].addEventListener('click', function() {
	findByOffer('offers-block-3', 2)
  });

offerBlock3FindButton[3].addEventListener('click', function() {
	findByOffer('offers-block-3', 3)
  });

function findByOffer(offerBlockId, offerItemNumber){

	var destinationPoint = document.querySelectorAll(`#${offerBlockId} .point-item-rout-block-content__city p`)[offerItemNumber];

  	var label = document.querySelector(`#${offerBlockId} .offer-content-wrapper__label p`);

  	let findValue = `${label.getAttribute('city-name')} - ${destinationPoint.innerHTML} `;

  	inputFilterTables.value = findValue;
}

function updateClock(){
	// const monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
	//   "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
	// ];

	// const dayNames = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

	let today = new Date();

	let day = today.getDate();
	let month = pageLanguageIs().monthNames[today.getMonth()];
	let year = today.getFullYear();
	let dayName = pageLanguageIs().dayNames[today.getDay()];
	let time = `${(today.getHours() < 10 ? '0' : '') + today.getHours()}:${(today.getMinutes() < 10 ? '0' : '') + today.getMinutes()}:${(today.getSeconds() < 10 ? '0' : '') + today.getSeconds()}`;

	document.getElementById("current_day").innerHTML = day;
	document.getElementById("current_month").innerHTML = month;
	document.getElementById("current_year").innerHTML = year;
	document.getElementById("current_dayName").innerHTML = dayName;
	document.getElementById("current_time").innerHTML = time;

	setTimeout(updateClock, 1000);
}

updateClock();

function pageLanguageIs(){
	const language = {
		ukr: {
			flights: 'Авіарейси',
			services: 'Послуги',
			partners: 'Партнери',
			login: 'Вхід в особистий кабінет',
			searchTitle: 'Знайти всі доступні рейси',
			searchInput: 'Номер рейса або Пункт відправлення / призначення або Дату відправлення / призначення',
			offersTitle: 'Найкращі пропозиції',
			offersSubTitle: 'Популярні рейси з міст України',
			offerCityNameLabel: {0: 'Київ', 1: 'Львів', 2: 'Чернівці'},
			offersCityRoutItem: {
				offersBlock1: {
					0: {
						city: 'Нью-Йорк',
						country: 'США'
					}, 
					1: {
						city: 'Варшава',
						country: 'Польща'
					}, 
					2: {
						city: 'Ванкувер',
						country: 'Канада'
					}, 
					3: {
						city: 'Мілан',
						country: 'Італія'
					},
				},
				offersBlock2: {
					0: {
						city: 'Афіни',
						country: 'Греція'
					}, 
					1: {
						city: 'Барселона',
						country: 'Іспанія'
					}, 
					2: {
						city: 'Рим',
						country: 'Італія'
					}, 
					3: {
						city: 'Берлін',
						country: 'Німеччина'
					},
				},
				offersBlock3: {
					0: {
						city: 'Київ',
						country: 'Україна'
					}, 
					1: {
						city: 'Львів',
						country: 'Україна'
					}, 
					2: {
						city: 'Одеса',
						country: 'Україна'
					}, 
					3: {
						city: 'Мілан',
						country: 'Італія'
					}
				},
			},
			offersFindButton: 'Знайти',
			offersPricePrefix: 'від',
			offersPriceCurrency: 'грн',
			footerContentDescription: 'Авіаперельоти - це відмінна альтернатива залізничному або автомобільному транспорту. Подорож на літаку відрізняється швидкістю пересування, комфортом, високим рівнем сервісу. Якщо ви обмежені в часі, найкращим рішенням буде придбати <strong>авіаквитки</strong>.',
			footerContentTitle: 'Авія AIRPORTUA™',
			monthNames: {
				0: 'Січень',
				1: 'Лютий',
				2: 'Березень',
				3: 'Квітень',
				4: 'Травень',
				5: 'Червень',
				6: 'Липень',
				7: 'Серпень',
				8: 'Вересень',
				9: 'Жовтень',
				10: 'Листопад',
				11: 'Грудень'
			},
			dayNames: {
				0: 'Неділя',
				1: 'Понеділок',
				2: 'Вівторок',
				3: 'Середа',
				4: 'Четвер',
				5: 'П`ятниця',
				6: 'Субота'
			},
			tableHeadersName: {
				0: 'Маршрут',
				1: 'Рейс',
				2: 'Дні вильоту',
				3: 'Дата'
			},
			tableHeadersNameMob: {
				0: 'Рейс',
				1: 'Дні вильоту',
				2: 'Дата'
			},
			tableSearchResult: 'Результат за пошуком.',
			documentTitle: 'Авіарейси - AIRPORT UA™'	
		},
		eng: {
			flights: 'Flights',
			services: 'Services',
			partners: 'Partners',
			login: 'Login to the personal account',
			searchTitle: 'Find all available flights',
			searchInput: 'Flight number or Point of departure / destination or Date of departure / destination',
			offersTitle: 'The best offers',
			offersSubTitle: 'Popular flights from Ukrainian cities',
			offerCityNameLabel: {0: 'Kiev', 1: 'Lviv', 2: 'Chernivtsi'},
			offersCityRoutItem: {
				offersBlock1: {
					0: {
						city: 'New York',
						country: 'USA'
					}, 
					1: {
						city: 'Warsaw',
						country: 'Poland'
					}, 
					2: {
						city: 'Vancouver',
						country: 'Canada'
					}, 
					3: {
						city: 'Milan',
						country: 'Italy'
					},
				},
				offersBlock2: {
					0: {
						city: 'Athens',
						country: 'Greece'
					}, 
					1: {
						city: 'Barcelona',
						country: 'Spain'
					}, 
					2: {
						city: 'Roma',
						country: 'Italy'
					}, 
					3: {
						city: 'Berlin',
						country: 'Germany'
					},
				},
				offersBlock3: {
					0: {
						city: 'Kiev',
						country: 'Ukraine'
					}, 
					1: {
						city: 'Lviv',
						country: 'Ukraine'
					}, 
					2: {
						city: 'Odessa',
						country: 'Ukraine'
					}, 
					3: {
						city: 'Milan',
						country: 'Italy'
					}
				},
			},
			offersFindButton: 'Find',
			offersPricePrefix: 'from',
			offersPriceCurrency: 'uan',
			footerContentDescription: 'Air travel is a great alternative to rail or road transport. Travel on the plane differs in speed, comfort, high level of service. If you limited in time, the best solution is to buy <strong>tickets</strong>.',
			footerContentTitle: 'Avia AIRPORTUA™',
			monthNames: {
				0: 'January',
				1: 'February',
				2: 'March',
				3: 'April',
				4: 'May',
				5: 'June',
				6: 'July',
				7: 'August',
				8: 'September',
				9: 'October',
				10: 'November',
				11: 'December'
			},
			dayNames: {
				0: 'Sunday',
				1: 'Monday',
				2: 'Tuesday',
				3: 'Wednesday',
				4: 'Thursday',
				5: 'Friday',
				6: 'Saturday'
			},
			tableHeadersName: {
				0: 'Rout',
				1: 'Flight',
				2: 'Departure days',
				3: 'Date'
			},
			tableHeadersNameMob: {
				0: 'Flight',
				1: 'Departure days',
				2: 'Date'
			},
			tableSearchResult: 'Search result.',
			documentTitle: 'Flights - AIRPORT UA™'
		},
		rus: {
			flights: 'Авиарейсы',
			services: 'Услуги',
			partners: 'Партнеры',
			login: 'Вход в личный кабинет',
			searchTitle: 'Найти все доступные рейсы',
			searchInput: 'Номер рейса или Пункт отправления / назначения или Дату отправления / назначения',
			offersTitle: 'Лучшие предложения',
			offersSubTitle: 'Популярные рейсы из городов Украины',
			offerCityNameLabel: {0: 'Киев', 1: 'Львов', 2: 'Черновцы'},
			offersCityRoutItem: {
				offersBlock1: {
					0: {
						city: 'Нью-Йорк',
						country: 'США'
					}, 
					1: {
						city: 'Варшава',
						country: 'Польша'
					}, 
					2: {
						city: 'Ванкувер',
						country: 'Канада'
					}, 
					3: {
						city: 'Милан',
						country: 'Италия'
					},
				},
				offersBlock2: {
					0: {
						city: 'Афины',
						country: 'Греция'
					}, 
					1: {
						city: 'Барселона',
						country: 'Испания'
					}, 
					2: {
						city: 'Рим',
						country: 'Италия'
					}, 
					3: {
						city: 'Берлин',
						country: 'Германия'
					},
				},
				offersBlock3: {
					0: {
						city: 'Киев',
						country: 'Украина'
					}, 
					1: {
						city: 'Львов',
						country: 'Украина'
					}, 
					2: {
						city: 'Одесса',
						country: 'Украина'
					}, 
					3: {
						city: 'Милан',
						country: 'Италия'
					}
				},
			},
			offersFindButton: 'Найти',
			offersPricePrefix: 'от',
			offersPriceCurrency: 'грн',
			footerContentDescription: 'Авиаперелеты - это отличная альтернатива железнодорожном или автомобильном транспорта. путешествие на самолете отличается скоростью передвижения, комфортом, высоким уровнем сервиса. если вы ограничены во времени, лучшим решением будет приобрести <strong>авиабилеты</strong>.',
			footerContentTitle: 'Авиа AIRPORTUA™',
			monthNames: {
				0: 'Январь',
				1: 'Февраль',
				2: 'Март',
				3: 'Апрель',
				4: 'Май',
				5: 'Июнь',
				6: 'Июль',
				7: 'Август',
				8: 'Сентябрь',
				9: 'Октябрь',
				10: 'Ноябрь',
				11: 'Декабрь'
			},
			dayNames: {
				0: 'Воскресенье',
				1: 'Понедельник',
				2: 'Вторник',
				3: 'Среда',
				4: 'Четверг',
				5: 'Пятница',
				6: 'Суббота'
			},
			tableHeadersName: {
				0: 'Маршрут',
				1: 'Рейс',
				2: 'Дни вылета',
				3: 'Дата'
			},
			tableHeadersNameMob: {
				0: 'Рейс',
				1: 'Дни вылета',
				2: 'Дата'
			},
			tableSearchResult: 'Результат по поиску.',
			documentTitle: 'Авиарейсы - AIRPORT UA™'
		}


	};

	if (window.location.hash) {
		//if (window.location.hash === '#ua') {}
		switch(window.location.hash){
			case '#en':
    			return language.eng;
    			break;
    		case '#ua':
    			return language.ukr;
    			break;
    		case '#ru':
    			return language.rus;
    			break;
		}
	}
	window.location.hash = '#ua';
	return language.ukr;
}

function doPageTranslate(){

	switch(window.location.hash){
		case '#en':
			document.getElementById('currentLang').innerHTML = getLanguages()[1].textContent;

			document.getElementById('language-en').classList.add('--disable');
			document.getElementById('language-en').classList.remove('--active');

			document.getElementById('language-ua').classList.add('--active');
			document.getElementById('language-ua').classList.remove('--disable');

			document.getElementById('language-ru').classList.add('--active');
			document.getElementById('language-ru').classList.remove('--disable');

			toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/united-states.svg)");
			menuHeaderPlane.style.setProperty("--custom-coordinate", "270px");
    		break;
    	case '#ua':
	    	document.getElementById('currentLang').innerHTML = getLanguages()[0].textContent;

			document.getElementById('language-ua').classList.add('--disable');
			document.getElementById('language-ua').classList.remove('--active');

			document.getElementById('language-en').classList.add('--active');
			document.getElementById('language-en').classList.remove('--disable');

			document.getElementById('language-ru').classList.add('--active');
			document.getElementById('language-ru').classList.remove('--disable');

			toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/ukraine.svg)");
			menuHeaderPlane.style.setProperty("--custom-coordinate", "255px");
    		break;
    	case '#ru':
    		document.getElementById('currentLang').innerHTML = getLanguages()[2].textContent;
			document.getElementById('language-ru').classList.add('--disable');
			document.getElementById('language-ru').classList.remove('--active');

			document.getElementById('language-ua').classList.add('--active');
			document.getElementById('language-ua').classList.remove('--disable');

			document.getElementById('language-en').classList.add('--active');
			document.getElementById('language-en').classList.remove('--disable');

			toolbarHeaderLang.style.setProperty("--custom-icon", "url(../images/russia.svg)");
			menuHeaderPlane.style.setProperty("--custom-coordinate", "255px");
    		break;
	}
	document.getElementById('document-title').innerText = pageLanguageIs().documentTitle;
	menuHeaderPlane.innerText = pageLanguageIs().flights;
    menuHeaderService.innerText = pageLanguageIs().services;
    menuHeaderDeal.innerText = pageLanguageIs().partners;
    document.getElementById('header-login').innerText = pageLanguageIs().login;
    document.getElementsByClassName('searcher-content-wrappe__title')[0].innerText = pageLanguageIs().searchTitle;
    document.getElementsByClassName('light-table-filter')[0].setAttribute('placeholder', pageLanguageIs().searchInput);
    document.querySelector('.offers-content-wrapper__title p').innerText = pageLanguageIs().offersTitle;
    document.querySelector('.offers-content-wrapper__subtitle p').innerText = pageLanguageIs().offersSubTitle;
    document.getElementById('menu-header_plane1').innerText = pageLanguageIs().flights;

    document.querySelector(`#offers-block-1 .offer-content-wrapper__label p`).setAttribute('city-name', pageLanguageIs().offerCityNameLabel['0']);
    document.querySelector(`#offers-block-2 .offer-content-wrapper__label p`).setAttribute('city-name', pageLanguageIs().offerCityNameLabel['1']);
    document.querySelector(`#offers-block-3 .offer-content-wrapper__label p`).setAttribute('city-name', pageLanguageIs().offerCityNameLabel['2']);

    helperToTranslateRoutItem('offers-block-1', 'offersBlock1');
    helperToTranslateRoutItem('offers-block-2', 'offersBlock2');
    helperToTranslateRoutItem('offers-block-3', 'offersBlock3');

    helperToTranslateTableHeader('THshed-table-1', 'tableHeadersName');
    helperToTranslateTableHeader('THshed-table-2', 'tableHeadersNameMob');
    helperToTranslateTableHeader('THshed-table-3', 'tableHeadersNameMob');
    helperToTranslateTableHeader('THshed-table-4', 'tableHeadersNameMob');
    helperToTranslateTableHeader('THshed-table-5', 'tableHeadersNameMob');

    document.getElementsByClassName('table-search-result')[0].innerText = pageLanguageIs().tableSearchResult;

    document.querySelector('.content-footer-wrapper__description h2').innerText = pageLanguageIs().footerContentTitle;
    document.querySelector('.content-footer-wrapper__description p').innerHTML = pageLanguageIs().footerContentDescription;


}

function helperToTranslateRoutItem(offerBlockId, translateId){
	let routItemCity = document.querySelectorAll(`#${offerBlockId} .point-item-rout-block-content__city p`);
    let routItemCountry = document.querySelectorAll(`#${offerBlockId} .point-item-rout-block-content__country p`);

    let routItemFindBtn = document.querySelectorAll(`#${offerBlockId} .item-rout-block-content__btn`);
    let routItemPricePrefix = document.querySelectorAll(`#${offerBlockId} .price-item-rout-block-content__price-prefix`);
    let routItemPriceCurrency = document.querySelectorAll(`#${offerBlockId} .price-item-rout-block-content__price-currency`);

    Array.from(routItemCity).forEach( (item, index, routItemCity) => routItemCity[index].innerText = pageLanguageIs().offersCityRoutItem[`${translateId}`][index].city);
    Array.from(routItemCountry).forEach( (item, index, routItemCountry) => routItemCountry[index].innerText = pageLanguageIs().offersCityRoutItem[`${translateId}`][index].country);

    Array.from(routItemFindBtn).forEach( (item, index, routItemFindBtn) => routItemFindBtn[index].innerText = pageLanguageIs().offersFindButton);
    Array.from(routItemPricePrefix).forEach( (item, index, routItemPricePrefix) => routItemPricePrefix[index].innerText = pageLanguageIs().offersPricePrefix);
    Array.from(routItemPriceCurrency).forEach( (item, index, routItemPriceCurrency) => routItemPriceCurrency[index].innerText = pageLanguageIs().offersPriceCurrency);
}

function helperToTranslateTableHeader(headerId, translateId){
	let tableHeaders = document.querySelectorAll(`#${headerId}`);
	Array.from(tableHeaders).forEach((item, index, tableHeaders) => tableHeaders[index].innerText = pageLanguageIs()[`${translateId}`][index]);
}


window.onhashchange = doPageTranslate;

function scrollSmoothTo(elementId) {
  let element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}


window.location.hash = '#ua';



