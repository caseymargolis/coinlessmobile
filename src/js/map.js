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
        placeLocation: "1002 Main St. Roundup, MT 59072"
    },
    {
        placeName: "Shiny Ride",
        LatLng: [{
            lat: 45.827862,
            lng: -108.507088
        }],
        placeLogo: "/img/partner-locations/shiny-ride.png",
        placeLocation: "1610 Gleneagles Blvd. Billings, MT 59105"
    },
    {
        placeName: "Sudsy South",
        LatLng: [{
            lat: 43.668370,
            lng: -111.916130
        }],
        placeLogo: "/img/partner-locations/sudsy-south.png",
        placeLocation: "147 W 2nd S Rigby, ID 83442"
    },
    {
        placeName: "Shelley Car Wash",
        LatLng: [{
            lat: 43.373970,
            lng: -112.129640
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "510 S State St. Shelley, ID 83274"
    },
    {
        placeName: "Bengal Car Wash 1",
        LatLng: [{
            lat: 42.894560,
            lng: -112.452410
        }],
        placeLogo: "/img/partner-locations/Bengal-Car-Wash-1.png",
        placeLocation: "1053 Yellowstone Ave Pocatello, Idaho 83201"
    },
    {
        placeName: "34 Top Stop North Logan",
        LatLng: [{
            lat: 41.766350,
            lng: -111.833480
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "1936 North Main North Logan, Utah 84341"
    },
    {
        placeName: "33 Top Stop Logan",
        LatLng: [{
            lat: 41.749750,
            lng: -111.834110
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "970 North Main St. Logan, Utah 84321"
    },
    {
        placeName: "32 Top Stop Brigham City",
        LatLng: [{
            lat: 41.487050,
            lng: -112.026880
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "1095 South 500 West Brigham City, Utah 84302"
    },
    {
        placeName: "12 Top Stop Ogden",
        LatLng: [{
            lat: 41.245230,
            lng: -112.010020
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "1210 W 12th St. Ogden, Utah 84108"
    },
    {
        placeName: "51 Top Stop Kaysville",
        LatLng: [{
            lat: 41.038760,
            lng: -111.944660
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "320 West 200 North Kaysville, Utah 84037"
    },
    {
        placeName: "31 Top Stop Centerville",
        LatLng: [{
            lat: 38.918770,
            lng: -112.382300
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "382 Interstate 15 N, S Frontage Rd Centerville, Utah 84014"
    },
    {
        placeName: "Coinless Demo Wash",
        LatLng: [{
            lat: 40.785500,
            lng: -111.900520
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "321 W Reed Ave Salt Lake City, UT 84103"
    },
    {
        placeName: "18 Top Stop Bangerter",
        LatLng: [{
            lat: 40.730820,
            lng: -111.985450
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "4025 W 1820 S Salt Lake City, Utah 84104"
    },
    {
        placeName: "The Salty Dog Car and Pet Wash",
        LatLng: [{
            lat: 40.707220,
            lng: -112.026340
        }],
        placeLogo: "/img/partner-locations/123.png",
        placeLocation: "2912 S Glen Eagle Dr West Valley City, UT 84128"
    },
    {
        placeName: "West Valley Power Wash",
        LatLng: [{
            lat: 40.695950,
            lng: -111.996610
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "3532 4400 W West Valley City, Utah 8412"
    },
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
            maxWidth: 215
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