# playhead-position

Simple web component to track the users progress while watching a video.

Currently using cookies to store the progress. Pingbacks are not yet configured to track the progress in a database to work across multiple devices. 

Although you can see a console.log of what would be sent when user pauses or navigates away from the video.

## Example of the web component
```
<playhead-position data-videoid="123456" data-video-player="video-player" data-userid="123456 " />

```


