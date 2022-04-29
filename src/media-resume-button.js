import { storage } from "./localstorage.js";

const template = document.createElement("template");

template.innerHTML = `
<style>
:host {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 300px;
}

button {
  font-family: monospace;
  padding: 0.5rem;
  cursor: pointer;
}

#restart-resume {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

<div id="restart-resume">
  <div style="position: relative;top: 40%;">
    <button type="button" id="restart">< Restart</button>
    <button type="button" id="resume">Resume ></button>
  </div>
</div>
`;

class MediaResumeButton extends window.HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.trackServerSideTimeInterval = 6000;

    window.mainPlayer = document.getElementById(this.getAttribute("player"));
    window.mediaResumeButton = this;
    this.player = window.mainPlayer;
    storage.playbackid = this.getAttribute("playbackid");

    this.setPlayhead = (storage.get() > 0) ? storage.get() : 0;

    this.resumeBtn = this.shadowRoot.querySelector("#resume");
    this.restartBtn = this.shadowRoot.querySelector("#restart");
  }

  connectedCallback() {
    this.player.currentTime = this.setPlayhead;

    if (this.setPlayhead == 0) {
      this.style.display = 'none';
    }

    this.player.addEventListener('timeupdate', function (e) {
      const controller = e.path[0];
      storage.set({
        playhead: controller.currentTime,
      });
    });

    this.player.addEventListener('ended', function () {
      storage.remove();
      this.style.display = 'none';
    })

    this.player.addEventListener('seeking', function (e) {
      window.mediaResumeButton.style.display = 'none';
      console.log("seeeking....")
    })

    this.player.onpause = function (e) {
      window.mediaResumeButton.style.display = 'block';
      console.log(e);
    }

    this.resumeBtn.addEventListener('click', function (e) {
      const player = e.path[4].player;
      player.currentTime = storage.get();
      player.play();
      e.path[4].style.display = 'none';
    });

    this.restartBtn.addEventListener("click", function () {
      window.mainPlayer.currentTime = 0;
      window.mediaResumeButton.style.display = 'none';
      window.mainPlayer.play();
    })
  }
}

customElements.define("media-resume-button", MediaResumeButton);
