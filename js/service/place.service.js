// 'use strict'

// const selfLoc = 

let gMap, infoWindow;
(() => {
    const user = getUser();
    renderLocations(user)
})()



function initMap() {
    const latLng = { lat: 29.550327742191048, lng: 34.967121893410244 }
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: 12,
    });

    gUser.location.forEach((location) => {
        new google.maps.Marker({
            position: location,
            map: gMap
        })
    })

    gMap.addListener('click', (e) => {
        placeMarkerAndPanTo(e.latLng, gMap);
    });

    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement('button');
    locationButton.textContent = 'FIND YOURSELF';
    locationButton.classList.add('custom-map-control-button');
    gMap.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener('click', () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    infoWindow.open(gMap);
                    gMap.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, gMap.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, gMap.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? 'Error: The Geolocation service failed.'
            : 'Error: Your browser doesn\'t support geolocation.'
    );
    infoWindow.open(gMap);
}

function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
        position: latLng,
        map,
    });
    map.panTo(latLng);
    // setUserLocation(latLng)
    const newLatLng = { 
        lat: latLng.lat(), 
        lng: latLng.lng()
    }
    onAddNewPlace(newLatLng)
}

function setLocationCenter(latlng) {
    const center = new google.maps.LatLng(latlng)
    gMap.setCenter(center)
}
