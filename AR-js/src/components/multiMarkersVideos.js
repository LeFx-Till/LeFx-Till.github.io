
//Global Variable
var currentMarkerID = -1;
var myVideoAsset = document.querySelector("video");
var currentVideoElement;
var textArea = document.querySelector("textarea");
var playButton = document.querySelector("button");

function SetVideoAttributes() {

    if (currentMarkerID < 0)
        return;

    console.log("0. start setting video asset attributes ");

    if (currentMarkerID < 10) myVideoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
    else myVideoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';

    myVideoAsset.load();
}

AFRAME.registerComponent('button', {
    init: function () {

        console.log("button registration for " + this.el.id);
        console.log("found video asset in button, with source #" + myVideoAsset.src);
        console.log("found text area in button, with innerHTML = " + textArea.innerHTML);
    }
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
