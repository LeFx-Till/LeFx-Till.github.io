# What?

This is a website with AR.js and A-Frame to detect a defined marker in the camera stream and place a video over the marker.

More infos:

- wiki: Web+AR+Anwendung
- wiki: Kunde+Zero

# Usage

To test it locally a SSL connection is mandatory. For VSCode just install the extension "Live Server" and edit the settings.json to use the shipped ssl keys.

# Problems

Under iOS the marker is placed incorrectly due to a VR error: https://gist.github.com/RobTranquillo/8132191d48596dae68cef8e9cf48f812
That's why we have two video tags and depending on the hardware platform the incompatible one will be dropped at startup.

On some iOS devices the fullscreen button is working but on some devices is not.

# Apple Informationen:
- https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html
- https://webkit.org/blog/6784/new-video-policies-for-ios/

# Credits
  This one mainly based on https://github.com/taylordigital13/ARjs_Unity
