var map;
var InforObj = [];
var centerCords = {
    lat: -25.344,
    lng: 131.036
};
var markersOnMap = [{
        placeName: "Shiny Ride",
        LatLng: [{
            lat: 45.827860,
            lng: -108.507090
        }],
        placeLocation: "1610 Gleneagles Blvd. Billings, MT 59105"
    },
    {
        placeName: "Quick Wash Co",
        LatLng: [{
            lat: 41.664170,
            lng: -93.698910
        }],
         placeLocation: "5740 Merle Hay Road Johnston, Iowa 50131"
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName + '</h1><p>' + markersOnMap[i].placeLocation + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        // marker.addListener('click', function () {
        //     closeOtherInfo();
        //     infowindow.open(marker.get('map'), marker);
        //     InforObj[0] = infowindow;
        // });
        marker.addListener('mouseover', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });
        // marker.addListener('mouseout', function () {
        //     closeOtherInfo();
        //     infowindow.close();
        //     InforObj[0] = infowindow;
        // });
    }
}

function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: centerCords
    });
    addMarkerInfo();
}