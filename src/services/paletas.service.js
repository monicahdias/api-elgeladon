const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao: 'Paleta sabor açaí com recheio de leite condensado',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 14.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta sabor banana com recheio de nutella',
    foto: './assets/images/banana-com-nutella.png',
    preco: 14.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Paleta feita com o melhor chocolate belga',
    foto: './assets/images/chocolate-belga.png',
    preco: 10.0,
  },
  {
    id: 4,
    sabor: 'Chocolate Belga com Brigadeiro',
    descricao: 'Paleta sabor chocolate belga com recheio de brigadeiro',
    foto: './assets/images/chocolate-belga-com-brigadeiro.png',
    preco: 14.0,
  },
  {
    id: 5,
    sabor: 'Chocolate Branco',
    descricao: 'Paleta feita com o melhor chocolate branco',
    foto: './assets/images/chocolate-branco.png',
    preco: 10.0,
  },
  // {
  //   id: 6,
  //   sabor: 'Coco',
  //   descricao: 'Paleta sabor coco feita com a própria fruta',
  //   foto: './assets/images/coco.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 7,
  //   sabor: 'Coco com Doce de Leite',
  //   descricao: 'Paleta sabor coco com recheio de doce de leite',
  //   foto: './assets/images/coco-com-doce-de-leite.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 8,
  //   sabor: 'Cookies',
  //   descricao: 'Paleta feita com cookies, dando um toque crocante',
  //   foto: './assets/images/cookies.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 9,
  //   sabor: 'Doce de Leite com Doce de Leite',
  //   descricao: 'Paleta sabor doce de leite com recheio de doce de leite',
  //   foto: './assets/images/doce-de-leite-com-doce-de-leite.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 10,
  //   sabor: 'Limão',
  //   descricao: 'Paleta sabor limão feita com a própria fruta',
  //   foto: './assets/images/limao.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 11,
  //   sabor: 'Maracujá',
  //   descricao: 'Paleta sabor maracujá feita com a própria fruta',
  //   foto: './assets/images/maracuja.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 12,
  //   sabor: 'Maracujá com Leite Condensado',
  //   descricao: 'Paleta sabor maracujá com recheio de leite condensado',
  //   foto: './assets/images/maracuja-com-leite-condensado.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 13,
  //   sabor: 'Milho Verde',
  //   descricao: 'Paleta sabor milho verde com o verdadeiro sabor do fruto',
  //   foto: './assets/images/milho-verde.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 14,
  //   sabor: 'Morango',
  //   descricao: 'Paleta sabor morango feita com a própria fruta',
  //   foto: './assets/images/morango.png',
  //   preco: 10.0,
  // },
  // {
  //   id: 15,
  //   sabor: 'Morango com Leite Condensado',
  //   descricao: 'Paleta sabor morango com recheio de leite condensado',
  //   foto: './assets/images/morango-com-leite-condensado.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 16,
  //   sabor: 'Morango com Nutella',
  //   descricao: 'Paleta sabor morango com recheio de nutella',
  //   foto: './assets/images/morango-com-nutella.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 17,
  //   sabor: 'Ninho com Nutella',
  //   descricao: 'Paleta sabor ninho com recheio de nutella',
  //   foto: './assets/images/ninho-com-nutella.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 17,
  //   sabor: 'Ninho com Ovomaltine',
  //   descricao: 'Paleta sabor ninho com recheio de ovomaltine',
  //   foto: './assets/images/ninho-com-ovomaltine.png',
  //   preco: 14.0,
  // },
  // {
  //   id: 18,
  //   sabor: 'Uva',
  //   descricao: 'Paleta sabor uva feita com a própria fruta',
  //   foto: './assets/images/uva.png',
  //   preco: 10.0,
  // },
];

const findAllPaletasService = () => {
  return paletas;
};

const findByIdPaletaService = (parametroId) => {
  return paletas.find((paleta) => paleta.id === parametroId);
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
