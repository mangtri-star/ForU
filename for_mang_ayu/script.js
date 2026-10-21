const openLetterButton = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

openLetterButton.addEventListener("click", () => {
  const isHidden = letterContent.hidden;
  letterContent.hidden = !isHidden;
  openLetterButton.setAttribute("aria-expanded", String(isHidden));
  openLetterButton.textContent = isHidden ? "Tutup surat ♡" : "Buka suratnya ♡";
  if (isHidden) {
    letterContent.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");
const musicDisc = document.getElementById("musicDisc");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "❚❚ Jeda musik";
      musicStatus.textContent = "Sedang diputar ♫";
      musicDisc.classList.add("playing");
    } catch (error) {
      musicStatus.textContent = "Tambahkan file musik/lagu.mp3 dulu ya.";
      musicButton.textContent = "▶ Coba putar lagi";
    }
  } else {
    music.pause();
    musicButton.textContent = "▶ Putar musik";
    musicStatus.textContent = "Musik dijeda";
    musicDisc.classList.remove("playing");
  }
});

music.addEventListener("ended", () => {
  musicButton.textContent = "▶ Putar musik";
  musicStatus.textContent = "Selesai diputar";
  musicDisc.classList.remove("playing");
});
