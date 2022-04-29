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
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
</style>

<div id="restart-resume">
  <button type="button" id="restart">< Restart</button>
  <button type="button" id="resume">Resume ></button>
</div>
`;

class MediaResumeButton extends window.HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.trackServerSideTimeInterval = 6000;

    this.player = document.getElementById("video-player");
    storage.playbackid = this.getAttribute("playbackid");

    this.setPlayhead = (storage.get() > 0) ? storage.get() : 0;

    this.resumeBtn = this.shadowRoot.querySelector("#resume");
    this.restartBtn = this.shadowRoot.querySelector("#restart");
  }

  connectedCallback() {
    const player = this.player;
    player.currentTime = this.setPlayhead;

    if (this.setPlayhead == 0) {
      this.style.display = 'none';
    }

    player.addEventListener('timeupdate', (e) => {
      storage.set({
        playhead: e.target.currentTime,
      });
    });

    player.addEventListener('ended', () => {
      storage.remove();
      this.style.display = 'none';
    });

    player.addEventListener('pause', () => {
      this.style.display = 'block';
    });

    this.resumeBtn.addEventListener('click', () => {
      this.style.display = 'none';
      player.currentTime = storage.get();
      player.play();
    });

    this.restartBtn.addEventListener("click", () => {
      this.style.display = 'none';
      player.currentTime = 0;
      player.play();
    })
  }
}

customElements.define("media-resume-button", MediaResumeButton);
