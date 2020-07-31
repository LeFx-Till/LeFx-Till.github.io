AFRAME.registerComponent('button', {

            init: function () {
				
				
				        var currentMarker = '';
        var currentMarkerID = '';
        var foundMarker = 0;
        var setVideoAsset = 0;
        var setVideoElement = 0;
        var ready2play = 0;
        var videoArray = [];
        var myVideoAsset = [];
        var myVideoElement = [];        

                var button = document.querySelector("#mutebutton");
                var debugButton = document.querySelector("#debugbutton");
                var textArea = document.querySelector("#textArea");

                const marker = this.el;

                button.hidden = true;
                debugButton.hidden = false;

                function PlayVideo() {

                    if (ready2play == 0) {

                        ready2play = 1;

                        try {

                            myVideoAsset.load();
                            myVideoAsset.play();
                            textArea += "\n\n I Want to play a video";
                        }
                        catch (e) {

                            debugButton.innerHTML = e.message;
                        }
                    }
                }

                function LetsPlayVideo() {

                    ready2play = 1;
                    button.innerHTML = "-- PLAY VIDEO --";
                    button.hidden = false;
                }

                function RestartSearchMarkers() {

                    foundMarker = 0;
                    setVideoAsset = 0;
                    setVideoElement = 0;
                    ready2play = 0;

                    debugButton.innerHTML = '_____';
                    textArea.innerHTML = "NO markers visible";
                    isPlaying = false;
                    button.hidden = true;
                }

                function SearchMarkers() {

                    var markerID = String(marker.id).split('_');

                    currentMarkerID = markerID[1];

                    debugButton.innerHTML = "current marker id = " + currentMarkerID;

                    SetVideoAttributes();
                }

                function SetVideoAttributes() {

                    if (foundMarker == 0) {

                        foundMarker == 1;

                        textArea.innerHTML = "0. start setting video asset attributes " + myVideoAsset[0].width;

                        myVideoAsset[0].addEventListener('loadedmetadata', VideoAssetMetaDataLoaded);

                        myVideoAsset[0].id = 'Video_Asset_' + currentMarkerID;

                        if (currentMarkerID < 10) myVideoAsset[0].src = 'media/Video_00' + currentMarkerID + '.mp4';
                        else myVideoAsset[0].src = 'media/Video_0' + currentMarkerID + '.mp4';
                    }
                }

                function VideoAssetMetaDataLoaded() {

                    if (setVideoAsset == 0) {

                        setVideoAsset == 1;

                        var myVideoElement = marker.querySelector('a-video');

                        textArea.innerHTML += "\n1. done setting video asset attributes on marker " + marker.id + " with source " + myVideoAsset[0].src + " and width " + myVideoElement.width + " height " + myVideoElement.height + " asset w = " + myVideoAsset[0].width + " h = " + myVideoAsset[0].height;

                        myVideoElement.src = '#' + myVideoAsset.id;
                        myVideoElement.id = 'Video_' + currentMarkerID;

                        if (myVideoAsset[0].width < myVideoAsset[0].height) {

                            var widthEl = 3 * myVideoAsset.width / myVideoAsset.height;
                            myVideoElement.setAttribute("width", String(widthEl));
                            myVideoElement.setAttribute("height", "3");
                        }
                        else {

                            var heightEl = 3 * myVideoAsset[0].height / myVideoAsset[0].width;
                            myVideoElement.setAttribute("width", "3");
                            myVideoElement.setAttribute("height", String(heightEl));
                        }

                        textArea.innerHTML += "\n>> width " + myVideoElement.width + " height " + myVideoElement.height + " asset w = " + myVideoAsset[0].width + " h = " + myVideoAsset[0].height;
                        myVideoElement.load();
                    }

                    if (setVideoElement == 0) {

                        setVideoElement = 1;
                        textArea.innerHTML += "\n2. done setting video element attributes " + myVideoAsset[0].src + " == " + myVideoElement.src + " with video asset ready state = " + myVideoAsset[0].readyState;
                        button.addEventListener('click', PlayVideo);
                        LetsPlayVideo();
                    }

                }

                function VideoElementMetaDataLoaded() {

                    if (setVideoElement == 0) {

                        setVideoElement = 1;
                        textArea.innerHTML += "\n2. done setting video element attributes " + myVideoAsset.src + " == " + myVideoElement.src + " with video asset ready state = " + myVideoAsset.readyState;
                        button.addEventListener('click', PlayVideo);
                        LetsPlayVideo();
                    }
                }

                marker.addEventListener('markerFound', SearchMarkers);

                marker.addEventListener('markerLost', RestartSearchMarkers);
            }
        });