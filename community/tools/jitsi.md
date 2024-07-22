# Jitsi

We use a self-hosted [Jitsi Meet](https://jitsi.org) instance for video conferencing.
Thanks go to Cleura for providing the server for it.

The server uses an automated deployment based on the
[heat-docker-jitsi-meet](https://github.com/garloff/heat-docker-jitsi-meet) project.

Configuration is such everyone who knows the room can connect, unless the moderator
sets a password/PIN. Opening a new room requires authentication. (Contact Kurt if
you need a password.)

Links to the meeting room (as well as dial-in information) are in the appointments
in the public calendar.

## Usage

Connect with a desktop browser (Chrome/Chromium or other blink based browser
recommended due to superior WebRTC implementation with SimulCast/SVC for VP8/VP9 --
Safari & Firefox work, but cause higher data traffic). For mobile devices use
the Jitsi Meet App.

Use the little arrows in the control bar at the bottom to select speaker, microphone
and camera in case you lack audio/video. Occasionally, you can not hear all but
one participant; in this case reconnecting typically helps.

We have an asterisk connected to some conference rooms to provide dial-in capabilities
for folks that lack internet connectivity (but have a working phone connection).
