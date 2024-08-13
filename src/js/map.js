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
            lat: 40.927340,
            lng: -111.883840
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
    {
        placeName: "Coinless Demo Wash 2",
        LatLng: [{
            lat: 40.702750,
            lng: -111.854410
        }],
        placeLogo: "/img/partner-locations/137.png",
        placeLocation: "3135 Richmond St. Salt Lake City, UT 84106"
    },
    {
        placeName: "Millcreek Car Wash",
        LatLng: [{
            lat: 40.686650,
            lng: -111.864570
        }],
        placeLogo: "/img/partner-locations/164.png",
        placeLocation: "910 E 3900 S Millcreek, Utah 84124"
    },
    {
        placeName: "Holladay Car Wash",
        LatLng: [{
            lat: 40.685040,
            lng: -111.815970
        }],
        placeLogo: "/img/partner-locations/1.png",
        placeLocation: "4002 South 2700 East Holladay, Utah 84124"
    },
    {
        placeName: "45 Top Stop Holladay",
        LatLng: [{
            lat: 40.673930,
            lng: -111.824040
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "2322 E 4500 S Holladay, UT 84117"
    },
    {
        placeName: "Bolt Wash 2",
        LatLng: [{
            lat: 40.652670,
            lng: -111.978930
        }],
        placeLogo: "/img/partner-locations/4.png",
        placeLocation: "3685 W 5400 S Salt Lake City, Utah 84129"
    },
    {
        placeName: "Bolt Wash 1",
        LatLng: [{
            lat: 40.653520,
            lng: -111.948030
        }],
        placeLogo: "/img/partner-locations/4.png",
        placeLocation: "2192 West 5400 South Taylorsville, Utah 84095"
    },
    {
        placeName: "53 Top Stop Murray",
        LatLng: [{
            lat: 40.653670,
            lng: -111.908080
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "609 W 5300 S Murray, Utah 84123"
    },
    {
        placeName: "Murray Car Wash",
        LatLng: [{
            lat: 40.643350,
            lng: -111.866020
        }],
        placeLogo: "/img/partner-locations/91.png",
        placeLocation: "5868 South 900 East Salt Lake City, UT 84121"
    },
    {
        placeName: "61 Top Stop Vine St",
        LatLng: [{
            lat: 40.639980,
            lng: -111.855420
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "1284 Vine St. Salt Lake City, Utah 84121"
    },
    {
        placeName: "West Jordan Power Wash",
        LatLng: [{
            lat: 40.608760,
            lng: -111.969210
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "7845 Old Bingham Highway West Jordan, Utah 84088"
    },
    {
        placeName: "24 Top Stop Tooele",
        LatLng: [{
            lat: 40.572300,
            lng: -112.296220
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "322 East 2400 North Tooele, Utah 84074"
    },
    {
        placeName: "Monster Car wash",
        LatLng: [{
            lat: 40.521790,
            lng: -111.967510
        }],
        placeLogo: "/img/partner-locations/3.png",
        placeLocation: "3191 W 12600 S Riverton, Utah 84065"
    },
    {
        placeName: "Pioneer Auto Spa",
        LatLng: [{
            lat: 40.525090,
            lng: -111.854160
        }],
        placeLogo: "/img/partner-locations/49.png",
        placeLocation: "1254 Pioneer Road Draper, Utah 84020"
    },
    {
        placeName: "17 Top Stop Saratoga Springs",
        LatLng: [{
            lat: 40.388130,
            lng: -111.917100
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "36 Crossroads Blvd. Saratoga Springs, Utah 84045"
    },
    {
        placeName: "30 Top Stop Lehi",
        LatLng: [{
            lat: 40.387160,
            lng: -111.835880
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "114 South 850 East Lehi, Utah 84043"
    },
    {
        placeName: "Coinless Ever Wash",
        LatLng: [{
            lat: 40.488470,
            lng: -111.268310
        }],
        placeLogo: "/img/partner-locations/248.png",
        placeLocation: "9284 tree top circle UT, Utah 84032"
    },
    {
        placeName: "41 Top Stop Vernal",
        LatLng: [{
            lat: 40.455930,
            lng: -109.541920
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "722 West Main Vernal, Utah 84078"
    },
    {
        placeName: "67 Top Stop Roosevelt",
        LatLng: [{
            lat: 40.302530,
            lng: -109.983780
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "521 E 200 N Roosevelt, Utah 84066"
    },
    {
        placeName: "68 Top Stop Super Clean",
        LatLng: [{
            lat: 40.296770,
            lng: -109.988760
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "201 S Main St. Roosevelt, Utah 84066"
    },
    {
        placeName: "Super Clean Myton",
        LatLng: [{
            lat: 40.191080,
            lng: -110.081250
        }],
        placeLogo: "/img/partner-locations/Top-Stop.png",
        placeLocation: "565 US-40 Myton, Utah 84052"
    },
    {
        placeName: "Citrus Heights Car Wash",
        LatLng: [{
            lat: 38.706790,
            lng: -121.289930
        }],
        placeLogo: "/img/partner-locations/171.png",
        placeLocation: "7742 Auburn Blvd Citrus Heights, CA 95610"
    },
    {
        placeName: "Grease Monkey Carwash",
        LatLng: [{
            lat: 37.123650,
            lng: -113.626020
        }],
        placeLogo: "/img/partner-locations/213.png",
        placeLocation: "1986 W Sunset Blvd St. George, UT 84770"
    },
    {
        placeName: "Decatur Autowash",
        LatLng: [{
            lat: 36.245940,
            lng: -115.207130
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "4750 N Decatur Blvd  North Las Vegas, NV 89031"
    },
    {
        placeName: "C-Me Wash Self-Service Car Wash",
        LatLng: [{
            lat: 34.272560,
            lng: -118.768910
        }],
        placeLogo: "/img/partner-locations/coming_soon.webp",
        placeLocation: "2055 Donville Ave Simi Valley, CA 93065"
    },
    {
        placeName: "Dino Wash",
        LatLng: [{
            lat: 33.784080,
            lng: -117.226150
        }],
        placeLogo: "/img/partner-locations/216.png",
        placeLocation: "216 S Perris Blvd Perris, CA 92570"
    },
    {
        placeName: "Roadrunner Aztec",
        LatLng: [{
            lat: 36.826700,
            lng: -108.013910
        }],
        placeLogo: "/img/partner-locations/coming_soon.webp",
        placeLocation: "1616 W Aztec Blvd Aztec, NM 87410"
    },
    {
        placeName: "Roadrunner Car Wash 4",
        LatLng: [{
            lat: 36.720000,
            lng: -107.978540
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "912 1st St. Bloomfield, NM 87413"
    },
    {
        placeName: "Nimble Wash Bryant",
        LatLng: [{
            lat: 44.587910,
            lng: -97.461500
        }],
        placeLogo: "/img/partner-locations/96.png",
        placeLocation: "502 6th Ave E Bryant, South Dakota 57221"
    },
    {
        placeName: "Nimble Wash Lake Norden",
        LatLng: [{
            lat: 44.581570,
            lng: -97.212340
        }],
        placeLogo: "/img/partner-locations/96.png",
        placeLocation: "1115 Park St. Lake Norden, SD 57248"
    },
    {
        placeName: "Nimble Wash DeSmet",
        LatLng: [{
            lat: 44.383700,
            lng: -97.551040
        }],
        placeLogo: "/img/partner-locations/96.png",
        placeLocation: "109 4TH STREET SOUTHWEST DeSmet, SD 57231"
    },
    {
        placeName: "The Car Wash Co",
        LatLng: [{
            lat: 44.903720,
            lng: -93.081000
        }],
        placeLogo: "/img/partner-locations/135.png",
        placeLocation: "1407 S Robert St West St Paul, Minnesota 55118"
    },
    {
        placeName: "South Carwash",
        LatLng: [{
            lat: 44.654120,
            lng: -90.183120
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "1508 S. Central Ave  Marshfield, Wisconsin 54449"
    },
    {
        placeName: "Car Tub Car Wash",
        LatLng: [{
            lat: 43.386190,
            lng: -87.897930
        }],
        placeLogo: "/img/partner-locations/42.png",
        placeLocation: "1427 W Grand Ave Port Washington, Wisconsin 53074"
    },
    {
        placeName: "24-7 Express Car Wash - Belding",
        LatLng: [{
            lat: 43.088660,
            lng: -85.248270
        }],
        placeLogo: "/img/partner-locations/43.png",
        placeLocation: "1239 W. State Road Belding, Michigan 48818"
    },
    {
        placeName: "24-7 Express Car Wash - Saranac",
        LatLng: [{
            lat: 42.929320,
            lng: -85.214150
        }],
        placeLogo: "/img/partner-locations/43.png",
        placeLocation: "55 Division Street Saranac, Michigan 48881"
    },
    {
        placeName: "Super Shine Express Car Wash",
        LatLng: [{
            lat: 43.292060,
            lng: -84.588870
        }],
        placeLogo: "/img/partner-locations/48.png",
        placeLocation: "1213 E. Center Street Ithaca, Michigan 48847"
    },
    {
        placeName: "Kilworth Car Wash",
        LatLng: [{
            lat: 42.958000,
            lng: -81.412820
        }],
        placeLogo: "/img/partner-locations/232.png",
        placeLocation: "9 Springfield Way Middlesex Centre, ON N0L 1R0"
    },
    {
        placeName: "Kilworth Car Wash",
        LatLng: [{
            lat: 42.958000,
            lng: -81.412820
        }],
        placeLogo: "/img/partner-locations/232.png",
        placeLocation: "9 Springfield Way Middlesex Centre, ON N0L 1R0"
    },
    {
        placeName: "Lansing Car Wash",
        LatLng: [{
            lat: 42.527710,
            lng: -76.499780
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "1901 E Shore Dr Lansing, New York 14882"
    },
    {
        placeName: "East Hill Car Wash",
        LatLng: [{
            lat: 42.438380,
            lng: -76.463840
        }],
        placeLogo: "/img/partner-locations/7.png",
        placeLocation: "383 Pine Tree Rd Ithaca, New York 14850"
    },
    {
        placeName: "Adirondack Car Wash - Main St",
        LatLng: [{
            lat: 43.488340,
            lng: -73.761980
        }],
        placeLogo: "/img/partner-locations/76.png",
        placeLocation: "3669 Main St. Warrensburg, NY 12885"
    },
    {
        placeName: "Adirondack Car Wash Broad St",
        LatLng: [{
            lat: 43.302970,
            lng: -73.662110
        }],
        placeLogo: "/img/partner-locations/76.png",
        placeLocation: "203 Broad St. Glens Falls, NY 12801"
    },
    {
        placeName: "South End Touch Free Car Wash",
        LatLng: [{
            lat: 42.707590,
            lng: -73.712640
        }],
        placeLogo: "/img/partner-locations/120.png",
        placeLocation: "590 1st St. Watervliet, NY 12189"
    },
    {
        placeName: "Mt. Ivy Car Wash",
        LatLng: [{
            lat: 41.188060,
            lng: -74.036440
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "11 Thiells Mt Ivy Rd Pomona, New York 10970"
    },
    {
        placeName: "Bloomingdale Car Wash",
        LatLng: [{
            lat: 41.003140,
            lng: -74.331050
        }],
        placeLogo: "/img/partner-locations/166.png",
        placeLocation: "99-101 Main St. Bloomingdale, New Jersey 07403"
    },
    {
        placeName: "Waynesboro Water Works",
        LatLng: [{
            lat: 39.759080,
            lng: -77.584770
        }],
        placeLogo: "/img/partner-locations/72.png",
        placeLocation: "324 W Main St. Waynesboro, PA 17268"
    },
    {
        placeName: "EZ Express Wash",
        LatLng: [{
            lat: 38.911480,
            lng: -78.191750
        }],
        placeLogo: "/img/partner-locations/coming_soon.webp",
        placeLocation: "115 S St. Front Royal, VA 22630"
    },
    {
        placeName: "Sami's Car Wash at New Circle Rd",
        LatLng: [{
            lat: 38.058020,
            lng: -84.463530
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "370 E. New Circle Road Lexington, Kentucky 40505"
    },
    {
        placeName: "Sami's Car Wash at Winchester Rd",
        LatLng: [{
            lat: 38.042690,
            lng: -84.464200
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "1109 Winchester Road Lexington, Kentucky 40505"
    },
    {
        placeName: "Shammy's Auto Wash",
        LatLng: [{
            lat: 38.009760,
            lng: -84.456070
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "2632 Richmond Road Lexington, KY 40509"
    },
    {
        placeName: "Water Works Car Wash - Jtown",
        LatLng: [{
            lat: 38.217410,
            lng: -85.598670
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "8820 Salsman Drive Louisville, Kentucky 40220"
    },
    {
        placeName: "Starwash Car Wash",
        LatLng: [{
            lat: 40.497697,
            lng: -88.9959891
        }],
        placeLogo: "/img/partner-locations/210.png",
        placeLocation: "1302 S Madison Normal, IL 61761"
    },
    {
        placeName: "Quick Wash Co",
        LatLng: [{
            lat: 41.664170,
            lng: -93.698910
        }],
        placeLogo: "/img/partner-locations/37.png",
        placeLocation: "5740 Merle Hay Road Johnston, Iowa 50131"
    },
    {
        placeName: "Baldwin Power Wash",
        LatLng: [{
            lat: 38.781600,
            lng: -95.181350
        }],
        placeLogo: "/img/partner-locations/143.png",
        placeLocation: "219 E HWY 56 BALDWIN CITY, Kansas 66006"
    },
    {
        placeName: "Waterworks Co No 1",
        LatLng: [{
            lat: 37.6147534,
            lng: -93.4003157
        }],
        placeLogo: "/img/partner-locations/206.png",
        placeLocation: "1100 E Broadway St. Bolivar, MO 65613"
    },
    {
        placeName: "5 Star Car Wash",
        LatLng: [{
            lat: 36.0738345,
            lng: -95.8501866
        }],
        placeLogo: "/img/partner-locations/coinless_default.png",
        placeLocation: "6201 S Garnett Rd Broken Arrow, Oklahoma 74012"
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