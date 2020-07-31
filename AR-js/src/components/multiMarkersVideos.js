
//Global Variable
var initialized = 0;
var currentMarkerID = -1;
var videoAsset = [];
var videoElement= [];
var videoAssetSource = [];
var videoAssetWidth = [];
var videoAssetHeight = [];
var currentVideoElement = [];
var textArea = [];
var playButton = [];

function ButtonClicked() {


}

function MarkerFound(markerID) {

    currentMarkerID = String(markerID).split('_')[1];        

    textArea[0].innerHTML = "found marker " + markerID + " with id = " + currentMarkerID + " and current video element " + videoElement[0];
    textArea[0].innerHTML += "\n\n0. start setting video asset attributes from source = " + videoAsset[0].src;

    if (currentMarkerID < 10) videoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
    else videoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';
    
    videoAsset[0].load();
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

function VideoAssetLoaded() {

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
        videoElement[0].setAttribute("width", String(widthEl));
        videoElement[0].setAttribute("height", "3");
    }
    else {

        var heightEl = 3 * videoAssetHeight[0] / videoAssetWidth[0];
        videoElement[0].setAttribute("width", "3");
        videoElement[0].setAttribute("height", String(heightEl));
    }

    videoElement[0].load();

    textArea[0].innerHTML += "\n3. done setting video element attributes to w = " + videoElement[0].width + " and h = " + videoElement.height;
    textArea[0].innerHTML += "\n4. I am ready to play the correct video";
}

function VideoElementLoaded() {

    textArea[0].innerHTML += "\n5. loaded video element data";    
}

AFRAME.registerComponent('markersstart', {

    init: function () {

        var myTextArea = document.querySelector("textarea");
        var myButton = document.querySelector("button");
        var myVideoAsset = document.querySelector("video");

        if (textArea.length == 0) textArea.push(myTextArea);
        if (playButton.length == 0) playButton.push(myButton);
        if (videoAsset.length == 0) videoAsset.push(myVideoAsset);
        if (videoAssetSource.length == 0) videoAssetSource.push(myVideoAsset.src);

        myTextArea.innerHTML = "Hey Tillos";        
        myButton.addEventListener('click', ButtonClicked);
        myVideoAsset.addEventListener('loadedmetadata', VideoAssetLoaded);

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

        if (videoElement.length == 0) videoElement.push(myVideoElement);
        else videoElement[1] = myVideoElement;
        
        myMarker.addEventListener('markerFound', MarkerFound(myMarker.id));
        myMarker.addEventListener('markerLost', MarkerLost);
        myVideoElement.addEventListener("loadedMetaData", VideoElementLoaded);
    }
});