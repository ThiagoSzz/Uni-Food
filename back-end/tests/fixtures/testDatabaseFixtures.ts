const mockedReviews = [
  {
    sigla_restaurante: "RU03",
    sigla_universidade: "UFSC      ",
    nota_dada: "4",
    comentario:
      "O Restaurante Universitário é simplesmente incrível! A comida estava fresquinha e saborosa, com opções para todos os gostos. O atendimento foi simpático e prestativo, e o ambiente era acolhedor e bem organizado.",
    tags: "Boa temperatura dos pratos, Leguminosa saborosa, Com opção de sobremesa",
    periodo_nota: "Jantar         ",
  },
  {
    sigla_restaurante: "RU02",
    sigla_universidade: "UFG       ",
    nota_dada: "5",
    comentario:
      "O Restaurante Universitário superou todas as minhas expectativas! A comida era saborosa e saudável, com opções para todos os gostos. O atendimento foi amigável e eficiente, e o ambiente era acolhedor.",
    tags: "Ambiente harmonioso, Comida saborosa, Com opção de sobremesa, Variedade de saladas, Bom cozimento dos alimentos",
    periodo_nota: "Jantar         ",
  },
  {
    sigla_restaurante: "RU01",
    sigla_universidade: "UFRGS     ",
    nota_dada: "5",
    comentario:
      "A localização conveniente do restaurante, bem no campus, torna-o uma escolha prática para saciar a fome entre as aulas.",
    tags: "Boa temperatura dos pratos, Ambiente harmonioso, Comida saborosa, Leguminosa saborosa",
    periodo_nota: "Almoço         ",
  },
];

export const getMockedReviews = () => {
  return mockedReviews;
};
