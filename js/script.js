document.getElementById('mapButton').addEventListener('click', function(event) {
    setTimeout(function () {
        var plElement = document.querySelector('.pl');
        if (plElement) {
            plElement.style.display = 'none';
        }
        var mapContainer = document.querySelector('.map-container-box-chart');
        if (mapContainer) {
            mapContainer.innerHTML = "";
            mapContainer.style.display = 'flex';
            initMap();
        }
    }, 3000);
});

function initMap() {
    ymaps.ready(function() {
        var map = new ymaps.Map(document.querySelector('.map-container-box-chart'), {
            center: [56.736342, 37.162270],
            zoom: 15 
        });

        var marker = new ymaps.Placemark([56.736342, 37.162270], {
            hintContent: 'Hello World!'
        });

        map.geoObjects.add(marker);
    });
}

window.addEventListener('load', function() {
    setTimeout(function () {
        var plElement = document.querySelector('.pl');
        if (plElement) {
            plElement.style.display = 'none';
        }
        var mapContainer = document.querySelector('.map-container-box-chart');
        if (mapContainer) {
            mapContainer.innerHTML = "";
            mapContainer.style.display = 'flex';
            initMap();
        }
    }, 3000);
});