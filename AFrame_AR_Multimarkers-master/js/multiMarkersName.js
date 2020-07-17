//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		var assetsEl = document.querySelector('a-assets');
		
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
				var videoURL="resources/media/Video_00.mp4";	
				console.log('Added Tills SuperDuper Video: ', videoURL);
				var myVideo = document.createElement('video');
				
				//myVideo.setAttribute('id','video0');
				//myVideo.setAttribute('video0',{src: videoURL, autoplay: false, loop crossorigin: 'anonymous'});
				//assetsEl.appendChild(video);
				//sceneEl.appendChild(assetsEl);
				
				// var videoEl = document.createElement('a-video');			
				
				// videoEl.setAttribute('id','#video0');				
				// videoEl.setAttribute('video0',{src:'#video0', height: '3', width:'1.69811321', transparent:false});								
				// videoEl.object3D.position.set(0, 0, 0);
				// videoEl.object3D.rotation.set(0, 0, 0);
				
				// markerEl.appendChild(videoEl);
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
				console.log('Marker Found By Super Till_01: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
