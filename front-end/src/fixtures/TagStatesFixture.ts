const positiveTags = [
  'Proteína macia',
  'Carboidrato de qualidade',
  'Leguminosa saborosa',
  'Variedade de saladas',
  'Com opção de sobremesa',
  'Bom cozimento dos alimentos',
  'Comida saborosa',
  'Boa temperatura dos alimentos',
  'Bom atendimento',
  'Fila curta'
];

const negativeTags = [
  'Proteína dura',
  'Carboidrato de baixa qualidade',
  'Leguminosa sem sabor',
  'Poucas opções de saladas',
  'Sem sobremesa',
  'Mau cozimento dos alimentos',
  'Comida de baixa qualidade',
  'Temperatura inadequada dos alimentos',
  'Mau atendimento',
  'Fila grande'
];

const neutralTags = [
  'Sem guardanapos',
  'Sem palitos de dente',
  'Cadeiras pequenas',
  'Talheres antigas',
  'Poucos funcionários',
  'Poucos métodos de pagamento',
  'Localização conveniente',
  'Cardápio atualizado',
  'Sinal de Wi-Fi ruim',
  'Água gratuita'
];

export const getPositiveTags = () => {
  return positiveTags;
};

export const getNegativeTags = () => {
  return negativeTags;
};

export const getNeutralTags = () => {
  return neutralTags;
};
