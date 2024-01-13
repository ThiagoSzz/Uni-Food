const averageReviews = [
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    universityLocation: 'Porto Alegre',
    averageRating: 4.2,
    reviewsAmount: 3032,
    isRising: true,
    isDescending: false,
    isBestReviewed: false,
    isWorstReviewed: false
  },
  {
    ruCode: 'RU02',
    universityName: 'USP',
    universityLocation: 'São Paulo',
    averageRating: 3.8,
    reviewsAmount: 2511,
    isRising: false,
    isDescending: true,
    isBestReviewed: false,
    isWorstReviewed: false
  },
  {
    ruCode: 'RU03',
    universityName: 'PUCRS',
    universityLocation: 'Porto Alegre',
    averageRating: 4.5,
    reviewsAmount: 400,
    isRising: true,
    isDescending: false,
    isBestReviewed: true,
    isWorstReviewed: false
  },
  {
    ruCode: 'RU04',
    universityName: 'UFMG',
    universityLocation: 'Belo Horizonte',
    averageRating: 1.6,
    reviewsAmount: 2023,
    isRising: false,
    isDescending: true,
    isBestReviewed: false,
    isWorstReviewed: true
  },
  {
    ruCode: 'RU05',
    universityName: 'UNESP',
    universityLocation: 'São Paulo',
    averageRating: 4.0,
    reviewsAmount: 3125,
    isRising: true,
    isDescending: false,
    isBestReviewed: false,
    isWorstReviewed: false
  },
  {
    ruCode: 'RU06',
    universityName: 'UFSC',
    universityLocation: 'Florianópolis',
    averageRating: 3.9,
    reviewsAmount: 2809,
    isRising: false,
    isDescending: true,
    isBestReviewed: false,
    isWorstReviewed: false
  }
];

const reviews = [
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    universityLocation: 'Porto Alegre',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      'Comida saborosa',
      'Proteína dura',
      'Não aceita cartão',
      'Bom atendimento',
      'Ambiente harmonioso'
    ]
  },
  {
    ruCode: 'RU04',
    universityName: 'USP',
    universityLocation: 'São Paulo',
    rating: 3,
    comment:
      'A comida era boa, mas o local estava um pouco barulhento. No entanto, a fila estava curta, o que facilitou.',
    tags: [
      'Carboidrato de qualidade',
      'Leguminosa sem sabor',
      'Poucas opções de saladas',
      'Comida saborosa',
      'Fila curta'
    ]
  },
  {
    ruCode: 'RU03',
    universityName: 'PUCRS',
    universityLocation: 'Porto Alegre',
    rating: 5,
    comment:
      'Experiência maravilhosa! Muita variedade de saladas, e o ambiente é agradável. Atendimento excelente.',
    tags: ['Variedade de saladas', 'Água gratuita', 'Ambiente harmonioso', 'Bom atendimento']
  },
  {
    ruCode: 'RU01',
    universityName: 'UFMG',
    universityLocation: 'Belo Horizonte',
    rating: 2,
    comment:
      'Decepcionante. Comida de baixa qualidade, barulho excessivo e poucas opções de saladas.',
    tags: [
      'Comida de baixa qualidade',
      'Não aceita cartão',
      'Ambiente barulhento',
      'Poucas opções de saladas'
    ]
  },
  {
    ruCode: 'RU02',
    universityName: 'UNESP',
    universityLocation: 'São Paulo',
    rating: 4,
    comment:
      'Ótima temperatura dos pratos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: ['Boa temperatura dos pratos', 'Água gratuita', 'Variedade de saladas', 'Fila curta']
  },
  {
    ruCode: 'RU03',
    universityName: 'UnB',
    universityLocation: 'Brasília',
    rating: 3,
    comment:
      'Almoço razoável, mas o ambiente estava um pouco sujo. Fila no horário do almoço estava aceitável.',
    tags: ['Proteína dura', 'Fila curta', 'Com opção de sobremesa', 'Carboidrato de qualidade']
  },
  {
    ruCode: 'RU05',
    universityName: 'UFC',
    universityLocation: 'Fortaleza',
    rating: 4,
    comment:
      'Excelente experiência! Boa variedade de pratos, ambiente aconchegante e ótimo atendimento.',
    tags: ['Proteína macia', 'Com opção de sobremesa', 'Fila grande', 'Comida saborosa']
  },
  {
    ruCode: 'RU06',
    universityName: 'UEM',
    universityLocation: 'Maringá',
    rating: 2,
    comment:
      'Comida fria e sem sabor. O atendimento deixou a desejar, e a fila estava grande demais.',
    tags: ['Ambiente barulhento', 'Sem palitos de dente', 'Leguminosa sem sabor', 'Mau atendimento']
  },
  {
    ruCode: 'RU02',
    universityName: 'UFSC',
    universityLocation: 'Florianópolis',
    rating: 5,
    comment: 'Top demais! Comida deliciosa, ambiente limpo e organizado, e atendimento nota 10!',
    tags: [
      'Comida saborosa',
      'Bom atendimento',
      'Bom cozimento dos alimentos',
      'Variedade de saladas'
    ]
  },
  {
    ruCode: 'RU01',
    universityName: 'UFSM',
    universityLocation: 'Santa Maria',
    rating: 3,
    comment:
      'Bom almoço, mas a fila estava um pouco longa. Precisam melhorar a variedade de saladas.',
    tags: [
      'Fila grande',
      'Carboidrato de qualidade',
      'Bom atendimento',
      'Poucas opções de saladas',
      'Não aceita cartão'
    ]
  },
  {
    ruCode: 'RU03',
    universityName: 'USP',
    universityLocation: 'São Paulo',
    rating: 4,
    comment: 'Almoço muito bom! Comida saborosa e variada, além de um ambiente agradável.',
    tags: ['Proteína macia', 'Ambiente harmonioso']
  },
  {
    ruCode: 'RU02',
    universityName: 'UFMG',
    universityLocation: 'Belo Horizonte',
    rating: 3,
    comment:
      'Almoço regular, faltou opção de sobremesa. O ambiente estava tranquilo e o atendimento foi bom.',
    tags: ['Carboidrato de qualidade', 'Sinal de Wi-Fi ruim', 'Sem opção de sobremesa']
  },
  {
    ruCode: 'RU03',
    universityName: 'UFPE',
    universityLocation: 'Recife',
    rating: 2,
    comment: 'Experiência ruim. Comida de baixa qualidade, ambiente sujo e atendimento péssimo.',
    tags: ['Fila grande', 'Sem palitos de dente', 'Ambiente barulhento', 'Não aceita cartão']
  },
  {
    ruCode: 'RU04',
    universityName: 'UFRJ',
    universityLocation: 'Rio de Janeiro',
    rating: 5,
    comment: 'O melhor RU que já visitei! Comida incrível, ambiente limpo e atendimento impecável.',
    tags: ['Comida saborosa', 'Boa temperatura dos pratos', 'Bom atendimento', 'Fila grande']
  },
  {
    ruCode: 'RU03',
    universityName: 'UFPR',
    universityLocation: 'Curitiba',
    rating: 4,
    comment:
      'Almoço satisfatório. Comida boa, ambiente agradável, mas a fila estava um pouco longa.',
    tags: [
      'Proteína macia',
      'Carboidrato de qualidade',
      'Sinal de Wi-Fi ruim',
      'Leguminosa saborosa'
    ]
  }
];

export const getAverageReviewsList = () => {
  return averageReviews;
};

export const getReviewsList = () => {
  return reviews;
};
