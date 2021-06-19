(function() {
  'use strict';

  // --------------------- VARIABLES -----------------------------

  // DATA VARIABLES FOR ACCOMODATION:

  var hotelData = {
    hostel: {
      pricePerNight: 30,
      minNight: 1,
      maxNight: 10,
      minCapacity: 10,
      maxCapacity: 1,
      familyFriendly: false
    },
    motel: {
      pricePerNight: 90,
      minNight: 3,
      maxNight: 10,
      minCapacity: 2,
      maxCapacity: 4,
      familyFriendly: true
    },
    hotel: {
      pricePerNight: 157,
      minNight: 1,
      maxNight: 5,
      minCapacity: 1,
      maxCapacity: 2,
      familyFriendly: false
    },
    house: {
      pricePerNight: 240,
      minNight: 2,
      maxNight: 15,
      minCapacity: 1,
      maxCapacity: 4,
      familyFriendly: true
    }
  };

  // All variables requiring higher scope:
  function cloudVariables () {

  }

  // Input Variables
  var skifeildInput = document.getElementById('skifieldInput');
  var getNightInput = document.getElementById('nightInput');
  var nightInput = parseInt(getNightInput.value);
  var getGuestInput = document.getElementById('guestInput');
  var guestInput = parseInt(getGuestInput.value);
  var getfamilyCheck = document.getElementById('familyCheck');
  var familyCheck = getfamilyCheck.checked;

  // Get Card Elements:
  var accomName = document.getElementById('accomName');
  var accomName2 = document.getElementById('accomName2');
  var accomName3 = document.getElementById('accomName3');
  var accomName4 = document.getElementById('accomName4');
  var accomName5 = document.getElementById('accomName5');
  var accomName6 = document.getElementById('accomName6');

  var pricePerNight = document.getElementById('pricePerNight');
  var pricePerNight2 = document.getElementById('pricePerNight2');
  var pricePerNight3 = document.getElementById('pricePerNight3');
  var pricePerNight4 = document.getElementById('pricePerNight4');
  var pricePerNight5 = document.getElementById('pricePerNight5');
  var pricePerNight6 = document.getElementById('pricePerNight6');

  var minNight = document.getElementById('minNight');
  var minNight2 = document.getElementById('minNight2');
  var minNight3 = document.getElementById('minNight3');
  var minNight4 = document.getElementById('minNight4');
  var minNight5 = document.getElementById('minNight5');
  var minNight6 = document.getElementById('minNight6');

  var maxNight = document.getElementById('maxNight');
  var maxNight2 = document.getElementById('maxNight2');
  var maxNight3 = document.getElementById('maxNight3');
  var maxNight4 = document.getElementById('maxNight4');
  var maxNight5 = document.getElementById('maxNight5');
  var maxNight6 = document.getElementById('maxNight6');

  // Form Submit Button
  var submitBtn = document.getElementById('submitBtn');

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
        sync: true
      }
    });
  }
  // doText ENDS

  doText();


  var getHome = document.getElementById('home');
  var getQual = document.getElementById('qual');

  $(getHome).click(function() {
    $('.tlt').textillate({
      in: {
        effect: 'fadeInLeft',
        sync: true
      }
    });
  });

  $(getQual).click(function() {
    $('.tlt').textillate({
      in: {
        effect: 'fadeInLeft',
        sync: true
      }
    });
  });

  //  Slick Carousel:

  $('.outputRight').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // Parlsey Validation:

  var form = $('#parent').parsley();
  $('#parent').find('#submitBtn').click(function() {
    form.validate();
  });

  form.subscribe('parsley:form:success', function(e) {
    $.fn.fullpage.silentMoveTo(1, 2);
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

  // -------------------- CLICK FUNCTIONS ----------------------------

  $(submitBtn).click(function() {

    // Input Variables
    var skifeildInput = document.getElementById('skifieldInput');
    var getNightInput = document.getElementById('nightInput');
    var nightInput = parseInt(getNightInput.value);
    var getGuestInput = document.getElementById('guestInput');
    var guestInput = parseInt(getGuestInput.value);
    var getfamilyCheck = document.getElementById('familyCheck');
    var familyCheck = getfamilyCheck.checked;

    // Get Card Elements:
    var accomName = document.getElementById('accomName');
    var accomName2 = document.getElementById('accomName2');
    var accomName3 = document.getElementById('accomName3');
    var accomName4 = document.getElementById('accomName4');
    var accomName5 = document.getElementById('accomName5');
    var accomName6 = document.getElementById('accomName6');

    var pricePerNight = document.getElementById('pricePerNight');
    var pricePerNight2 = document.getElementById('pricePerNight2');
    var pricePerNight3 = document.getElementById('pricePerNight3');
    var pricePerNight4 = document.getElementById('pricePerNight4');
    var pricePerNight5 = document.getElementById('pricePerNight5');
    var pricePerNight6 = document.getElementById('pricePerNight6');

    var minNight = document.getElementById('minNight');
    var minNight2 = document.getElementById('minNight2');
    var minNight3 = document.getElementById('minNight3');
    var minNight4 = document.getElementById('minNight4');
    var minNight5 = document.getElementById('minNight5');
    var minNight6 = document.getElementById('minNight6');

    var maxNight = document.getElementById('maxNight');
    var maxNight2 = document.getElementById('maxNight2');
    var maxNight3 = document.getElementById('maxNight3');
    var maxNight4 = document.getElementById('maxNight4');
    var maxNight5 = document.getElementById('maxNight5');
    var maxNight6 = document.getElementById('maxNight6');




    // ---------------- CONDITIONALS -----------------

    // - - - - - - - - HOTEL CONDITIONALS - - - - - - - - -

    // Treble Cone Hotel:

    if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'Treble Cone Hotel 1';
      accomName2.textContent = 'Treble Cone Hotel 2';
      accomName3.textContent = 'Treble Cone Hotel 3';
      accomName4.textContent = 'Treble Cone Hotel 4';
      accomName5.textContent = 'Treble Cone Hotel 5';
      accomName6.textContent = 'Treble Cone Hotel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      // Change Min Nights
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      // Change Min Guests
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      // Change Max Guests
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // Cardona Hotel

    else if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'Cardrona Hotel 1';
      accomName2.textContent = 'Cardrona Hotel 2';
      accomName3.textContent = 'Cardrona Hotel 3';
      accomName4.textContent = 'Cardrona Hotel 4';
      accomName5.textContent = 'Cardrona Hotel 5';
      accomName6.textContent = 'Cardrona Hotel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      // Change Min Night
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      // Chnage Max Night
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // The Remarkables Hotel

    else if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'The Remarkables Hotel 1';
      accomName2.textContent = 'The Remarkables Hotel 2';
      accomName3.textContent = 'The Remarkables Hotel 3';
      accomName4.textContent = 'The Remarkables Hotel 4';
      accomName5.textContent = 'The Remarkables Hotel 5';
      accomName6.textContent = 'The Remarkables Hotel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      // Change Min Night
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      // Chnage Max Night
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // - - - - - - MOTEL CONDITIONALS - - - - - - - -

    // Treble Cone Motel

    else if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      // Change Accomodation:
      accomName.textContent = 'Treble Cone Hotel 1';
      accomName2.textContent = 'Treble Cone Hotel 2';
      accomName2.textContent = 'Treble Cone Hotel 3';
      accomName2.textContent = 'Treble Cone Hotel 4';
      accomName2.textContent = 'Treble Cone Hotel 5';
      accomName2.textContent = 'Treble Cone Hotel 6';
      //  Change Price Per Night:
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      // Change Min Nights
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      // Change Min Guests
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      // Change Max Guests
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // Cardrona Motel

    else if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'Cardrona Motel 1';
      accomName2.textContent = 'Cardrona Motel 2';
      accomName3.textContent = 'Cardrona Motel 3';
      accomName4.textContent = 'Cardrona Motel 4';
      accomName5.textContent = 'Cardrona Motel 5';
      accomName6.textContent = 'Cardrona Motel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      // Change Min Guests
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      // Change Max Guests
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // The Remarkables Motel

    else if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'The Remarkables Motel 1';
      accomName2.textContent = 'The Remarkables Motel 2';
      accomName3.textContent = 'The Remarkables Motel 3';
      accomName4.textContent = 'The Remarkables Motel 4';
      accomName5.textContent = 'The Remarkables Motel 5';
      accomName6.textContent = 'The Remarkables Motel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      // Change Min Guests
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      // Change Max Guests
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // - - - - - - - HOSTEL CONDITIONALS - - - - - - -

    // Treble Cone Hostel

    else if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'Treble Cone 1';
      accomName2.textContent = 'Treble Cone 2';
      accomName3.textContent = 'Treble Cone 3';
      accomName4.textContent = 'Treble Cone 4';
      accomName5.textContent = 'Treble Cone 5';
      accomName6.textContent = 'Treble Cone 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      // Change Min Guest
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      // Change Max Guest
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
    }

    // Cardrona Hostel

    else if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'Cardrona Motel 1';
      accomName2.textContent = 'Cardrona Motel 2';
      accomName3.textContent = 'Cardrona Motel 3';
      accomName4.textContent = 'Cardrona Motel 4';
      accomName5.textContent = 'Cardrona Motel 5';
      accomName6.textContent = 'Cardrona Motel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      // Change Min Guest
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      // Change Max Guest
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
    }

    // The Remarkables Hostel

    else if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      // Change Accomodation
      accomName.textContent = 'The Remarkables Motel 1';
      accomName2.textContent = 'The Remarkables Motel 2';
      accomName3.textContent = 'The Remarkables Motel 3';
      accomName4.textContent = 'The Remarkables Motel 4';
      accomName5.textContent = 'The Remarkables Motel 5';
      accomName6.textContent = 'The Remarkables Motel 6';
      // Change Price Per Night
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight3.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight4.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight5.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight6.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      // Change Min Night
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight3.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight4.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight5.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight6.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      // Change Max Nights
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight3.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight4.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight5.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight6.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      // Change Min Guest
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest3.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest4.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest5.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest6.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      // Change Max Guest
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest3.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest4.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest5.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest6.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
    }


  });


}());
// document ENDS
