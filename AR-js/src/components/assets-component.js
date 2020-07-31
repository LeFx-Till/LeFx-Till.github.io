        AFRAME.registerComponent('a-scene', {

            init: function () {

                console.log('###############################################################');
                var textArea = document.querySelector("#textArea");
                var videoAsset = document.querySelector("#Video_Asset");
                videoAsset.pause();

                myVideoAsset.push(videoAsset);

                textArea.innerHTML = " START with video " + videoAsset.src + " w " + videoAsset.width + " h " + videoAsset.height +
                    "\n from array " + myVideoAsset[0].src + " w " + myVideoAsset[0].width + " h " + myVideoAsset[0].height;
            }
        });