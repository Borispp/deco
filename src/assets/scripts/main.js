$(document).ready(function() {

  $('.main-slider').slick({
    fade: true,
    dots: true
  });

  $('.list-slider').slick({
    fade: true
  });
  
});

// Google map
function initMap() {
  var deco = {lat: 47.026442, lng: 28.830943};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: deco,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: deco,
    map: map
  });
}
