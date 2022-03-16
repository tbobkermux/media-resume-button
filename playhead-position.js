import storage from "./storage.js";

const template = document.createElement("template");
template.innerHTML = `<div style="display:block;"><input type="checkbox" id="confirmtracking">Click to track where to reume from</div>`;

class playheadPosition extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: "open" }).appendChild(template.cloneNode(true));

    this._playheadPositionElm = document.querySelector("playhead-position");

    this._userid = this._playheadPositionElm.dataset.userid ?? 0;
    this.videoid = this._playheadPositionElm.dataset.videoid;
    this.player = document.getElementById(this._playheadPositionElm.dataset.videoPlayer);

    this.trackPlayheadPosition = this.trackPlayheadPosition.bind(this);
    this.setPlayheadPosition = this.setPlayheadPosition.bind(this);

    this.player.addEventListener("timeupdate", this.trackPlayheadPosition, false);
    this.player.addEventListener("play", this.setPlayheadPosition, false);

    this.player.addEventListener("pause", (evt) => {
        this.playheadPositionServerSide("paused");
    });

    document.addEventListener('visibilitychange',(evt) => {
        this.playheadPositionServerSide();
    });

  }

  playheadPositionServerSide(isPaused = null){

    let analyticsData = {
        "userid": this._userid,
        "videoid": this.videoid.toString(),
        "timeTracked": storage("get", this.videoid),
        "timestamp": Date.now().toString()
    }
    
    if(this._userid > 0){

        if(isPaused == null && document.visibilityState === 'hidden'){
            this.player.pause();
            return;
        }

        if(isPaused == 'paused'){
            storage("track", undefined, undefined, analyticsData);
            return;
        }
    }
    return;
    
  }

  trackPlayheadPosition() {
    storage("set",this.videoid,this.player.currentTime);
  }

  setPlayheadPosition() {

    this.player.addEventListener("loadeddata", 
    (evt) => {
        let getTime = storage("get", this.videoid);
        let duration = this.player.duration;
        if(getTime < duration){
            this.player.currentTime = getTime;
        } else {
            this.player.currentTime = 0;
        }
    }, false);
  }
}

customElements.define("playhead-position", playheadPosition);