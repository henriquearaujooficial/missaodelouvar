// Captura o campo de pesquisa e o container de resultados
const searchInput = document.getElementById("search-input");
const articlesContainer = document.querySelector(".artigos-container");

// Função para buscar artigos
async function searchArticles() {
  const query = searchInput.value.trim(); // Remove espaços extras
  if (query) {
    try {
      // Chama a API para buscar artigos
      const response = await fetch(
        `http://localhost:3000/searchArticles?query=${encodeURIComponent(
          query
        )}`
      );

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();

      // Exibir os resultados
      displayResults(data);
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      articlesContainer.innerHTML = `<p>Erro ao buscar artigos: ${error.message}</p>`; // Exibe a mensagem de erro na página
    }
  }
}

// Função para exibir os resultados dos artigos
function displayResults(articles) {
  articlesContainer.innerHTML = ""; // Limpa os resultados anteriores
  if (articles.length > 0) {
    articles.forEach((article) => {
      const articleCard = document.createElement("a");
      articleCard.href = article.link; // Supondo que a API retorne um link para o artigo
      articleCard.classList.add("artigo-card");

      articleCard.innerHTML = `
        <div>
          <img src="${article.image}" alt="Imagem do artigo" />
          <p class="data">${article.date}</p>
          <h2>${article.title}</h2>
        </div>
      `;

      articlesContainer.appendChild(articleCard);
    });
  } else {
    articlesContainer.innerHTML = "<p>Nenhum artigo encontrado.</p>";
  }
}

// Evento para buscar artigos ao pressionar "Enter"
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchArticles();
  }
});

// Evento para buscar artigos ao clicar no ícone de microfone (você pode substituir isso por reconhecimento de voz)
const voiceSearchButton = document.getElementById("voice-search-button");
voiceSearchButton.addEventListener("click", searchArticles);
