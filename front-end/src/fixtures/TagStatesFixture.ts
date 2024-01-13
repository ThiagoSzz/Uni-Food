const positiveTags = [
  'Proteína macia',
  'Carboidrato de qualidade',
  'Leguminosa saborosa',
  'Variedade de saladas',
  'Com opção de sobremesa',
  'Ambiente harmonioso',
  'Bom cozimento dos alimentos',
  'Comida saborosa',
  'Boa temperatura dos pratos',
  'Bom atendimento',
  'Fila curta'
];

const negativeTags = [
  'Proteína dura',
  'Carboidrato de baixa qualidade',
  'Leguminosa sem sabor',
  'Poucas opções de saladas',
  'Sem opção de sobremesa',
  'Ambiente barulhento',
  'Mau cozimento dos alimentos',
  'Comida de baixa qualidade',
  'Temperatura inadequada dos pratos',
  'Mau atendimento',
  'Fila grande'
];

const neutralTags = [
  'Sem guardanapos',
  'Sem palitos de dente',
  'Cadeiras pequenas',
  'Talheres antigas',
  'Poucos funcionários',
  'Não aceita cartão',
  'Não aceita PIX',
  'Localização conveniente',
  'Cardápio atualizado',
  'Sinal de Wi-Fi ruim',
  'Água gratuita'
];

export const getPositiveTags = () => {
  return positiveTags;
}

export const getNegativeTags = () => {
  return negativeTags;
};

export const getNeutralTags = () => {
  return neutralTags;
};