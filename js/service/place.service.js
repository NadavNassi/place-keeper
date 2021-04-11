'use strict'

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.550327742191048, lng: 34.967121893410244 },
    zoom: 8,
  });
}