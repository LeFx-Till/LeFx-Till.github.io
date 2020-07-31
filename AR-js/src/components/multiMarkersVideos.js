
//Global Variable
var currentMarkerID = -1;
var myVideoAsset;
var myVideoElement;
var textArea;

AFRAME.registerComponent('button', {
    init: function () {

        console.log("button registration for " + this.el.id);
        textArea = document.querySelector("#textArea");

        myVideoAsset = document.querySelector("video");
        console.log("found video asset with source#" + myVideoAsset.src);
    }
});

AFRAME.registerComponent('registerevents', {

    init: function () {

        const marker = this.el;
        const videoElement = this.el.querySelector('a-video');        

        textArea = document.querySelector("#textArea");
        myVideoAsset = document.querySelector("#Video_Asset");
        

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
