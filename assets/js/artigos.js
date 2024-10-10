// Seleciona a barra de pesquisa
const searchInput = document.getElementById("search-input");

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
