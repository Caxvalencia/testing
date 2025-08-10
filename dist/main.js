"use strict";
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const synth = window.speechSynthesis;
    if (synth.speaking)
        return;
    const utterance = new SpeechSynthesisUtterance('Hola, ¿en qué puedo ayudarte?');
    utterance.lang = 'es-ES';
    utterance.onstart = () => btn.classList.add('speaking');
    utterance.onend = () => btn.classList.remove('speaking');
    utterance.onerror = () => btn.classList.remove('speaking');
    synth.speak(utterance);
});
