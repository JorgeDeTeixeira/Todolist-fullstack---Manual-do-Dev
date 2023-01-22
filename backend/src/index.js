const express = require("express");

const app = express();
const PORT = 3333;

app.get("/", (req, res) => {
    res.status(200).send("Olá mundo!");
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}...`));
