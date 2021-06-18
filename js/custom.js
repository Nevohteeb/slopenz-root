(function() {
  'use strict';

  // --------------------- VARIABLES -----------------------------

  // DATA VARIABLES FOR ACCOMODATION:

  var hotelData = {
    hostel: {
      pricePerNight: 30,
      minNight: 1,
      maxNight: 10,
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

  function cloudVars () {

  }

  // GET FORM INPUTS:
  var skifeildInput = document.getElementById('skifieldInput');
  var getNightInput = document.getElementById('nightInput');
  // Convert output to interger:
  var nightInput = parseInt(getNightInput.value);
  var getGuestInput = document.getElementById('guestInput');
  // Convert output to interger:
  var guestInput = parseInt(getGuestInput.value);
  var getfamilyCheck = document.getElementById('familyCheck');
  // Check familyCheck checkbox boolean value:
  var familyCheck = getfamilyCheck.checked;

  // GET CARD ELEMENTS:

  // Card 1:
  var accomImage = document.getElementById('accomImage');
  var accomName = document.getElementById('accomName');
  var pricePerNight = document.getElementById('pricePerNight');
  var minNight = document.getElementById('minNight');
  var maxNight = document.getElementById('maxNight');
  var minGuest = document.getElementById('minGuest');
  var maxGuest = document.getElementById('maxGuest');

  // Card 2:
  var accomImage2 = document.getElementById('accomImage2');
  var accomName2 = document.getElementById('accomName2');
  var pricePerNight2 = document.getElementById('pricePerNight2');
  var minNight2 = document.getElementById('minNight2');
  var minGuest2 = document.getElementById('minGuest2');
  var maxGuest2 = document.getElementById('maxGuest2');

  // Card 3
  var accomImage3 = document.getElementById('accomImage3');
  var accomName3 = document.getElementById('accomName3');
  var pricePerNight3 = document.getElementById('pricePerNight3');
  var minNight3 = document.getElementById('minNight3');
  var minGuest3 = document.getElementById('minGuest3');
  var maxGuest3 = document.getElementById('maxGuest3');

  // Card 4
  var accomImage4 = document.getElementById('accomImage4');
  var accomName4 = document.getElementById('accomName4');
  var pricePerNight4 = document.getElementById('pricePerNight4');
  var minNight4 = document.getElementById('minNight4');
  var minGuest4 = document.getElementById('minGuest4');
  var maxGuest4 = document.getElementById('maxGuest4');

  // Card 5
  var accomImage5 = document.getElementById('accomImage5');
  var accomName5 = document.getElementById('accomName5');
  var pricePerNight5 = document.getElementById('pricePerNight5');
  var minNight5 = document.getElementById('minNight5');
  var minGuest5 = document.getElementById('minGuest5');
  var maxGuest5 = document.getElementById('maxGuest5');

  // Card 6
  var accomImage6 = document.getElementById('accomImage6');
  var accomName6 = document.getElementById('accomName6');
  var pricePerNight6 = document.getElementById('pricePerNight6');
  var minNight6 = document.getElementById('minNight6');
  var minGuest6 = document.getElementById('minGuest6');
  var maxGuest6 = document.getElementById('maxGuest6');

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

  // -------------------- FUNCTIONS ----------------------------

  $(submitBtn).click(function() {

    var skifeildInput = document.getElementById('skifieldInput');
    var getNightInput = document.getElementById('nightInput');
    var nightInput = parseInt(getNightInput.value);
    var getGuestInput = document.getElementById('guestInput');
    var guestInput = parseInt(getGuestInput.value);
    var getfamilyCheck = document.getElementById('familyCheck');
    var familyCheck = getfamilyCheck.checked;
    console.log(familyCheck);
    var accomName = document.getElementById('accomName');
    var accomName2 = document.getElementById('accomName2');
    var minNight = document.getElementById('minNight');
    var maxNight = document.getElementById('maxNight');
    var pricePerNight = document.getElementById('pricePerNight');
    var pricePerNight2 = document.getElementById('pricePerNight2');


    // ---------------- CONDITIONALS -----------------

    // - - - - - - - - HOTEL CONDITIONALS - - - - - - - - -

    // Treble Cone Hotel:

    if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      accomName.textContent = 'Treble Cone Hotel 1';
      accomName2.textContent = 'Treble Cone Hotel 2';
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // Cardona Hotel

    if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      accomName.textContent = 'Cardrona Hotel 1';
      accomName2.textContent = 'Cardrona Hotel 2';
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // The Remarkables Hotel

    if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.hotel.maxNight) && (getGuestInput.value <= hotelData.hotel.maxCapacity)) {
      accomName.textContent = 'The Remarkables Hotel 1';
      accomName2.textContent = 'The Remarkables Hotel 2';
      pricePerNight.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hotel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hotel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hotel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hotel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hotel.maxCapacity;
    }

    // - - - - - - MOTEL CONDITIONALS - - - - - - - -

    // Treble Cone Motel

    if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      accomName.textContent = 'Treble Cone Hotel 1';
      accomName2.textContent = 'Treble Cone Hotel 2';
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // Cardrona Motel

    if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      accomName.textContent = 'Cardrona Motel 1';
      accomName2.textContent = 'Cardrona Motel 2';
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // The Remarkables Motel

    if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.motel.maxNight) && (getGuestInput.value <= hotelData.motel.maxCapacity)) {
      accomName.textContent = 'The Remarkables Motel 1';
      accomName2.textContent = 'The Remarkables Motel 2';
      pricePerNight.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.motel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.motel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.motel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.motel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.motel.maxCapacity;
    }

    // - - - - - - - HOSTEL CONDITIONALS - - - - - - -

    // Treble Cone Hostel

    if ((skifeildInput.value === 'Treble Cone') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      accomName.textContent = 'The Remarkables Motel 1';
      accomName2.textContent = 'The Remarkables Motel 2';
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
    }

    // Cardrona Hostel

    if ((skifeildInput.value === 'Cardrona') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      accomName.textContent = 'Cardrona Hostel 1';
      accomName2.textContent = 'Cardrona Hotel 2';
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;

    }

    // The Remarkables Hostel

    if ((skifeildInput.value === 'The Remarkables') && (getNightInput.value <= hotelData.hostel.maxNight) && (getGuestInput.value <= hotelData.hostel.maxCapacity)) {
      accomName.textContent = 'The Remarkables Motel 1';
      accomName2.textContent = 'The Remarkables Motel 2';
      pricePerNight.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      pricePerNight2.textContent = '$ ' + hotelData.hostel.pricePerNight + ' per night';
      minNight.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      minNight2.textContent = 'Min Nights = ' + hotelData.hostel.minNight;
      maxNight.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      maxNight2.textContent = 'Max Nights = ' + hotelData.hostel.maxNight;
      minGuest.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      minGuest2.textContent = 'Min Guests = ' + hotelData.hostel.minCapacity;
      maxGuest.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
      maxGuest2.textContent = 'Max Guests = ' + hotelData.hostel.maxCapacity;
    }


  });


}());
// document ENDS
