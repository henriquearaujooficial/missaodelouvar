const express = require("express");
const router = express.Router();

// Simulação de um banco de dados de artigos
const articles = [
  {
    title: "10 pontos relevantes sobre composição",
    date: "31 de outubro de 2023"
  },
  { title: "Adoração como sentido de vida", date: "26 de janeiro de 2023" },
  { title: "3 dicas para a noite de Natal", date: "20 de dezembro de 2022" }
];

// Rota de busca
router.get("/search", (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = articles.filter((article) =>
    article.title.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
