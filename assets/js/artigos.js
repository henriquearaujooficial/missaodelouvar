// Seleciona a barra de pesquisa
const searchInput = document.getElementById("search-input");

// Seleciona o botão do microfone (certifique-se de que o botão de microfone tenha o id 'mic-button' no HTML)
const micButton = document.getElementById("mic-button");

// Seleciona todos os cards de artigo
const artigos = document.querySelectorAll(".artigo-card");

// Adiciona um evento de escuta para a barra de pesquisa
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase(); // Converte para minúsculas para facilitar a busca

  // Percorre cada card de artigo
  artigos.forEach((artigo) => {
    const title = artigo.querySelector("h2").textContent.toLowerCase(); // Obtém o título do artigo

    // Verifica se o título contém o termo de pesquisa
    if (title.includes(searchTerm)) {
      artigo.style.display = "block"; // Mostra o artigo se corresponder
    } else {
      artigo.style.display = "none"; // Oculta o artigo se não corresponder
    }
  });
});

// Verifica se o navegador suporta a API de reconhecimento de voz
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = "pt-BR"; // Define o idioma da fala

  // Inicia o reconhecimento de voz quando o botão do microfone é clicado
  micButton.addEventListener("click", function () {
    recognition.start(); // Inicia o reconhecimento de voz
  });

  // Quando o reconhecimento de voz retorna resultados
  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript; // Obtém o texto reconhecido
    searchInput.value = transcript; // Preenche o campo de pesquisa com o texto reconhecido
    searchInput.dispatchEvent(new Event("input")); // Dispara o evento de entrada para realizar a busca
  };

  // Captura possíveis erros no reconhecimento de voz
  recognition.onerror = function (event) {
    console.error("Erro no reconhecimento de voz:", event.error);
  };
} else {
  console.error("API de reconhecimento de voz não suportada no seu navegador.");
}

// Adiciona um evento de escuta para a barra de pesquisa escrita (isso já foi adicionado anteriormente, então pode ser removido se for duplicado)
