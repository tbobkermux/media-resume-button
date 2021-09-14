import { exlixirDB, useLocalStorage } from "./storage.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
button{
  font-family: monospace;
  padding: 0 .5rem;
  cursor:pointer;
}

#restart-resume{
  margin:0;
  padding:0;
  height:100%;
  width:100%;
  text-align: center;
  background-color:rgba(0, 0, 0, 0.7);;
}
</style>
<div id="restart-resume">
<div style="position: relative;top: 40%;">
<button type="button" id="restart">< Restart</button>
<button type="button" id="resume">Resume ></button>
</div>
</div>`;

let initTime = Date.now();

class playheadPosition extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.trackServerSideTimeInterval = 6000;

    this.userid = this.dataset.userid ?? 0;
    this.videoid = this.dataset.videoid;
    this.publisher = this.dataset.publisher;
    this.player = document.getElementById(this.dataset.videoPlayer);
    this.uniqueIdentifier = this.dataset.userid + this.dataset.videoid + this.dataset.publisher;

    this.resumeBtn = this.shadowRoot.querySelector("#resume");
    this.restartBtn = this.shadowRoot.querySelector("#restart");

    this.buttons = document.querySelector("playhead-position");
    this.buttons.style.position = "absolute";
    this.buttons.style.left = this.player.getBoundingClientRect().left + window.scrollX;
    this.buttons.style.top = this.player.getBoundingClientRect().top + window.scrollY;
    this.buttons.style.width = this.player.width;
    this.buttons.style.height = this.player.height;


    this.trackPlayheadPosition = this.trackPlayheadPosition.bind(this);
    this.setPlayheadPosition = this.setPlayheadPosition.bind(this);
    //this.showButtons = this.showButtons(this);

  }

  connectedCallback(){

    this.player.addEventListener('timeupdate', this.trackPlayheadPosition, false);
    this.player.addEventListener('play', this.setPlayheadPosition, false);
    this.player.onpause = () => {
      this.style.display = 'block';
    }

    this.restartBtn.addEventListener("click", () =>{
      this.setPlayheadPosition(0);
    })

    this.resumeBtn.addEventListener("click", () =>{
      this.setPlayheadPosition('tracked');
    })
  }

  trackPlayheadPosition() {
    let timePassed = Date.now() - initTime;

    let data = {
      userid: this.userid,
      videoid: this.videoid,
      playhead: Math.round(this.player.currentTime),
      publisher: this.publisher,
      uniquehash: this.userid+this.videoid+this.publisher
    }
    useLocalStorage('updatePlayHead', data);

    console.log(timePassed);

    if(timePassed > this.trackServerSideTimeInterval){
      exlixirDB(data);
      initTime = Date.now();
    }
  }


  setPlayheadPosition(start) {


    if(typeof start == 'number'){
      this.player.currentTime = start;
      console.log("player current time " + start);
    }

    if(typeof start == 'string' && start == 'tracked'){
      let queryLocalStorage = useLocalStorage("getCurrentPlayHead", {uniquehash: this.uniqueIdentifier});
      console.log(queryLocalStorage);
      queryLocalStorage = JSON.parse(queryLocalStorage);
      this.player.currentTime = queryLocalStorage.playhead;
    }

    this.player.play();
    this.style.display = 'none';



  }

}

function addCustomElement(){
  customElements.define("playhead-position",  playheadPosition)
}

// add call here, because onload did not work for me
addCustomElement()
