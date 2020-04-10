function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(10.593684, 100.96288),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(20.593684, 78.96288),
        map: map,
        animation: google.maps.Animation.Drop
    });

    marker.setMap(null);
}