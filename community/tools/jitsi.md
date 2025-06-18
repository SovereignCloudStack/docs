# Jitsi

We use a self-hosted [Jitsi Meet](https://jitsi.org) instance for video conferencing.
Thanks go to Cleura for providing the server VM for it.

Jitsi has served us well, providing good quality and reliable VC service while allowing
multiple screen shares and conferences with (at least) up to 50 video participants.

The server uses an automated deployment based on the
[heat-docker-jitsi-meet](https://github.com/garloff/heat-docker-jitsi-meet) project.

Configuration is such everyone who knows the room can connect, unless the moderator
sets a password/PIN. Opening a new room requires authentication. (Contact
[Kurt](https://scs.community/garloff) if you need a password.)

Links to the meeting room (as well as dial-in information) are in the appointments
in the public calendar.

## Usage

Connect with a desktop browser or (for mobile devices) the Jitsi Meet App.

Use the little arrows in the control bar at the bottom to select speaker, microphone
and camera in case you lack audio/video.

## Features

### Whiteboard and Etherpad

The Jitsi instance has an etherpad and a whiteboard enabled.
These tools can be used for collaborative creation and collection of content.
Don't forget to save the contents to a persistent place after the meeting.

### Codecs

It is configured to prefer video codecs [AV1](https://en.wikipedia.org/wiki/AV1)
over [VP9](https://en.wikipedia.org/wiki/VP9)
over [VP8](https://en.wikipedia.org/wiki/VP8)
over [H.264](https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC).
It prefers the [opus](https://opus-codec.org/) audio codec.

These settings are chosen to provide good video and audio quality for clients
with modern hardware at moderate bandwidth requirements.
Clients can chose to use older codecs without impacting audio or video streams
of others.

## Dial-In

Dial-In may be more stable for participants that have a stable phone connection, but
not a reliable internet connection.

We thus have an audio bridge using jigasi and [asterisk](https://www.asterisk.org/)
connected to a [SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) provider.
This allows a distinct set of rooms to be provided with phone dial-in.

Here's the setup:

| Room Name       | Dialin Suffix |
| --------------- | ------------- |
| SCS-Tech        | 611           |
| SCS-Governance  | 612           |
| Open-Operations | 613           |
| SCS-OSISM       | 614           |
| SCS-Project     | 615           |
| SCS-Forum       | 616           |
| SCS-Kurt        | 617           |
| SCS-Taskforce   | 618           |
| SCS-ProjectTeam | 619           |

Dial +49-221-292772-Suffix to connect.

Rooms protected with a PIN would use 60x instead of 61x as suffix.
Rooms with a three or four-digit number as room name would be connected to -61XXX or -61XXXX.
Note that dial-in is not super-reliable due to occasional trouble with the SIP provider.
So double-check ahead of important conference calls that require phone dial-in. Talk to Kurt
to change room assignment or to resolve issues with dial-in.

## Browser specific hints

Traditionally, the [blink](<https://en.wikipedia.org/wiki/Blink_(browser_engine)-based>>
browsers (like Google Chrome, Chromium, Edge, ...) supported WebRTC best.
Safari and Firefox do work, but at the cost of inferior codecs or increased CPU or
bandwidth requirements (e.g. due to missing [SimulCast](https://en.wikipedia.org/wiki/Simulcast)
support or missing hardware acceleration).

### Firefox and VP9 / AV1

On [Firefox](https://www.mozilla.org), in `about:config`,
you can enable `media.peerconnection.video.vp9_preferred` and
`media.webrtc.simulcast.vp9.enabled` for using VP9 video codec (which is better than VP8).

By enabling experimental `media.webrtc.codec.video.av1.experimental_preferred` you even get AV1
(which is even better) in Firefox 139+. Depending on whether your hardware has hardware support for VP9
or AV1 encoding support and on whether that is exposed by your graphics driver stack, this may or may
not create high CPU usage which you may not consider welcome as mobile user.

## Limitations

### Firewalls blocking UDP traffic

While the web interface uses https (port 8443) which most firewalls find acceptable, the audio and
video is transmitted via UDP (port 10000+). Some corporate and many public sector firewalls believe
that outgoing(!) UDP traffic is dangerous and needs to be intercepted. This means that our Jitsi
setup will not work for participants behind such firewalls.
(We do not currently have a [COTURN](https://github.com/coturn/coturn) server to work around this;
instead we use other VC tools such as BB or OpenTalk or the tool of the partner.))

### Large conferences

For large conferences, it is recommended that participants stay muted and raise their hand
in order to talk, so a moderator can ensure a somewhat structured discussion. While Jitsi can route
a few dozens of video streams without trouble, the combines bandwidth may become a challenge for
some of the participants and it is recommended to only switch on videos for the active participants.
We have not tested much above 50 participants in the SCS community, so we don't know the precise limits
of the server connection or capacity we use.

## Known Issues

### Local audio

A lack of audio is often in the local audio setup (mixer volumes turned to zero etc.).
On Linux systems, the `pavucontrol` mixer may be the best starting point to resolve issues.

### Selective Stream forwarding failure

Jitsi receives one or several audio and video streams from every participiant and selectively
forwards those to all recipients that have subscribed to these streams. (Typically, a low-res video
stream is sent in addition to a medium-res and a high-res one — if any high-res subscribers exist).
This approach to video-conferencing is called
[selective forwarding unit (SFU)](https://bloggeek.me/webrtcglossary/sfu/).
Occasionally, one of the participants can not hear one other (out of many) participants but everyone
else can hear echa other - a subscription to an audio (or video) stream may have gotten lost.
In this case, a reconnect by the one not hearing is the best remedy.

### Screen sharing frame rate

Some browsers seem to ignore the FPS setting and try to transmit a shared window (or a shared
desktop) at high resolution (e.g. 2560x1600) with 30fps. This requires more bandwidth than ADSL
links typically handle. This can result in low-resolution streams rather than the (wanted) low-fps
high-resolution stream.
