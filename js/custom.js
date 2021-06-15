$(document).ready(function() {
  $('#fullpage').fullpage({
    css3: true,
    verticalCentered: true,
    resize: true,
    sectionSelector: '.section',
    slideSelector: '.slide'
  });

  $.fn.fullpage.setAllowScrolling(false);


  // - - - - - - - - - - - - -  MAPBOX BEGiNS - - - - - - - - - - - - - - - - -

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJja3A0b2RvNXQwZHZsMm5vdzJhMzlneHliIn0.GePUzyfjdyGc0pnYNPerqA';
  var map = new mapboxgl.Map({
    container: 'map',
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

  document.getElementById('flyA').addEventListener('click', function() {
    console.log('flyA');
    map.flyTo({
      center: [
        168.9492151232965, -44.8731916471041
      ],
      zoom: 15,
      essential: true
    });
  });

  document.getElementById('flyB').addEventListener('click', function() {
    console.log('flyB');
    map.flyTo({
      center: [
        168.81431482752348, -45.053887576329835
      ],
      zoom: 15,
      essential: true
    });
  });

  document.getElementById('flyC').addEventListener('click', function() {
    console.log('flyC');
    map.flyTo({
      center: [
        168.89604382751347, -44.63336775246554
      ],
      zoom: 15,
      essential: true
    });
  });

  //  MAP BOX ENDS

  // ------------------ PARSLEY VALIDATION CONTROLS BEGIN: --------------------

  var form = $('#parent').parsley();
  $('#parent').find('#submitBtn').click(function () {
      form.validate();
  });

  form.subscribe('parsley:form:success', function (e) {
     $.fn.fullpage.silentMoveTo(1,2);
  });

  // PARSLEY ENDS

  // Textillate:

  $(function() {
    $('.tlt').textillate();
  });

});
// document ENDS
