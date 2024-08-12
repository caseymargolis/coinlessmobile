var map;
var InforObj = [];
var centerCords = {
    lat: 42.664170,
    lng: -100.698910
};
var markersOnMap = [{
        placeName: "Rods N Dogs Car Wash",
        LatLng: [{
            lat: 46.914560,
            lng: -114.061030
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "4620 Expressway Missoula, Montana 59808"
    },
    {
        placeName: "Wash Montana",
        LatLng: [{
            lat: 46.451400,
            lng: -108.541860
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "1002 Main St.  Roundup, MT 59072"
    },
    {
        placeName: "Shiny Ride",
        LatLng: [{
            lat: 45.827862,
            lng: -108.507088
        }],
        placeLogo: "/img/partner-locations/shiny-ride.png",
        placeLocation: "1610 Gleneagles Blvd.  Billings, MT 59105"
    },
    {
        placeName: "Sudsy South",
        LatLng: [{
            lat: 41.664170,
            lng: -93.698910
        }],
        placeLogo: "/img/partner-locations/sudsy-south.png",
        placeLocation: "5740 Merle Hay Road Johnston, Iowa 50131"
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h6>' + markersOnMap[i].placeName + '</h6><img src="'+ markersOnMap[i].placeLogo +'" /><p>' + markersOnMap[i].placeLocation + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map,
            icon: '/img/coinless-location.webp'
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
        zoom: 5,
        center: centerCords
    });
    addMarkerInfo();
}