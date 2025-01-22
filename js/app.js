const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const backwardBtn = document.getElementById("backward");
const forwardBtn = document.getElementById("forward");
const voiceBtn = document.getElementById("voice");
const audioVolume = document.getElementById("audio-valume");
const cover = document.getElementById("cover");
const title = document.getElementById("title");

let indexContent = 0;

const content = [
  "Alvarez_Remix",
  "Boshqacha-edi",
  "На_грани",
  "Kuylar_yozdim",
  "Буйно голова",
  "Takrorlayman isming",
];

function changeMusic(index) {
  cover.src = `./imgs/${content[index]}.jpg`;
  audio.src = `./audios/${content[index]}.mp3`;
  title.textContent = content[index];
}

changeMusic(indexContent);

function nextMusic() {
  if (content.length - 1 <= indexContent) {
    indexContent = 0;
  } else {
    indexContent++;
  }

  changeMusic(indexContent);
  play();
}

function prevMusic() {
  if (indexContent === 0) {
    indexContent = content.length - 1;
  } else {
    indexContent--;
  }

  changeMusic(indexContent);
  play();
}

function play() {
  audio.play();
}

audio.volume = voiceBtn.value / 100;

voiceBtn.addEventListener("input", () => {
  audio.volume = voiceBtn.value / 100;
  audioVolume.textContent = voiceBtn.value;
});

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

playBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
});

pauseBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});

forwardBtn.addEventListener("click", nextMusic);
backwardBtn.addEventListener("click", prevMusic);
audio.addEventListener("ended", nextMusic);
