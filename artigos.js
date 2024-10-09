// Verifica se o navegador suporta a Web Speech API
const voiceSearchButton = document.getElementById("voice-search-button");
const searchInput = document.getElementById("search-input");

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "pt-BR"; // Define o idioma como português do Brasil

  // Quando a fala é reconhecida
  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript;
    searchInput.value = speechResult; // Insere o resultado no campo de texto
    console.log("Você disse: ", speechResult); // Exibe o resultado no console
  };

  // Ação ao clicar no botão de voz
  voiceSearchButton.onclick = function () {
    recognition.start(); // Inicia o reconhecimento de voz
  };

  recognition.onend = function () {
    recognition.stop(); // Para o reconhecimento de voz ao final
  };
} else {
  console.log("O reconhecimento de voz não é suportado neste navegador.");
}
