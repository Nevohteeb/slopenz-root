

(function() {
  'use strict';

	$(window).load(function() {
		$(".loader-cont").delay(7000).fadeOut(250);
	});

  // Bring back Map Buttons on Page Load:
  $(".map-button").show();

  // --------------------- VARIABLES -----------------------------

  // DATA VARIABLES FOR ACCOMODATION:

  var hotelData = {
    hostel: {
      pricePerNight: 30,
      minNight: 1,
      maxNight: 10,
      minCapacity: 1,
      maxCapacity: 1,
    },
    motel: {
      pricePerNight: 90,
      minNight: 3,
      maxNight: 10,
      minCapacity: 2,
      maxCapacity: 4,
    },
    hotel: {
      pricePerNight: 157,
      minNight: 1,
      maxNight: 5,
      minCapacity: 1,
      maxCapacity: 2,
    },
    house: {
      pricePerNight: 240,
      minNight: 2,
      maxNight: 15,
      minCapacity: 1,
      maxCapacity: 4,
    }
  };




// --------------------- PLUGINS BEGIN --------------------

// Fullpage Begins:

  $('#fullpage').fullpage({
    css3: true,
    verticalCentered: true,
    resize: true,
    sectionSelector: '.section',
    slideSelector: '.slide'
  });

  $.fn.fullpage.setAllowScrolling(false);

  // Textillate Begins:
  function doText () {
    $('.tlt').textillate({
      in: {
        effect: 'fadeInLeft',
        sync: true,
        delay: 1750
      }
    });
  }

  doText();

  //  Slick Carousel:

  $('.outputRight').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
		infinite: false
  });

  // Parlsey Validation:

  var form = $('#parent').parsley();
  $('#parent').find('#submitBtn').click(function() {
    form.validate();
  });

  form.subscribe('parsley:form:success', function(e) {
    $.fn.fullpage.moveSlideRight();
  });

  // Parsley Ends




  // - - - - - - - - -   Mapbox Begins - - - - - - - - - - - -


  // Ski Field Map Begins:

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJja3A0b2RvNXQwZHZsMm5vdzJhMzlneHliIn0.GePUzyfjdyGc0pnYNPerqA';
  var map = new mapboxgl.Map({
    container: 'skiFieldMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [168.66151801775683, -45.0303343381692],
    zoom: 8,
  });

  map.addControl(new mapboxgl.FullscreenControl());

  var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [168.9492151232965, -44.8731916471041]
        },
        properties: {
          title: '<a href="https://www.cardrona.com/">Cardrona Website</a><br><img src="img/cardrona.jpg" alt="Cardrona Ski Resort" width="100">',
          description: "<strong>Cardrona Alpine Resort</strong><p>Cardrona Alpine Resort is an alpine resort in New Zealand's South Island. The ski field ranges from 1,260m to 1,860m. The distribution of slopes is 25% beginner, 25% intermediate, 30% advanced and 20% expert.</p>"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [168.81431482752348, -45.053887576329835]
        },
        properties: {
          title: '<a href="https://www.theremarkables.co.nz/">The Remarkables</a><br><img src="img/remark.jpg" alt="The Remarkables" width="100">',
          description: "<strong>The Remarkables</strong><p>A true alpine mountain experience with terrain and facilities to suit everyone from first timers to seasoned, expert skiers and snowboarders! They offer ski and snowboard lessons, equipment rental, scenic chairlift rides, snow sledding and a massive range of food and beverage options.</p>"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [168.89604382751347, -44.63336775246554]
        },
        properties: {
          title: '<a href="https://www.treblecone.com/">Treble Cone</a><br><img src="img/treble.jpg" alt="Treble Cone" width="100">',
          description: "<strong>Treble Cone</strong><p>Treble Cone is the closest ski area to Wanaka, New Zealand. Treble Cone is the largest ski area in the South Island, boasting the longest vertical rise in the Queenstown Southern Lakes District.</p>"
        }
      }
    ]
  };

  geojson.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({
          offset: 25
        })
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
  });

  // Fly to Click Events:

  document.getElementById('flyA').addEventListener('click', function() {
    map.flyTo({
      center: [
        168.9492151232965, -44.8731916471041
      ],
      zoom: 15,
      essential: true
    });
  });

  document.getElementById('flyB').addEventListener('click', function() {
    map.flyTo({
      center: [
        168.81431482752348, -45.053887576329835
      ],
      zoom: 15,
      essential: true
    });
  });

  document.getElementById('flyC').addEventListener('click', function() {
    map.flyTo({
      center: [
        168.89604382751347, -44.63336775246554
      ],
      zoom: 15,
      essential: true
    });
  });
  // Ski Field Map Ends



  // Accomodation Map Begins

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJja3A0b2RvNXQwZHZsMm5vdzJhMzlneHliIn0.GePUzyfjdyGc0pnYNPerqA';
  var map2 = new mapboxgl.Map({
    container: 'accomodationMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [168.66151801775683, -45.0303343381692],
    zoom: 11.15
  });

  map2.addControl(new mapboxgl.FullscreenControl());

  map2.on('load', function() {
    map2.addSource('places', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'properties': {
              'description': '<a href="https://www.treblecone.com/">Treble Cone</a><br><img src="img/treble.jpg" alt="Treble Cone" width="100"><br><p>Treble Cone is the closest ski area to Wanaka, New Zealand. Treble Cone is the largest ski area in the South Island, boasting the longest vertical rise in the Queenstown Southern Lakes District.</p>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [168.89604382751347, -44.63336775246554]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.003168, 38.894651]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.090372, 38.881189]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': '<strong>Ballston Arts & Crafts Market</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.111561, 38.882342]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>"
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.052477, 38.943951]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': '<strong>Capital Pride Parade</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.043444, 38.909664]
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description': '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist Muhsinah plays the Black Cat (1811 14th Street NW) tonight with Exit Clov and Gods’illa. 9:00 p.m. $12.</p>'
            }
          }
        ]
      }
    });
    // Add a layer showing the places.
    map2.addLayer({
      'id': 'places',
      'type': 'circle',
      'source': 'places',
      'paint': {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    map2.on('mouseenter', 'places', function(e) {
      // Change the cursor style as a UI indicator.
      map2.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(description).addTo(map2);
    });

    map2.on('mouseleave', 'places', function() {
      map2.getCanvas().style.cursor = '';
      popup.remove();
    });
  });
  // Accomodation Map Ends

  //  MAP BOX ENDS

  // --------------------- VIEW ON MAP on CLICKS ----------------------

  function viewOnMapCardronaHostel () {
    map2.flyTo({
      center: [
        169.13219559174127, -44.68893813243455
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.13219559174127, -44.68893813243455])
      .addTo(map2);
  }

  function viewOnMapCardronaHotel () {
    map2.flyTo({
      center: [
        169.1124773942083, -44.694874763845164
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.1124773942083, -44.694874763845164])
      .addTo(map2);
  }

  function viewOnMapCardronaMotel () {
    map2.flyTo({
      center: [
        169.00366437116998, -44.87981089694391
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.00366437116998, -44.87981089694391])
      .addTo(map2);
  }

  function viewOnMapCardronaHouse () {
    map2.flyTo({
      center: [
        169.00347125213642, -44.8828897581751
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.00347125213642, -44.8828897581751])
      .addTo(map2);
  }

  function viewOnMapTrebleHostel () {
    map2.flyTo({
      center: [
        169.13219559174127, -44.68893813243455
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.13219559174127, -44.68893813243455])
      .addTo(map2);
  }

  function viewOnMapTrebleHotel () {
    map2.flyTo({
      center: [
        169.10931640646848, -44.70004173622024
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.10931640646848, -44.70004173622024])
      .addTo(map2);
  }

  function viewOnMapTrebleMotel () {
    map2.flyTo({
      center: [
        169.10930793408215, -44.70071663279667
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.10930793408215, -44.70071663279667])
      .addTo(map2);
  }

  function viewOnMapTrebleHouse () {
    map2.flyTo({
      center: [
        169.11144297228662, -44.700975914736674
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([169.11144297228662, -44.700975914736674])
      .addTo(map2);
  }

  function viewOnMapRemarkHostel () {
    map2.flyTo({
      center: [
        168.7218454959018, -45.01662425610656,
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([168.7218454959018, -45.01662425610656])
      .addTo(map2);
  }

  function viewOnMapRemarkHotel () {
    map2.flyTo({
      center: [
        168.75496879470174, -45.076871556951126
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([168.75496879470174, -45.076871556951126])
      .addTo(map2);
  }

  function viewOnMapRemarkMotel () {
    map2.flyTo({
      center: [
        168.75433918868447, -45.07581331256583
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([168.75433918868447, -45.07581331256583])
      .addTo(map2);
  }

  function viewOnMapRemarkHouse () {
    map2.flyTo({
      center: [
        168.73088242104754, -45.02902556915285
      ],
      zoom: 15,
      essential: true
    });
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([168.73088242104754, -45.02902556915285])
      .addTo(map2);
  }

  // -------------------- CLICK FUNCTIONS ----------------------------

  $('#submitBtn').click(function() {

    // Input Variables
    var skifeildInput = document.getElementById('skifieldInput');
    var getNightInput = document.getElementById('nightInput');
    var nightInput = parseInt(getNightInput.value);
    var getGuestInput = document.getElementById('guestInput');
    var guestInput = parseInt(getGuestInput.value);

    // Get Card Elements:

    // Images
    var accomImage = document.getElementById('accomImage');
    var accomImage2 = document.getElementById('accomImage2');
    var accomImage3 = document.getElementById('accomImage3');
    var accomImage4 = document.getElementById('accomImage4');
    var accomImage5 = document.getElementById('accomImage5');
    var accomImage6 = document.getElementById('accomImage6');

    // Accomodation Name
    var accomName = document.getElementById('accomName');
    var accomName2 = document.getElementById('accomName2');
    var accomName3 = document.getElementById('accomName3');
    var accomName4 = document.getElementById('accomName4');
    var accomName5 = document.getElementById('accomName5');
    var accomName6 = document.getElementById('accomName6');

    // Price Per Night
    var pricePerNight = document.getElementById('pricePerNight');
    var pricePerNight2 = document.getElementById('pricePerNight2');
    var pricePerNight3 = document.getElementById('pricePerNight3');
    var pricePerNight4 = document.getElementById('pricePerNight4');
    var pricePerNight5 = document.getElementById('pricePerNight5');
    var pricePerNight6 = document.getElementById('pricePerNight6');

    // Min Night
    var minNight = document.getElementById('minNight');
    var minNight2 = document.getElementById('minNight2');
    var minNight3 = document.getElementById('minNight3');
    var minNight4 = document.getElementById('minNight4');
    var minNight5 = document.getElementById('minNight5');
    var minNight6 = document.getElementById('minNight6');

    // Max Night
    var maxNight = document.getElementById('maxNight');
    var maxNight2 = document.getElementById('maxNight2');
    var maxNight3 = document.getElementById('maxNight3');
    var maxNight4 = document.getElementById('maxNight4');
    var maxNight5 = document.getElementById('maxNight5');
    var maxNight6 = document.getElementById('maxNight6');

    // Min Guest
    var minGuest = document.getElementById('minGuest');
    var minGuest2 = document.getElementById('minGuest2');
    var minGuest3 = document.getElementById('minGuest3');
    var minGuest4 = document.getElementById('minGuest4');
    var minGuest5 = document.getElementById('minGuest5');
    var minGuest6 = document.getElementById('minGuest6');

    // Max Guest
    var maxGuest = document.getElementById('minGuest');
    var maxGuest2 = document.getElementById('minGuest2');
    var maxGuest3 = document.getElementById('minGuest3');
    var maxGuest4 = document.getElementById('minGuest4');
    var maxGuest5 = document.getElementById('minGuest5');
    var maxGuest6 = document.getElementById('minGuest6');

    // Ammenites Removal
    var wifi = document.getElementById('wifi');
    var wifi2 = document.getElementById('wifi2');
    var disabled = document.getElementById('disabled');
    var disabled2 = document.getElementById('disabled2');
    var family = document.getElementById('family');
    var family2 = document.getElementById('family2');


    // ---------------- CONDITIONALS -----------------
    // ** Conditionals are organized into sections based on location **

		// *** SKI FIELD INPUT VALUES:
		// 1 = Cardrona
		// 2 = Treble Cone
		// 3 = The Remarkables

    // ----Treble Cone:------

    // Hostel & Hotel

    if ((skifeildInput.value == '2') && (getGuestInput.value == 1) && (getNightInput.value <= 1)) {

      // Change Image
      accomImage.src = 'img/card-images/treb-hostel-1.jpg';
      accomImage2.src = 'img/card-images/treb-hostel-2.jpg';
      accomImage3.src = 'img/card-images/treb-hotel-1.jpg';
      accomImage4.src = 'img/card-images/treb-hotel-2.jpg';
      accomImage5.src = 'img/card-images/treb-hotel-3.jpg';
      accomImage6.src = 'img/card-images/treb-hotel-4.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone Hostel';
      accomName2.textContent = 'Treble Cone Hostel';
      accomName3.textContent = 'Treble Cone Hotel';
      accomName4.textContent = 'Treble Cone Hotel';
      accomName5.textContent = 'Treble Cone Hotel';
      accomName6.textContent = 'Treble Cone Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

			// Remove ammenities
			wifi.style.color='#FFFFFF';
			wifi2.style.color='#FFFFFF';
			disabled.style.color='#FFFFFF';
			disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleHostel);

      $('#viewOnMapBtn2').click(viewOnMapTrebleHostel);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHotel);

    }

    // Hotel & House

  else if ((skifeildInput.value === '2') && (getGuestInput.value == 2) && (getNightInput.value <= 10)) {

		// Change Image
		accomImage.src = 'img/card-images/treb-hotel-1.jpg';
		accomImage2.src = 'img/card-images/treb-hotel-2.jpg';
		accomImage3.src = 'img/card-images/treb-hotel-3.jpg';
		accomImage4.src = 'img/card-images/treb-house-1.jpg';
		accomImage5.src = 'img/card-images/treb-house-2.jpg';
		accomImage6.src = 'img/card-images/treb-house-3.jpg';

    // Change Accomodation
    accomName.textContent = 'Treble Cone Hotel';
    accomName2.textContent = 'Treble Cone Hotel';
    accomName3.textContent = 'Treble Cone Hotel';
    accomName4.textContent = 'Treble Cone House';
    accomName5.textContent = 'Treble Cone House';
    accomName6.textContent = 'Treble Cone House';

    // Change Price Per Night
    pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
    pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
    pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
    pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
    pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
    pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

    // Change Min Nights
    minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
    minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
    minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
    minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
    minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
    minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

    // Change Max Nights
    maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
    maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
    maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
    maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
    maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
    maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

    // Change Min Guests
    minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
    minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
    minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
    minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
    minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
    minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

    // Change Max Guests
    maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
    maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
    maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
    maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
    maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
    maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

    // View On Map On Clicks:
    $('#viewOnMapBtn1').click(viewOnMapTrebleHotel);

    $('#viewOnMapBtn2').click(viewOnMapTrebleHotel);

    $('#viewOnMapBtn3').click(viewOnMapTrebleHotel);

    $('#viewOnMapBtn4').click(viewOnMapTrebleHouse);

    $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

    $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }

    // Hostel, Hotel & House
    else if ((skifeildInput.value == '2') && (getGuestInput.value == 1) && (getNightInput.value <= 5)) {

      // Change Image
			// Change Image
      accomImage.src = 'img/card-images/treb-hostel-1.jpg';
      accomImage2.src = 'img/card-images/treb-hostel-2.jpg';
      accomImage3.src = 'img/card-images/treb-hotel-1.jpg';
      accomImage4.src = 'img/card-images/treb-hotel-2.jpg';
      accomImage5.src = 'img/card-images/treb-house-1.jpg';
      accomImage6.src = 'img/card-images/treb-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone Hostel';
      accomName2.textContent = 'Treble Cone Hostel';
      accomName3.textContent = 'Treble Cone Hotel';
      accomName4.textContent = 'Treble Cone Hotel';
      accomName5.textContent = 'Treble Cone House';
      accomName6.textContent = 'Treble Cone House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

			// Remove ammenities
			wifi.style.color='#FFFFFF';
			wifi2.style.color='#FFFFFF';
			disabled.style.color='#FFFFFF';
			disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleHostel);

      $('#viewOnMapBtn2').click(viewOnMapTrebleHostel);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }

    // House

    else if ((skifeildInput.value == '2') && (getGuestInput.value == 1) && (getNightInput.value >= 10)) {

      // Change Image
      accomImage.src = 'img/card-images/treb-house-1.jpg';
      accomImage2.src = 'img/card-images/treb-house-2.jpg';
      accomImage3.src = 'img/card-images/treb-house-3.jpg';
      accomImage4.src = 'img/card-images/treb-house-4.jpg';
      accomImage5.src = 'img/card-images/treb-house-5.jpg';
      accomImage6.src = 'img/card-images/treb-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone House';
      accomName2.textContent = 'Treble Cone House';
      accomName3.textContent = 'Treble Cone House';
      accomName4.textContent = 'Treble Cone House';
      accomName5.textContent = 'Treble Cone House';
      accomName6.textContent = 'Treble Cone House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn2').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }

    // House
    else if ((skifeildInput.value == '2') && ((getNightInput.value == 2) || (getNightInput.value > 10)) && ((getGuestInput.value == 3) || (getGuestInput.value == 4)))    {

			// Change Image
      accomImage.src = 'img/card-images/treb-house-1.jpg';
      accomImage2.src = 'img/card-images/treb-house-2.jpg';
      accomImage3.src = 'img/card-images/treb-house-3.jpg';
      accomImage4.src = 'img/card-images/treb-house-4.jpg';
      accomImage5.src = 'img/card-images/treb-house-5.jpg';
      accomImage6.src = 'img/card-images/treb-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone House';
      accomName2.textContent = 'Treble Cone House';
      accomName3.textContent = 'Treble Cone House';
      accomName4.textContent = 'Treble Cone House';
      accomName5.textContent = 'Treble Cone House';
      accomName6.textContent = 'Treble Cone House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn2').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }

    // Motel, Hotel & House
    else if ((skifeildInput.value == '2') && (getGuestInput.value == 2) && ((getNightInput.value >= 3) || (getNightInput.value <= 5 )) ) {

			// Change Image
      accomImage.src = 'img/card-images/treb-motel-1.jpg';
      accomImage2.src = 'img/card-images/treb-motel-2.jpg';
      accomImage3.src = 'img/card-images/treb-hotel-1.jpg';
      accomImage4.src = 'img/card-images/treb-hotel-2.jpg';
      accomImage5.src = 'img/card-images/treb-house-1.jpg';
      accomImage6.src = 'img/card-images/treb-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone Motel';
      accomName2.textContent = 'Treble Cone Motel';
      accomName3.textContent = 'Treble Cone Hotel';
      accomName4.textContent = 'Treble Cone Hotel';
      accomName5.textContent = 'Treble Cone House';
      accomName6.textContent = 'Treble Cone House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleMotel);

      $('#viewOnMapBtn2').click(viewOnMapTrebleMotel);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }


    // Motel & House
    else if ((skifeildInput.value == '2') && ((getGuestInput.value >= 2) || (getGuestInput.value <= 4)) && ((getNightInput.value >= 3) || (getNightInput.value < 11)) ) {

			// Change Image
      accomImage.src = 'img/card-images/treb-motel-1.jpg';
      accomImage2.src = 'img/card-images/treb-motel-2.jpg';
      accomImage3.src = 'img/card-images/treb-motel-3.jpg';
      accomImage4.src = 'img/card-images/treb-house-1.jpg';
      accomImage5.src = 'img/card-images/treb-house-2.jpg';
      accomImage6.src = 'img/card-images/treb-house-3.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone Motel';
      accomName2.textContent = 'Treble Cone Motel';
      accomName3.textContent = 'Treble Cone Motel';
      accomName4.textContent = 'Treble Cone House';
      accomName5.textContent = 'Treble Cone House';
      accomName6.textContent = 'Treble Cone House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleMotel);

      $('#viewOnMapBtn2').click(viewOnMapTrebleMotel);

      $('#viewOnMapBtn3').click(viewOnMapTrebleMotel);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHouse);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHouse);

    }

    // Hotel Output
    else if ((skifeildInput.value == '2') && (getGuestInput.value == 2) && (getNightInput.value == 1)) {

			// Change Image
      accomImage.src = 'img/card-images/treb-hotel-1.jpg';
      accomImage2.src = 'img/card-images/treb-hotel-2.jpg';
      accomImage3.src = 'img/card-images/treb-hotel-3.jpg';
      accomImage4.src = 'img/card-images/treb-hotel-4.jpg';
      accomImage5.src = 'img/card-images/treb-hotel-5.jpg';
      accomImage6.src = 'img/card-images/treb-hotel-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Treble Cone Hotel';
      accomName2.textContent = 'Treble Cone Hotel';
      accomName3.textContent = 'Treble Cone Hotel';
      accomName4.textContent = 'Treble Cone Hotel';
      accomName5.textContent = 'Treble Cone Hotel';
      accomName6.textContent = 'Treble Cone Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

      // View On Map On Clicks:
      $('#viewOnMapBtn1').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn2').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn3').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn4').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn5').click(viewOnMapTrebleHotel);

      $('#viewOnMapBtn6').click(viewOnMapTrebleHotel);

    }



    // ----Cardrona Conditionals:------

    // Hostel & Hotel

    else if ((skifeildInput.value == '1') && (getGuestInput.value == 1) && (getNightInput.value <= 1)) {

			// Change Image
      accomImage.src = 'img/card-images/car-hostel-1.jpg';
      accomImage2.src = 'img/card-images/car-hostel-2.jpg';
      accomImage3.src = 'img/card-images/car-hotel-1.jpg';
      accomImage4.src = 'img/card-images/car-hotel-2.jpg';
      accomImage5.src = 'img/card-images/car-hotel-3.jpg';
      accomImage6.src = 'img/card-images/car-hotel-4.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Hostel';
      accomName2.textContent = 'Cardrona Hostel';
      accomName3.textContent = 'Cardrona Hotel';
      accomName4.textContent = 'Cardrona Hotel';
      accomName5.textContent = 'Cardrona Hotel';
      accomName6.textContent = 'Cardrona Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

      // Remove ammenities
      wifi.style.color='#FFFFFF';
      wifi2.style.color='#FFFFFF';
      disbaled.style.color='#FFFFFF';
      disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHotel);

    }

    // Hotel & House

    else if ((skifeildInput.value === '1') && (getGuestInput.value == 2) && (getNightInput.value <= 10)) {

			// Change Image
      accomImage.src = 'img/card-images/car-hotel-1.jpg';
      accomImage2.src = 'img/card-images/car-hotel-2.jpg';
      accomImage3.src = 'img/card-images/car-hotel-3.jpg';
      accomImage4.src = 'img/card-images/car-house-1.jpg';
      accomImage5.src = 'img/card-images/car-house-2.jpg';
      accomImage6.src = 'img/card-images/car-house-3.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Hotel';
      accomName2.textContent = 'Cardrona Hotel';
      accomName3.textContent = 'Cardrona Hotel';
      accomName4.textContent = 'Cardrona House';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    // Hostel, Hotel & House
    else if ((skifeildInput.value == '1') && (getGuestInput.value == 1) && (getNightInput.value <= 5)) {

			// Change Image
      accomImage.src = 'img/card-images/car-hostel-1.jpg';
      accomImage2.src = 'img/card-images/car-hostel-2.jpg';
      accomImage3.src = 'img/card-images/car-hotel-1.jpg';
      accomImage4.src = 'img/card-images/car-hotel-2.jpg';
      accomImage5.src = 'img/card-images/car-house-1.jpg';
      accomImage6.src = 'img/card-images/car-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Hostel';
      accomName2.textContent = 'Cardrona Hostel';
      accomName3.textContent = 'Cardrona Hotel';
      accomName4.textContent = 'Cardrona Hotel';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

			// Remove ammenities
			wifi.style.color='#FFFFFF';
			wifi2.style.color='#FFFFFF';
			disabled.style.color='#FFFFFF';
			disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    // House
    else if ((skifeildInput.value == '1') && ((getNightInput.value == 2) || (getNightInput.value > 10)) && ((getGuestInput.value == 3) || (getGuestInput.value == 4)))    {

			// Change Image
      accomImage.src = 'img/card-images/car-house-1.jpg';
      accomImage2.src = 'img/card-images/car-house-2.jpg';
      accomImage3.src = 'img/card-images/car-house-3.jpg';
      accomImage4.src = 'img/card-images/car-house-4.jpg';
      accomImage5.src = 'img/card-images/car-house-5.jpg';
      accomImage6.src = 'img/card-images/car-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona House';
      accomName2.textContent = 'Cardrona House';
      accomName3.textContent = 'Cardrona House';
      accomName4.textContent = 'Cardrona House';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    else if ((skifeildInput.value == '1') && (getGuestInput.value == 1) && (getNightInput.value >= 10)) {

      // Change Image
      accomImage.src = 'img/card-images/car-house-1.jpg';
      accomImage2.src = 'img/card-images/car-house-2.jpg';
      accomImage3.src = 'img/card-images/car-house-3.jpg';
      accomImage4.src = 'img/card-images/car-house-4.jpg';
      accomImage5.src = 'img/card-images/car-house-5.jpg';
      accomImage6.src = 'img/card-images/car-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona House';
      accomName2.textContent = 'Cardrona House';
      accomName3.textContent = 'Cardrona House';
      accomName4.textContent = 'Cardrona House';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    // Motel, Hotel & House
    else if ((skifeildInput.value == '1') && (getGuestInput.value == 2) && ((getNightInput.value >= 3) || (getNightInput.value <= 5 )) ) {

			// Change Image
      accomImage.src = 'img/card-images/car-motel-1.jpg';
      accomImage2.src = 'img/card-images/car-motel-2.jpg';
      accomImage3.src = 'img/card-images/car-hotel-1.jpg';
      accomImage4.src = 'img/card-images/car-hotel-2.jpg';
      accomImage5.src = 'img/card-images/car-house-1.jpg';
      accomImage6.src = 'img/card-images/car-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Motel';
      accomName2.textContent = 'Cardrona Motel';
      accomName3.textContent = 'Cardrona Hotel';
      accomName4.textContent = 'Cardrona Hotel';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaMotel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaMotel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }


    // Motel & House
    else if ((skifeildInput.value == '1') && ((getGuestInput.value >= 2) || (getGuestInput.value <= 4)) && (getNightInput.value > 3) ) {

			// Change Image
      accomImage.src = 'img/card-images/car-motel-1.jpg';
      accomImage2.src = 'img/card-images/car-motel-2.jpg';
      accomImage3.src = 'img/card-images/car-motel-3.jpg';
      accomImage4.src = 'img/card-images/car-house-1.jpg';
      accomImage5.src = 'img/card-images/car-house-2.jpg';
      accomImage6.src = 'img/card-images/car-house-3.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Motel';
      accomName2.textContent = 'Cardrona Motel';
      accomName3.textContent = 'Cardrona Motel';
      accomName4.textContent = 'Cardrona House';
      accomName5.textContent = 'Cardrona House';
      accomName6.textContent = 'Cardrona House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaMotel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaMotel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaMotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    // Hotel Output
    else if ((skifeildInput.value == '1') && (getGuestInput.value == 2) && (getNightInput.value == 1)) {

			// Change Image
      accomImage.src = 'img/card-images/car-hotel-1.jpg';
      accomImage2.src = 'img/card-images/car-hotel-2.jpg';
      accomImage3.src = 'img/card-images/car-hotel-3.jpg';
      accomImage4.src = 'img/card-images/car-hotel-4.jpg';
      accomImage5.src = 'img/card-images/car-hotel-5.jpg';
      accomImage6.src = 'img/card-images/car-hotel-6.jpg';

      // Change Accomodation
      accomName.textContent = 'Cardrona Hotel';
      accomName2.textContent = 'Cardrona Hotel';
      accomName3.textContent = 'Cardrona Hotel';
      accomName4.textContent = 'Cardrona Hotel';
      accomName5.textContent = 'Cardrona Hotel';
      accomName6.textContent = 'Cardrona Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHotel);

    }



    // ----The Remarkables Conditionals:------

    // Hostel & Hotel

    else if ((skifeildInput.value == '3') && (getGuestInput.value == 1) && (getNightInput.value <= 1)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-hostel-1.jpg';
      accomImage2.src = 'img/card-images/remark-hostel-2.jpg';
      accomImage3.src = 'img/card-images/remark-hotel-1.jpg';
      accomImage4.src = 'img/card-images/remark-hotel-2.jpg';
      accomImage5.src = 'img/card-images/remark-hotel-3.jpg';
      accomImage6.src = 'img/card-images/remark-hotel-4.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Hostel';
      accomName2.textContent = 'The Remarkables Hostel';
      accomName3.textContent = 'The Remarkables Hotel';
      accomName4.textContent = 'The Remarkables Hotel';
      accomName5.textContent = 'The Remarkables Hotel';
      accomName6.textContent = 'The Remarkables Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

			// Remove ammenities
			wifi.style.color='#FFFFFF';
			wifi2.style.color='#FFFFFF';
			disabled.style.color='#FFFFFF';
			disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      $('#viewOnMapBtn1').click(viewOnMapRemarkHostel);

      $('#viewOnMapBtn2').click(viewOnMapRemarkHostel);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHotel);

    }

    // Hotel & House

    else if ((skifeildInput.value === '3') && (getGuestInput.value == 2) && (getNightInput.value <= 10)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-hotel-1.jpg';
      accomImage2.src = 'img/card-images/remark-hotel-2.jpg';
      accomImage3.src = 'img/card-images/remark-hotel-3.jpg';
      accomImage4.src = 'img/card-images/remark-house-1.jpg';
      accomImage5.src = 'img/card-images/remark-house-2.jpg';
      accomImage6.src = 'img/card-images/remark-house-3.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Hotel';
      accomName2.textContent = 'The Remarkables Hotel';
      accomName3.textContent = 'The Remarkables Hotel';
      accomName4.textContent = 'The Remarkables House';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn2').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHouse);

    }

    // Hostel, Hotel & House
    else if ((skifeildInput.value == '3') && (getGuestInput.value == 1) && (getNightInput.value <= 5)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-hostel-1.jpg';
      accomImage2.src = 'img/card-images/remark-hostel-2.jpg';
      accomImage3.src = 'img/card-images/remark-hotel-1.jpg';
      accomImage4.src = 'img/card-images/remark-hotel-2.jpg';
      accomImage5.src = 'img/card-images/remark-house-1.jpg';
      accomImage6.src = 'img/card-images/remark-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Hostel';
      accomName2.textContent = 'The Remarkables Hostel';
      accomName3.textContent = 'The Remarkables Hotel';
      accomName4.textContent = 'The Remarkables Hotel';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hostel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hostel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hostel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hostel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hostel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

			// Remove ammenities
			wifi.style.color='#FFFFFF';
			wifi2.style.color='#FFFFFF';
			disabled.style.color='#FFFFFF';
			disabled2.style.color='#FFFFFF';
			family.style.color='#FFFFFF';
			family2.style.color='#FFFFFF';

      $('#viewOnMapBtn1').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn2').click(viewOnMapCardronaHostel);

      $('#viewOnMapBtn3').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn4').click(viewOnMapCardronaHotel);

      $('#viewOnMapBtn5').click(viewOnMapCardronaHouse);

      $('#viewOnMapBtn6').click(viewOnMapCardronaHouse);

    }

    else if ((skifeildInput.value == '3') && ((getNightInput.value == 2) || (getNightInput.value > 10)) && ((getGuestInput.value == 3) || (getGuestInput.value == 4))) {

      // Change Image
      accomImage.src = 'img/card-images/remark-house-1.jpg';
      accomImage2.src = 'img/card-images/remark-house-2.jpg';
      accomImage3.src = 'img/card-images/remark-house-3.jpg';
      accomImage4.src = 'img/card-images/remark-house-4.jpg';
      accomImage5.src = 'img/card-images/remark-house-5.jpg';
      accomImage6.src = 'img/card-images/remark-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables House';
      accomName2.textContent = 'The Remarkables House';
      accomName3.textContent = 'The Remarkables House';
      accomName4.textContent = 'The Remarkables House';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn2').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHouse);

    }

    // House
    else if ((skifeildInput.value == '3') && (getGuestInput.value == 1) && (getNightInput.value >= 10)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-house-1.jpg';
      accomImage2.src = 'img/card-images/remark-house-2.jpg';
      accomImage3.src = 'img/card-images/remark-house-3.jpg';
      accomImage4.src = 'img/card-images/remark-house-4.jpg';
      accomImage5.src = 'img/card-images/remark-house-5.jpg';
      accomImage6.src = 'img/card-images/remark-house-6.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables House';
      accomName2.textContent = 'The Remarkables House';
      accomName3.textContent = 'The Remarkables House';
      accomName4.textContent = 'The Remarkables House';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn2').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHouse);

    }

    // Motel, Hotel & House
    else if ((skifeildInput.value == '3') && (getGuestInput.value == 2) && ((getNightInput.value >= 3) || (getNightInput.value <= 5 )) ) {

			// Change Image
      accomImage.src = 'img/card-images/remark-motel-1.jpg';
      accomImage2.src = 'img/card-images/remark-motel-2.jpg';
      accomImage3.src = 'img/card-images/remark-hotel-1.jpg';
      accomImage4.src = 'img/card-images/remark-hotel-2.jpg';
      accomImage5.src = 'img/card-images/remark-house-1.jpg';
      accomImage6.src = 'img/card-images/remark-house-2.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Motel';
      accomName2.textContent = 'The Remarkables Motel';
      accomName3.textContent = 'The Remarkables Hotel';
      accomName4.textContent = 'The Remarkables Hotel';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkMotel);

      $('#viewOnMapBtn2').click(viewOnMapRemarkMotel);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHouse);

    }


    // Motel & House
    else if ((skifeildInput.value == '3') && ((getGuestInput.value >= 2) || (getGuestInput.value <= 4)) && (getNightInput.value > 3)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-motel-1.jpg';
      accomImage2.src = 'img/card-images/remark-motel-2.jpg';
      accomImage3.src = 'img/card-images/remark-motel-3.jpg';
      accomImage4.src = 'img/card-images/remark-house-1.jpg';
      accomImage5.src = 'img/card-images/remark-house-2.jpg';
      accomImage6.src = 'img/card-images/remark-house-3.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Motel';
      accomName2.textContent = 'The Remarkables Motel';
      accomName3.textContent = 'The Remarkables Motel';
      accomName4.textContent = 'The Remarkables House';
      accomName5.textContent = 'The Remarkables House';
      accomName6.textContent = 'The Remarkables House';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.motel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.house.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.house.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.motel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.house.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.house.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.motel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.house.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.motel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.house.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.motel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.house.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkMotel);

      $('#viewOnMapBtn2').click(viewOnMapRemarkMotel);

      $('#viewOnMapBtn3').click(viewOnMapRemarkMotel);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHouse);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHouse);

    }

    // Hotel Output
    else if ((skifeildInput.value == '3') && (getGuestInput.value == 2) && (getNightInput.value == 1)) {

			// Change Image
      accomImage.src = 'img/card-images/remark-hotel-1.jpg';
      accomImage2.src = 'img/card-images/remark-hotel-2.jpg';
      accomImage3.src = 'img/card-images/remark-hotel-3.jpg';
      accomImage4.src = 'img/card-images/remark-hotel-4.jpg';
      accomImage5.src = 'img/card-images/remark-hotel-5.jpg';
      accomImage6.src = 'img/card-images/remark-hotel-6.jpg';

      // Change Accomodation
      accomName.textContent = 'The Remarkables Hotel';
      accomName2.textContent = 'The Remarkables Hotel';
      accomName3.textContent = 'The Remarkables Hotel';
      accomName4.textContent = 'The Remarkables Hotel';
      accomName5.textContent = 'The Remarkables Hotel';
      accomName6.textContent = 'The Remarkables Hotel';

      // Change Price Per Night
      pricePerNight.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight2.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight3.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight4.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight5.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';
      pricePerNight6.textContent = '$' + hotelData.hotel.pricePerNight + ' per Night';

      // Change Min Nights
      minNight.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight2.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight3.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight4.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight5.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';
      minNight6.textContent = 'Min ' + hotelData.hotel.minNight + ' Nights';

      // Change Max Nights
      maxNight.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight2.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight3.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight4.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight5.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';
      maxNight6.textContent = 'Max ' + hotelData.hotel.maxNight + ' Nights';

      // Change Min Guests
      minGuest.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest2.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest3.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest4.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest5.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';
      minGuest6.textContent = 'Max ' + hotelData.hotel.minCapacity + ' Guests';

      // Change Max Guests
      maxGuest.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest2.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest3.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest4.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest5.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';
      maxGuest6.textContent = 'Max ' + hotelData.hotel.maxCapacity + ' Guests';

      $('#viewOnMapBtn1').click(viewOnMapRemarkHostel);

      $('#viewOnMapBtn2').click(viewOnMapRemarkHostel);

      $('#viewOnMapBtn3').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn4').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn5').click(viewOnMapRemarkHotel);

      $('#viewOnMapBtn6').click(viewOnMapRemarkHotel);

    }

    // }

  });


}());
// document ENDS
