var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 45.426022,
            lng: -75.681213
        },
        zoom: 15
    });

    // The marker, positioned at Nelson
    const marker = new google.maps.Marker({
        position: {
            lat: 45.426022,
            lng: -75.681214
        },
        map: map,
    });

    // The marker, positioned at uOttawa
    const marker2 = new google.maps.Marker({
        position: {
            lat: 45.423000,
            lng: -75.681400
        },
        map: map,
    });

    // The marker, positioned at Byward
    const marker3 = new google.maps.Marker({
        position: {
            lat: 45.429000,
            lng: -75.68900
        },
        map: map,
    });
}