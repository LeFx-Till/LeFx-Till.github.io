
//Global Variable
var markersURLArray = [];
var markersNameArray = [];
var currentMarkerID = -1;

AFRAME.registerComponent('markers_start', {
    init: function () {

        var textArea = document.querySelector("#textArea");
        console.log("marker start with textarea " + texta.innerHTML);
    }
});

AFRAME.registerComponent('button', {
    init: function () {
            
        console.log("button registered");
    }
});

AFRAME.registerComponent('registerevents', {

    init: function () {

        const marker = this.el;
        var debug = document.querySelector('a-scene').components.textArea;

        marker.addEventListener("markerFound", () => {

            console.log("added found-event listener for marker  #" + currentMarkerID);
            var markerID = String(marker.id).split('_');

            currentMarkerID = markerID[1];
                        
            text.innerHTML = "current marker id = " + currentMarkerID;

            SetVideoAttributes();
        });

        marker.addEventListener("markerLost", () => {

            console.log("added lost-event listener for marker  #" + currentMarkerID);
            //foundMarker = 0;
            //setVideoAsset = 0;
            //setVideoElement = 0;
            //ready2play = 0;

            //textArea.innerHTML = "NO markers visible";
            //isPlaying = false;
            //button.hidden = true;
        });
    },
});
