const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

//Lista de Paletas

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao: 'Paleta sabor açaí com recheio de leite condensado',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta sabor banana com recheio de nutella',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Paleta sabor chocolate belga',
    foto: 'assets/images/chocolate-belga.pngF',
    preco: 7.0,
  },
];

//Rotas

//Get All
app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

//Get by ID
app.get('/paletas/paleta/:id', (req, res) => {
  const parametro_id = Number(req.params.id);
  const escolhaPaleta = paletas.find((paleta) => paleta.id === parametro_id);
  res.send(escolhaPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
