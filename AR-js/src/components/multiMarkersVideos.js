
//Global Variable
var currentMarkerID = -1;
var videoAsset = [];
var currentVideoElement = [];
var textArea = [];
var playButton = [];

function SetVideoAttributes() {

    if (currentMarkerID < 0)
        return;

    console.log("0. start setting video asset attributes ");

    if (currentMarkerID < 10) myVideoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
    else myVideoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';

    myVideoAsset.load();
}

//AFRAME.registerComponent('button', {
//    init: function () {

//        console.log("button registration for " + this.el.id);
//        console.log("found video asset in button, with source #" + myVideoAsset.src);                
//        console.log("found text area in button, with innerHTML = " + textArea.innerHTML);
//    }
//});

AFRAME.registerComponent('markers_start', {

    init: function () {

        var myVideoAsset = document.querySelector("video");        
        var myTextArea = document.querySelector("textarea");
        var myButton = document.querySelector("button");

        console.log("markers_start registration for " + this.el.id + " with video asset #" + myVideoAsset.id + " and its source " + myVideoAsset.src);
        console.log("found text area, with innerHTML = " + myTextArea.innerHTML);
        console.log("found button, with source #" + myButton.innerHTML);

        videoElement.addEventListener("loadedMetaData", () => {

            console.log("added loadedMetaData-event listener for marker  #" + currentMarkerID + " video element " + videoElement.id);

        });
    },
});

AFRAME.registerComponent('registerevents', {

    init: function () {

        const marker = this.el;
        const videoElement = this.el.querySelector('a-video');

        console.log("marker registration for " + this.el.id + " with video element #" + videoElement.id + " and its source " + videoElement.src);
        console.log("found text area in button, with innerHTML = " + textArea.innerHTML);
        console.log("found video asset in button, with source #" + myVideoAsset.src);

        videoElement.addEventListener("loadedMetaData", () => {

            console.log("added loadedMetaData-event listener for marker  #" + currentMarkerID + " video element " + videoElement.id);

        });


        marker.addEventListener("markerFound", () => {

            console.log("added found-event listener for marker  #" + currentMarkerID);
            var markerID = String(marker.id).split('_');

            currentMarkerID = markerID[1];
            currentVideoElement = videoElement;

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
