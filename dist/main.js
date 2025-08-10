"use strict";
const assistant = document.getElementById('assistant');
const btn = document.getElementById('talk');
btn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance('Hola, ¿en qué puedo ayudarte?');
    utterance.lang = 'es-ES';
    utterance.onstart = () => assistant.classList.add('speaking');
    utterance.onend = () => assistant.classList.remove('speaking');
    speechSynthesis.speak(utterance);
});
