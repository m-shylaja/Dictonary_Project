const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const wordSpan = document.getElementById("word");
const phoneticSpan = document.getElementById("phonetic");
const partOfSpeechSpan = document.getElementById("partOfSpeech");
const definitionSpan = document.getElementById("definition");
const exampleSpan = document.getElementById("example");
const audio = document.getElementById("audio");
const playAudioBtn = document.getElementById("playAudioBtn");
const errorMessage = document.getElementById("errorMessage");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

async function fetchWordData(word) {
  errorMessage.textContent = "";
  result.classList.add("hidden");
  loader.classList.remove("hidden");

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!response.ok) {
      throw new Error("Word not found.");
    }

    const data = await response.json();
    const entry = data[0];

    wordSpan.textContent = entry.word || "-";
    phoneticSpan.textContent = entry.phonetic || (entry.phonetics[0]?.text || "-");
    partOfSpeechSpan.textContent = entry.meanings[0]?.partOfSpeech || "-";
    definitionSpan.textContent = entry.meanings[0]?.definitions[0]?.definition || "-";
    exampleSpan.textContent = entry.meanings[0]?.definitions[0]?.example || "-";

    const audioURL = entry.phonetics.find(p => p.audio)?.audio;
    if (audioURL) {
      audio.src = audioURL;
      audio.classList.remove("hidden");
      playAudioBtn.classList.remove("hidden");
    } else {
      audio.classList.add("hidden");
      playAudioBtn.classList.add("hidden");
    }

    result.classList.remove("hidden");
  } catch (err) {
    if (err.message.includes("Failed to fetch")) {
      errorMessage.textContent = "No internet connection.";
    } else {
      errorMessage.textContent = err.message;
    }
  } finally {
    loader.classList.add("hidden");
  }
}

searchBtn.addEventListener("click", () => {
  const word = searchInput.value.trim();
  if (word) fetchWordData(word);
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const word = searchInput.value.trim();
    if (word) fetchWordData(word);
  }
});

playAudioBtn.addEventListener("click", () => {
  audio.play();
});

window.addEventListener("load", () => {
  searchInput.focus();
});
