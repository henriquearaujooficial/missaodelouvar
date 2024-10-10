// Captura o campo de pesquisa e o botão de pesquisa
const searchInput = document.getElementById("search-input");

// Função para consultar os livros
async function searchBooks() {
  const query = searchInput.value; // Obtém o valor digitado
  if (query) {
    try {
      // Chamada para a API para buscar livros
      const response = await fetch(
        `https://sua-api-url.com/search?query=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      // Aqui você pode processar os dados recebidos e exibi-los na página
      console.log(data); // Para depuração, você pode remover depois
      // Exibir os resultados (essa parte você deve implementar)
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
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
const express = require("express");
const app = express();
const PORT = 3000;

// Simulação de um banco de dados de livros
const books = [
  { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry" }
  // Adicione mais livros conforme necessário
];

// Rota de pesquisa
app.get("/search", (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );
  res.json(results);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
