const express = require("express");
const app = express();
const port = 3000;

// Middleware para permitir o recebimento de dados JSON
app.use(express.json());

// Rota de exemplo
app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

// Rota para pesquisar livros
app.post("/pesquisar", (req, res) => {
  const pesquisa = req.body.query; // Captura o que foi escrito na pesquisa
  res.send(`Você pesquisou por: ${pesquisa}`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
