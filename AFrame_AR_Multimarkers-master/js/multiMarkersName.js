//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		//var assetsEl = document.querySelector('a-assets');
		
		//list of the markers
		for(var i=1; i<19; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k=0; k<18; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			if (k==0)
			{								
				var videoURL="resources/media/Video_0-"+k+".mp4";
				var videoEl = document.createElement('a-video');
				
				videoEl.setAttribute('id','myVideo');
				//videoEl.setAttribute('video',{src: videoURL, height: '3', width:'1.69811321', value:markersNameArray[k], transparent:false});
				videoEl.setAttribute('src',videoURL);
				videoEl.setAttribute('height','3');
				videoEl.setAttribute('width','1.69811321');
				videoEl.setAttribute('transparent',false);
				//videoEl.object3D.position.set(0, 0, 0);
				//videoEl.object3D.rotation.set(0, 0, 0);
				
				markerEl.appendChild(videoEl);
			}
			else
			{
				//Adding text to each marker
				var textEl = document.createElement('a-entity');
			
				textEl.setAttribute('id','text');
				textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
				textEl.object3D.position.set(0, 0.7, 0);
				textEl.object3D.rotation.set(-90, 0, 0);				

				markerEl.appendChild(textEl);
			}
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
				if (markerId=='Marker_1')
				{
					console.log('FIRST Marker Found: ', markerId);
				}
				else
				{
					console.log('NOT VALID Marker Found: ', markerId);
				}
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
