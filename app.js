const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Configura o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

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
