let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");
let textarea = document.querySelector("textarea");

function updateVoices() {
    let voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices.map((voice, i) => `<option value="${i}">${voice.name}</option>`).join('');
}

function speakText() {
    speech.text = textarea.value;
    speech.voice = window.speechSynthesis.getVoices()[voiceSelect.value];
    window.speechSynthesis.speak(speech);
}

window.speechSynthesis.onvoiceschanged = updateVoices;
voiceSelect.addEventListener("change", speakText);
document.querySelector("button").addEventListener("click", speakText);

