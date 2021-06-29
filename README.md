# SLOPE NZ
### Accomodation Finder by Ciaran Slow

An accomodation finder for finding accomodation near NZ Ski Fields.

The project is a Summative Web Dev project for Yoobee Colleges Wellington.

This project uses HTML, CSS and JS. It makes uses of multiple JS Plugins & Libraries.





## PROBLEM:

Due to COVID-19 tourism to Queenstown and Wanaka has significantly reduced, impacting local business operators majorly. Both of these regions rely heavily on tourism as their primary industries.  

To try to minimize the ongoing impact Tourism NZ has decided to launch a campaign targeting the upcoming ski season as a way to attract more business for the region from both local and international tourists.




## SOLUTION:

Development of a showcase website that allows users useful booking information for the upcoming ski season. The site will include detailed interactive maps to help with locating accommodation, ski fields and nearby bars which meet the Qualmark standard. The site will make effective use of both Tourism NZ and Qualmark branding or imagery to showcase the ski fields/accommodation of the region.

The accommodation finder will allow user to search for accommodation based on:
Ski field selection - show results close by
Number of Guests
Number of Nights





## LIBRARIES & PLUGINS:


### * JQuery

Predominantly used for function calls and on-click events. Please see custom.js line #535 full full on click code

```javascript
$('#submitBtn').click(function() {

};
```

### * Bootstraps

Used for form and card design

```html

<!-- BOOTSRAPS FORM BEGINS -->
            <div class="form-cont" id="parent" data-parsley-validate>
              <div id="searchForm">
                <div class="form-group">
                  <label for="nameInput">Your Name:</label>
                  <input type="text" class="form-control" id="nameInput" data-parsley-required-message="Please enter your name" data-parsley-pattern="^[a-zA-Z ]+$" placeholder="Max 10 char." data-parsley-required="true" maxlength="10">
                </div>
                <div class="form-group">
                  <label for="skifieldInput">Select Your Skifield:</label>
                  <select class="form-control" id="skifieldInput" data-parsley-required="true"  data-parsley-min="1" data-parsley-required-message="Please select Ski Field">
                    <option value="">Choose...</option>
                    <option value="1">Cardrona</option>
                    <option value="2">Treble Cone</option>
                    <option value="3">The Remarkables</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="nameInput">Number of Nights</label>
                  <input type="text" class="form-control" id="nightInput" placeholder="Max of 15 nights" data-parsley-required-message="Please enter number of nights you wish to stay" data-parsley-required="true" data-parsley-type="number"
                    data-parsley-max="15">
                </div>
                <div class="form-group">
                  <label for="nameInput">Number of Guests</label>
                  <input type="text" class="form-control" id="guestInput" placeholder="Max of 4" data-parsley-required-message="Please enter number of guests" data-parsley-required="true" data-parsley-type="number" data-parsley-max="4">
                </div>
                <button id="submitBtn">See available rooms!</button>
              </div>
            </div>
            <!-- BOOTSRAPS FORM ENDS -->
```


### * Slick JS

Used for output carousel

```javascript
  $('.outputRight').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
		infinite: false
  });
```


### * Parsley JS

Used for Input Validation on search form

```javascript
var form = $('#parent').parsley();
  $('#parent').find('#submitBtn').click(function() {
    form.validate();
  });

  form.subscribe('parsley:form:success', function(e) {
    $.fn.fullpage.moveSlideRight();
  });
  ```


### * Textillate JS

Used to animate home-screen Title and subtitle

```javascript
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
  ```


### * Fullpage JS

Used to enable Single Page Application sideways scroll

```javascript
  $('#fullpage').fullpage({
    css3: true,
    verticalCentered: true,
    resize: true,
    sectionSelector: '.section',
    slideSelector: '.slide'
  });

  $.fn.fullpage.setAllowScrolling(false);
```


### Font Awesome v4.0

Used for all card icons - Free Wifi, Family Friendly and Disabled Access.


### * Mapbox

Used for interactive maps on both the output and ski field screens. Here is a fly to example:

```javascript
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
  ```


### * Gulp

Used for JS linting, Sass and live server.


### * Node JS

Used to install and run Gulp.





## PRODUCTION TOOLS USED:

### * Atom Editor

Used to write and edit all code.

### * Terminal

Used for running Node, Gulp and GitHub commits.

### * Adobe Illustrator

Used to create logos and required graphic assets.

### * Adobe XD

Used to create Wireframes, Concepts and Hifi.

### * Google Chrome Browser

Inspect and Console used for in browser design. Network used to manage load times

### * BIRME - website

Used for batch image resizing and cropping for card images

### * LucidChart - website

USed for creating user flow diagrams





## STYLE GUIDE

All JS has been written to conform to the Idiomatic JS style guide.




### HTML & CSS CODE VALIDATED VIA W3 SHCOOLS VALIDATORS
