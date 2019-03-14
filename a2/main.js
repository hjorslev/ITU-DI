$(function () {
    var position = {};
    // var data = '[[55.65969286655917, 12.591260075569155], [55.660189901330526, 12.591539025306703], [55.66017628402361, 12.590334713459017], [55.660226214125785, 12.589370459318163], [55.660192170881196, 12.592247128486635], [55.66015207546631, 12.593153715133669], [55.66042442087282, 12.592319548130035]]'
    var data = [[55.7675092, 12.1336742]];
    var coord
    var lat
    var lng

    // Render normal map.
    map = new L.Map('map', {
        zoom: 8,
        layers: L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
            attribution: ''
        })
    });
    L.control.scale().addTo(map);
    map.locate({ setView: true, maxZoom: 16, watch: true })

    // Size of the circle that is stored.
    var initRadius = 50;
    $('input.range').attr('value', initRadius);

    // Dark layer
    var coverageLayer = new L.TileLayer.MaskCanvas({ 'opacity': 0.59, radius: initRadius, useAbsoluteRadius: true, 'attribution': '' });

    // When the location is found, run the function "onLocationFound"
    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        // remove any previous markers
        if (position != undefined) {
            map.removeLayer(position);
        }

        // place a marker on the map at geolocated point.
        position = L.circleMarker(e.latlng).addTo(map);

        // Get current lat and lng.
        lat = e.latlng.lat
        lng = e.latlng.lng

        data.push([lat, lng]);
        console.log(data)

        // Set up overlays
        coverageLayer.setData(data);
        map.fitBounds(coverageLayer.bounds);
        map.addLayer(coverageLayer);
    }
});