$(document).ready(function() {

  $('.main-slider').slick({
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $('.list-slider').slick({
    fade: true
  });

});

// Google map
function initMap() {
  var deco = {lat: 47.026442, lng: 28.830943};
  var position = {lat: 47.026442, lng: 28.83243};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: position,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: deco,
    map: map
  });
}
