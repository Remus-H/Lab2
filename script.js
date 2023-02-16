mapboxgl.accessToken = 'pk.eyJ1IjoicmVtdXMtaCIsImEiOiJjbGNxd3EzeWUwMHhqM25wczN4c2ptZXMxIn0.5EiYWJX4GvtLPR4snGgTHA'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
 container: 'map', // Add div container ID for your map
 style: 'mapbox://styles/remus-h/cle3orndm000401mrc0qid4br', // Add link to style URL
 center: [-104.638, 54.880], // starting position [longitude, latitude]
 zoom: 5.0, // starting zoom
});

map.on('load', () => {
    map.addSource('nationalpark', { //Your source ID
        'type': 'vector',
        'url': 'mapbox://remus-h.79f1zpar' //Your tileset link from mapbox
    })
    map.addLayer({
        'id': 'parks',
        'type': 'fill',
        'source': 'nationalpark',
        'paint': {
            'fill-color': '#00892A',
            },
        'source-layer': 'National_Parks-co67if' //name of layer. Get this from mapbox tileset page
            });
    map.addSource('ct', { //Your source ID
        'type': 'vector',
        'url': 'mapbox://remus-h.c5tz8z93' //Your tileset link from mapbox
    })
    map.addLayer({
        'id': 'tracts',
        'type': 'line',
        'source': 'ct', //must match source ID from addSource method
        'paint': {
                'line-color': '#B42222',
            },
        'source-layer': 'CT_Boundary-4l4d0h' //name of layer. Get this from mapbox tileset page
            },
        );
});


