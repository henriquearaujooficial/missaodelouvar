const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Configura o Express para servir os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "../public")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// Rotas da API (caso você precise usar no futuro)
app.use("/api", require("./routes/api"));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
