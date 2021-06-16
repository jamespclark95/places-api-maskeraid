// const apiKey = 'AIzaSyDaXpjaqVUhl0MLKeyTqH2ZZIO-9izs96U';
// const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`

const maskIcon = 'images/face-mask.png'
const iconSelection = document.getElementById('choices');


// Initialize and add the map
function initMap() {
    // Create variable for NH lon & lat
    const lowell = { lat: 42.6334, lng: -71.3162 };
    // Sets default to zoom in on NH
    let options = {
      zoom: 9,
      center: lowell,
    }
    // Creates a new map that is centered on NH
    let map = new google.maps.Map(document.getElementById('map'), options);

    
    
    // TURN THIS INTO A FUNCTION TO CREATE ~~~ MASK MARKER ~~~
    let maskMarker = new google.maps.Marker({
      // Replace position with input coordinates
      position: {lat: 42.9956, lng: -71.4548},
      map,
      icon: '/images/patient.png'
    });

    
    
    // TURN THIS INTO A FUNCTION TO CREATE ~~~ NO MASK ICON ~~~~
    let noMaskMarker = new google.maps.Marker({
      // Replace position with input coordinates
      position: {lat: 42.9056, lng: -71.4548},
      map,
      icon: '/images/no-mask.png'
    });

    
    
    // TURN THIS INTO A FUNCTION TO CREATE ~~~ VACCINE REQUIRED ICON ~~~
    let passportIcon = new google.maps.Marker({
      // Replace position with input coordinates
      position: {lat: 42.8956, lng: -71.5548},
      map,
      icon: '/images/driver-license.png'
    });

    map.addListener("click", (e) => {
      if (iconSelection.value == 1){placeMaskMarker(e.latLng, map)}
      else if (iconSelection.value == 2){placeNoMaskMarker(e.latLng, map)}
      else if(iconSelection.value == 3) {placePassportMarker(e.latLng, map)}
    });
    
    function placePassportMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/images/driver-license.png'
      })
    };

    function placeMaskMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/images/patient.png'
      })
    };
    function placeNoMaskMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/images/no-mask.png'
      });
    }
};



