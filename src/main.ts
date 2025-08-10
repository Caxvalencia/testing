const btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance('Hola, ¿en qué puedo ayudarte?');
  utterance.lang = 'es-ES';
  utterance.onstart = () => btn.classList.add('speaking');
  utterance.onend = () => btn.classList.remove('speaking');
  speechSynthesis.speak(utterance);
});
