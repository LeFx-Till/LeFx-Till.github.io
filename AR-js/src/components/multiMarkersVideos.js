
//Global Variable
var currentMarkerID = -1;
var videoAsset = [];
var currentVideoElement = [];
var textArea = [];
var playButton = [];

function ButtonClicked() {


}

function MarkerFound() {

    //console.log("added found-event listener for marker  #" + currentMarkerID);
    //var markerID = String(marker.id).split('_');

    //currentMarkerID = markerID[1];
    //currentVideoElement = videoElement;

    //text.innerHTML = "current marker id = " + currentMarkerID;

    //SetVideoAttributes();
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

        const marker = this.el;
        const videoElement = this.el.querySelector('a-video');

        console.log("marker registration for " + this.el.id + " with video element #" + videoElement.id + " and its source " + videoElement.src);
        //console.log("found text area in button, with innerHTML = " + textArea.innerHTML);
        //console.log("found video asset in button, with source #" + myVideoAsset.src);
                
        marker.addEventListener("markerFound", MarkerFound);
        marker.addEventListener("markerLost", MarkerLost);
        videoElement.addEventListener("loadedMetaData", VideoElementMetaDataLoaded);
    }
});

AFRAME.registerComponent('markers_start', {

    init: function () {

        var myVideoAsset = document.querySelector("video");        
        var myTextArea = document.querySelector("textarea");
        var myButton = document.querySelector("button");

        if (videoAsset.length == 0) videoAsset.push(myVideoAsset);
        if (textArea.length == 0) textArea.push(myTextArea);
        if (playButton.length == 0) playButton.push(myButton);

        console.log("markers_start registration for " + this.el.id + " with video asset #" + videoAsset[0].id + " and its source " + videoAsset[0].src);
        console.log("found text area, with innerHTML = " + textArea[0].innerHTML);
        console.log("found button, with innerHTML = " + playButton[0].innerHTML);

        playButton[0].addEventListener('click', ButtonClicked);
    }
});

AFRAME.registerComponent('baseVideo', {

    init: function () {

        const myVideoAsset = this.el;
        var myTextArea = document.querySelector("textarea");
        var myButton = document.querySelector("button");

        console.log("baseVideo registration #" + myVideoAsset.id + " and source " + myVideoAsset.src);
        console.log("found text area, with innerHTML = " + myTextArea.innerHTML);
        console.log("found button, with source #" + myButton.innerHTML);

        myVideoAsset.addEventListener("loadedMetaData", VideoAssetMetaDataLoaded);
    }
});