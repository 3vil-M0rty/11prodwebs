document.addEventListener('DOMContentLoaded', (event) => {
    // Get the popup
    const mapPopup = document.getElementById("mapPopup");

    // Get the button that opens the popup
    const homeButton = document.querySelector(".home");

    // Get the <span> element that closes the popup
    const closeBtn = document.querySelector(".close-btn");

    // When the user clicks the button, open the popup
    homeButton.onclick = function () {
        mapPopup.style.display = "block";
        // Initialize the map here to ensure it displays correctly
        initMap();
    }

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = function () {
        mapPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function (event) {
        if (event.target == mapPopup) {
            mapPopup.style.display = "none";
        }
    }

    // Initialize the map
    function initMap() {
        var map = L.map('map').setView([31.636927, -8.0111466], 25);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([31.636927, -8.0111466]).addTo(map)
            .bindPopup('<span id=spname>11 prod.</span><br><span id=spadd>Arset Benchekroun, lot Hassania, N°28, Marrakech 40000.</span>')
            .openPopup();
        var customControl = L.Control.extend({
            options: {
                position: 'bottomright'
            },
            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-bar');
                var button = L.DomUtil.create('button', 'direction-button', container);
                button.innerHTML = 'Directions';
                button.title = 'Get Directions';
                button.onclick = function () {
                    var lat = marker.getLatLng().lat;
                    var lng = marker.getLatLng().lng;
                    var googleMapsUrl = `https://www.google.com/maps/dir//Arset+Benchekroun,+lot+Hassania,+N%C2%B0+28,+Marrakech+40000/@31.636896,-8.0909676,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xdafef666e79d7cd:0xc60f23e61760306a!2m2!1d-8.0085481!2d31.6369345?entry=ttu`;
                    window.open(googleMapsUrl, '_blank');
                };
                return container;
            }
        });
        map.addControl(new customControl());
    }
});


