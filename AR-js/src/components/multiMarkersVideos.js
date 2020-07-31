
//Global Variable
var currentMarkerID = -1;
var videoAsset = [];
var currentVideoElement = [];
var textArea = [];
var playButton = [];

function ButtonClicked() {


}

function MarkerFound(markerID, videoElement) {
   
    currentMarkerID = String(markerID).split('_')[1];        

    text.innerHTML = "found marker " + markerID + " with id = " + currentMarkerID + " and current video element " + videoElement;

    text.innerHTML += "\n\n0. start setting video asset attributes from source = " + myVideoAsset[0].src;

    if (currentMarkerID < 10) myVideoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
    else myVideoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';

    //myVideoAsset.load();

    text.innerHTML += "\n\n1. done setting video asset attributes to source = " + myVideoAsset[0].src;
}

function MarkerLost() {

    //console.log("added lost-event listener for marker  #" + currentMarkerID);
    //foundMarker = 0;
    //setVideoAsset = 0;
    //setVideoElement = 0;
    //ready2play = 0;

    //textArea.innerHTML = "NO markers visible";
    //isPlaying = false;
    //button.hidden = true;
}

function VideoAssetMetaDataLoaded() {

    //console.log("added loadedMetaData-event listener for marker  #" + currentMarkerID + " video element " + videoElement.id);
}

function VideoElementMetaDataLoaded() {

    //console.log("added loadedMetaData-event listener for marker  #" + currentMarkerID + " video element " + videoElement.id);
}

AFRAME.registerComponent('basevideo', {

    init: function () {

        const myVideoAsset = this.el;
        if (videoAsset.length == 0) videoAsset.push(myVideoAsset);

        console.log("baseVideo registration #" + myVideoAsset.id + " and source " + myVideoAsset.src);
        
        myVideoAsset.addEventListener("loadedMetaData", VideoAssetMetaDataLoaded);
    }
});

AFRAME.registerComponent('markers_start', {

    init: function () {
            
        var myTextArea = document.querySelector("textarea");
        var myButton = document.querySelector("button");
        
        if (textArea.length == 0) textArea.push(myTextArea);
        if (playButton.length == 0) playButton.push(myButton);

        console.log("markers_start registration for " + this.el.id + " with video asset #" + videoAsset[0].id + " and its source " + videoAsset[0].src);
        console.log("found text area, with innerHTML = " + textArea[0].innerHTML);
        console.log("found button, with innerHTML = " + playButton[0].innerHTML);

        playButton[0].addEventListener('click', ButtonClicked);
    }
});

AFRAME.registerComponent('button', {
    init: function () {

        const myMarker = this.el;
        const myVideoElement = this.el.querySelector('a-video');

        console.log("marker registration for " + this.el.id + " with video element #" + myVideoElement.id + " and its source " + myVideoElement.src);        
        console.log("found text area, with innerHTML = " + textArea[0].innerHTML);
        console.log("found button, with innerHTML = " + playButton[0].innerHTML);

        myMarker.addEventListener("markerFound", MarkerFound(myMarker.id, myVideoElement));
        myMarker.addEventListener("markerLost", MarkerLost);
        myVideoElement.addEventListener("loadedMetaData", VideoElementMetaDataLoaded);
    }
});