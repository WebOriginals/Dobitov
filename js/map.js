// var iconBase = 'img/baloon.svg';
// var iconRed = 'img/baloon-red.svg';
// var iconBase = {url:'img/baloon.svg',
//     scaledSize: new google.maps.Size(31, 43)   // удалить
// }
var iconBase = 'img/baloon.svg';
var iconRed = 'img/baloon-red.svg';
var markersData = [
    {
        lat: 45.614860,     // Широта
        lng: 38.937784,    // Долгота
        name: "Название 1", // Произвольное название, которое будем выводить в информационном окне
        address: "Адрес 1",   // Адрес, который также будем выводить в информационном окне
        iconSt: iconRed
    },
    {
        lat: 45.218358, 
        lng: 39.663842,
        name: "Название 2",
        address: "Адрес 2",
        iconSt: iconBase
    },
    {
        lat: 45.216503, 
        lng: 39.703348,
        name: "Название 3",
        address: "Адрес 3",
        iconSt: iconRed
    },
    {
        lat: 45.103481, 
        lng: 38.974649,
        name: "Название 4",
        address: "Адрес 4",
        iconSt: iconBase
    },
    {
        lat: 45.025327, 
        lng: 39.036492,
        name: "Название 5",
        address: "Адрес 5",
        iconSt: iconBase
    }
];

// Объявляем переменные map и infoWindow за пределами функции initMap,
// тем самым делая их глобальными и теперь мы их можем использовать внутри любой функции, а не только внутри initMap, как это было раньше.
var map, infoWindow;

function initMap() {
    // var centerLatLng = new google.maps.LatLng(45.428904, 38.694578);
    // var centerLatLng = new google.maps.LatLng(45.394461, 38.690993);  
    var centerLatLng = new google.maps.LatLng(45.369505, 38.690542);  
    var mapOptions = {
        center: centerLatLng,
        zoom: 9,
        scrollwheel: false,
        styles: [{
            stylers: [{
                saturation: -100
            }]
        }],
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();

    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function () {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });

    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++) {

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        var iconE = markersData[i].iconSt;

        // Добавляем маркер с информационным окном
        addMarker(latLng, name, address, iconE);

    }

}
// new google.maps.event.addDomListener(window, "load", initMap);
// google.maps.event.addDomListener(window, "load", initMap);

// Функция добавления маркера с информационным окном
function addMarker(latLng, name, address, iconE) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name,
        icon: iconE,   
        // optimized: false,     //elfkb
        // zIndex: 1,   
    });

    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function () {

        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow map-popup">' +
            '<div class="map-popup__name">' + name + '</div>' +
            '<div class="map-popup__address">' + address + '</div>' +
            '</div>';

        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);

        // Показываем информационное окно
        infoWindow.open(map, marker);

    });
}   