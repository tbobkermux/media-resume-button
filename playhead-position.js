import storage from "./storage.js";

const template = document.createElement("tempalte");
template.innerHTML = ``;

class playheadPosition extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.videoid = document.querySelector("playhead-position").dataset.videoid;
    this.playerid = document.querySelector(
      "playhead-position"
    ).dataset.videoPlayer;
    this.trackPlayheadPosition = this.trackPlayheadPosition.bind(this);
    this.setPlayheadPosition = this.setPlayheadPosition.bind(this);

    document.getElementById(this.playerid).addEventListener("timeupdate", this.trackPlayheadPosition, false);
    document.getElementById(this.playerid).addEventListener("play", this.setPlayheadPosition, false);

  }

  trackPlayheadPosition() {
    storage(
      "set",
      this.videoid,
      document.getElementById(this.playerid).currentTime
    );

  }

  setPlayheadPosition() {

    document.getElementById(this.playerid).addEventListener("loadeddata", 
    (evt) => {
        let getTime = storage("get", this.videoid);
        let duration = document.getElementById(this.playerid).duration;
        if(getTime < duration){
            document.getElementById(this.playerid).currentTime = getTime;
        } else {
            document.getElementById(this.playerid).currentTime = 0;
        }
        //console.log(duration);
    }, false);
  }
}

customElements.define("playhead-position", playheadPosition);
