// Captura o campo de pesquisa e o botão de pesquisa
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results");

// Função para consultar os livros
async function searchBooks() {
  const query = searchInput.value.trim(); // Obtém o valor digitado e remove espaços em branco
  if (query) {
    try {
      // Chamada para a API para buscar livros
      const response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}`);
      
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();

      // Exibir os resultados
      displayResults(data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      resultsContainer.innerHTML = `<p>Erro ao buscar livros: ${error.message}</p>`; // Mensagem de erro
    }
  }
}

// Função para exibir resultados na página
function displayResults(books) {
  resultsContainer.innerHTML = ""; // Limpa resultados anteriores
  if (books.length > 0) {
    books.forEach(book => {
      const bookElement = document.createElement("div");
      bookElement.textContent = `${book.title} - ${book.author}`;
      resultsContainer.appendChild(bookElement);
    });
  } else {
    resultsContainer.innerHTML = "<p>Nenhum livro encontrado.</p>";
  }
}

// Dispara a pesquisa ao pressionar "Enter" no campo de texto
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchBooks();
  }
});

// Dispara a pesquisa ao clicar no ícone de microfone ou botão
const micButton = document.getElementById("mic-button");
micButton.addEventListener("click", searchBooks);
