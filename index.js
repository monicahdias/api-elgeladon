const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

//Lista de Paletas

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao: 'Paleta sabor açaí com recheio de leite condensado',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta sabor banana com recheio de nutella',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Paleta feita com o melhor chocolate belga',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Chocolate Belga com Brigadeiro',
    descricao: 'Paleta sabor chocolate belga com recheio de brigadeiro',
    foto: './assets/images/chocolate-belga-com-brigadeiro.png',
    preco: 10.0,
  },
  {
    id: 5,
    sabor: 'Chocolate Branco',
    descricao: 'Paleta feita com o melhor chocolate branco',
    foto: './assets/images/chocolate-branco.png',
    preco: 7.0,
  },
  {
    id: 6,
    sabor: 'Coco',
    descricao: 'Paleta sabor coco feita com a própria fruta',
    foto: './assets/images/coco.png',
    preco: 7.0,
  },
  {
    id: 7,
    sabor: 'Coco com Doce de Leite',
    descricao: 'Paleta sabor coco com recheio de doce de leite',
    foto: './assets/images/coco-com-doce-de-leite.png',
    preco: 10.0,
  },
  {
    id: 8,
    sabor: 'Cookies',
    descricao: 'Paleta feita com cookies, dando um toque crocante',
    foto: './assets/images/cookies.png',
    preco: 7.0,
  },
  {
    id: 9,
    sabor: 'Doce de Leite com Doce de Leite',
    descricao: 'Paleta sabor doce de leite com recheio de doce de leite',
    foto: './assets/images/doce-de-leite-com-doce-de-leite.png',
    preco: 10.0,
  },
  {
    id: 10,
    sabor: 'Limão',
    descricao: 'Paleta sabor limão feita com a própria fruta',
    foto: './assets/images/limao.png',
    preco: 7.0,
  },
  {
    id: 11,
    sabor: 'Maracujá',
    descricao: 'Paleta sabor maracujá feita com a própria fruta',
    foto: './assets/images/maracuja.png',
    preco: 7.0,
  },
  {
    id: 12,
    sabor: 'Maracujá com Leite Condensado',
    descricao: 'Paleta sabor maracujá com recheio de leite condensado',
    foto: './assets/images/maracuja-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 13,
    sabor: 'Milho Verde',
    descricao: 'Paleta sabor milho verde com o verdadeiro sabor do fruto',
    foto: './assets/images/milho-verde.png',
    preco: 7.0,
  },
  {
    id: 14,
    sabor: 'Morango',
    descricao: 'Paleta sabor morango feita com a própria fruta',
    foto: './assets/images/morango.png',
    preco: 7.0,
  },
  {
    id: 15,
    sabor: 'Morango com Leite Condensado',
    descricao: 'Paleta sabor morango com recheio de leite condensado',
    foto: './assets/images/morango-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 16,
    sabor: 'Morango com Nutella',
    descricao: 'Paleta sabor morango com recheio de nutella',
    foto: './assets/images/morango-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 17,
    sabor: 'Ninho com Nutella',
    descricao: 'Paleta sabor ninho com recheio de nutella',
    foto: './assets/images/ninho-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 17,
    sabor: 'Ninho com Ovomaltine',
    descricao: 'Paleta sabor ninho com recheio de ovomaltine',
    foto: './assets/images/ninho-com-ovomaltine.png',
    preco: 10.0,
  },
  {
    id: 18,
    sabor: 'Uva',
    descricao: 'Paleta sabor uva feita com a própria fruta',
    foto: './assets/images/uva.png',
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
