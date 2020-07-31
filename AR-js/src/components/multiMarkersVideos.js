
//Global Variable
var initialized = 0;
var currentMarkerID = -1;
var videoAsset = [];
var videoAssetSource = [];
var videoAssetWidth = [];
var videoAssetHeight = [];
var currentVideoElement = [];
var textArea = [];
var playButton = [];

function ButtonClicked() {


}

function MarkerFound(markerID, videoElement) {

    currentMarkerID = String(markerID).split('_')[1];        

    textArea[0].innerHTML = "found marker " + markerID + " with id = " + currentMarkerID + " and current video element " + videoElement;
    textArea[0].innerHTML += "\n\n0. start setting video asset attributes from source = " + videoAsset[0].src;

    if (currentMarkerID < 10) videoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
    else videoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';

    myVideoAsset.load();
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

function VideoAssetMetaDataLoaded(videoelement) {

    if (initialized == 0) {

        if (videoAssetHeight.length == 0) videoAssetHeight.push(myVideoAsset.height);
        if (videoAssetWidth.length == 0) videoAssetWidth.push(myVideoAsset.width);

        console.log("d baseVideo registration h = " + videoAssetHeight[0]);
        console.log("e baseVideo registration w = " + videoAssetWidth[0]);
        return;
    }
    
    textArea[0].innerHTML += "\n1. done setting video asset attributes to source = " + videoAssetSource[0];
    textArea[0].innerHTML += "\n2. start setting video element attributes from w = " + videoAssetWidth[0] + " and h = " + videoAssetHeight[0];

    if (videoAssetWidth[0] < videoAssetHeight[0]) {

        var widthEl = 3 * videoAssetWidth[0] / videoAssetHeight[0];
        videoElement.setAttribute("width", String(widthEl));
        videoElement.setAttribute("height", "3");
    }
    else {

        var heightEl = 3 * videoAssetHeight[0] / videoAssetWidth[0];
        videoElement.setAttribute("width", "3");
        videoElement.setAttribute("height", String(heightEl));
    }

    //videoElement.load();

    text.innerHTML += "\n3. done setting video element attributes to w = " + videoElement[0].width + " and h = " + videoElement.height;
    text.innerHTML += "\n4. I am ready to play the correct video";
}

function VideoElementMetaDataLoaded() {

    //console.log("added loadedMetaData-event listener for marker  #" + currentMarkerID + " video element " + videoElement.id);
}

AFRAME.registerComponent('markersstart', {

    init: function () {

        var myTextArea = document.querySelector("textarea");
        myTextArea.innerHTML = "Hey Tillos";
        if (textArea.length == 0) textArea.push(myTextArea);

        var myButton = document.querySelector("button");
        myButton.addEventListener('click', ButtonClicked);
        if (playButton.length == 0) playButton.push(myButton);
        
        var myVideoAsset = document.querySelector("video");
        myVideoAsset.addEventListener("loadedMetaData", VideoAssetMetaDataLoaded);

        if (videoAsset.length == 0) videoAsset.push(myVideoAsset);
        if (videoAssetSource.length == 0) videoAssetSource.push(myVideoAsset.src);

        console.log("found text area, with innerHTML = " + textArea[0].innerHTML);
        console.log("found button, with innerHTML = " + playButton[0].innerHTML);
        console.log("a baseVideo registration #" + myVideoAsset.id + " and source " + myVideoAsset.src);
        console.log("b baseVideo registration #" + videoAsset[0].id + " and source " + videoAsset[0].src);
        console.log("c baseVideo registration src = " + videoAssetSource[0]);
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