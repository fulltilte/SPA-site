var mapInitialized = false;

function initMap() {
    ymaps.ready(function() {
        map = new ymaps.Map(document.querySelector('.map-container-box-chart'), {
            center: [56.736342, 37.162270],
            zoom: 15 
        });

        marker = new ymaps.Placemark([56.736342, 37.162270], {
            hintContent: 'Hello World!'
        });

        map.geoObjects.add(marker);
        mapInitialized = true;
    });
}

function hidePLAndDisplayMap() {
    plElement = document.querySelector('.pl');
    if (plElement) {
        plElement.style.display = 'none';
    }
    mapContainer = document.querySelector('.map-container-box-chart');
    if (mapContainer) {
        mapContainer.innerHTML = "";
        mapContainer.style.display = 'flex';
        initMap();
    }
}

function handleEvent() {
    let timer = 2000;
    if (mapInitialized) {
        timer = 100;
    }

    setTimeout(function () {
        hidePLAndDisplayMap();
    }, timer);
}

document.getElementById('mapButton').addEventListener('click', handleEvent);
window.addEventListener('load', handleEvent);