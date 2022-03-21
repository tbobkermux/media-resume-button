import { storage } from "./localstorage.js";

const template = document.createElement("template");


template.innerHTML = `
<style>
:host{
  position:absolute;
}
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

class MediaResumeButton extends window.HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.trackServerSideTimeInterval = 6000;

    this.player = document.getElementById(this.getAttribute("player"));
    storage.playbackid = this.getAttribute("playbackid");

    this.setPlayhead = (storage.get() > 0) ? storage.get() : 0;

    this.resumeBtn = this.shadowRoot.querySelector("#resume");
    this.restartBtn = this.shadowRoot.querySelector("#restart");

    this.changeRootStyles({
      left: this.player.getBoundingClientRect().left + window.scrollX,
      top: this.player.getBoundingClientRect().top + window.scrollY,
      width: this.player.width,
      height: this.player.height
    });

  }


  changeRootStyles(styles){
    for (const key in styles) {
      this.style[key] = styles[key];
    }
  }

  connectedCallback(){

    this.player.currentTime = this.setPlayhead;

    if(this.setPlayhead == 0){
      this.style.display = 'none';
    }

    this.player.addEventListener('timeupdate', function(e){
      const controller = e.path[0];
      storage.set({
        playhead: controller.currentTime,
      });
    });

    this.resumeBtn.addEventListener('click', function(e){
      const player = e.path[4].player;
      player.currentTime = storage.get();
      player.play();
      e.path[4].style.display = 'none';
    });
    
    this.player.onpause = () => {
      this.style.display = 'block';
    }

    this.player.addEventListener('ended', function(){
      storage.remove();
      this.style.display = 'none';
    })

    this.restartBtn.addEventListener("click", () =>{
      this.player.currentTime = 0;
      this.style.display = 'none';
      this.player.play();
    })
  }

}

customElements.define("media-resume-button",  MediaResumeButton)
