import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';
import { Review } from '../interfaces/Review';

const reviews: Review[] = [
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Proteína dura', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Ambiente harmonioso', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 2,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Proteína dura', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' },
      { name: 'Ambiente harmonioso', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 1,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Proteína dura', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Ambiente harmonioso', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU04',
    universityName: 'USP',
    rating: 3,
    comment:
      'A comida era boa, mas o local estava um pouco barulhento. No entanto, a fila estava curta, o que facilitou.',
    tags: [
      { name: 'Carboidrato de qualidade', type: 'positive' },
      { name: 'Leguminosa sem sabor', type: 'negative' },
      { name: 'Poucas opções de saladas', type: 'negative' },
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Física',
    coursePeriod: '2',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'São Paulo'
  },
  {
    ruCode: 'RU02',
    universityName: 'UNESP',
    rating: 4,
    comment:
      'Ótima temperatura dos pratos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: [
      { name: 'Boa temperatura dos pratos', type: 'positive' },
      { name: 'Água gratuita', type: 'neutral' },
      { name: 'Variedade de saladas', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Química',
    coursePeriod: '3',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'São Paulo'
  },
  {
    ruCode: 'RU03',
    universityName: 'UnB',
    rating: 3,
    comment:
      'Almoço razoável, mas o ambiente estava um pouco sujo. Fila no horário do almoço estava aceitável.',
    tags: [
      { name: 'Proteína dura', type: 'negative' },
      { name: 'Fila curta', type: 'positive' },
      { name: 'Com opção de sobremesa', type: 'positive' },
      { name: 'Carboidrato de qualidade', type: 'positive' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Engenharia Civil',
    coursePeriod: '4',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Brasília'
  },
  {
    ruCode: 'RU05',
    universityName: 'UFC',
    rating: 4,
    comment:
      'Excelente experiência! Boa variedade de pratos, ambiente aconchegante e ótimo atendimento.',
    tags: [
      { name: 'Proteína macia', type: 'positive' },
      { name: 'Com opção de sobremesa', type: 'positive' },
      { name: 'Fila grande', type: 'negative' },
      { name: 'Comida saborosa', type: 'positive' }
    ],
    mealPeriod: MealPeriod.BREAKFAST,
    courseName: 'Matemática',
    coursePeriod: '5',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Fortaleza'
  },
  {
    ruCode: 'RU06',
    universityName: 'UEM',
    rating: 2,
    comment:
      'Comida fria e sem sabor. O atendimento deixou a desejar, e a fila estava grande demais.',
    tags: [
      { name: 'Ambiente barulhento', type: 'negative' },
      { name: 'Sem palitos de dente', type: 'neutral' },
      { name: 'Leguminosa sem sabor', type: 'negative' },
      { name: 'Mau atendimento', type: 'negative' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Física',
    coursePeriod: '6',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Maringá'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFSC',
    rating: 5,
    comment: 'Top demais! Comida deliciosa, ambiente limpo e organizado, e atendimento nota 10!',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Bom cozimento dos alimentos', type: 'positive' },
      { name: 'Variedade de saladas', type: 'positive' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Ciência da Computação',
    coursePeriod: '7',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Florianópolis'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFSM',
    rating: 3,
    comment:
      'Bom almoço, mas a fila estava um pouco longa. Precisam melhorar a variedade de saladas.',
    tags: [
      { name: 'Fila grande', type: 'negative' },
      { name: 'Carboidrato de qualidade', type: 'positive' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Poucas opções de saladas', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' }
    ],
    mealPeriod: MealPeriod.BREAKFAST,
    courseName: 'History',
    coursePeriod: '8',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Santa Maria'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFPE',
    rating: 2,
    comment: 'Experiência ruim. Comida de baixa qualidade, ambiente sujo e atendimento péssimo.',
    tags: [
      { name: 'Fila grande', type: 'negative' },
      { name: 'Sem palitos de dente', type: 'neutral' },
      { name: 'Ambiente barulhento', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Química',
    coursePeriod: '9',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Recife'
  },
  {
    ruCode: 'RU04',
    universityName: 'UFRJ',
    rating: 5,
    comment: 'O melhor RU que já visitei! Comida incrível, ambiente limpo e atendimento impecável.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Boa temperatura dos pratos', type: 'positive' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Fila grande', type: 'negative' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Matemática',
    coursePeriod: '10',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Rio de Janeiro'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFPR',
    rating: 4,
    comment:
      'Almoço satisfatório. Comida boa, ambiente agradável, mas a fila estava um pouco longa.',
    tags: [
      { name: 'Proteína macia', type: 'positive' },
      { name: 'Carboidrato de qualidade', type: 'positive' },
      { name: 'Sinal de Wi-Fi ruim', type: 'negative' },
      { name: 'Leguminosa saborosa', type: 'positive' }
    ],
    mealPeriod: MealPeriod.BREAKFAST,
    courseName: 'Física',
    coursePeriod: '11',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Curitiba'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFPB',
    rating: 3,
    comment:
      'Almoço regular. Comida boa, mas o ambiente estava um pouco barulhento. Fila aceitável.',
    tags: [
      { name: 'Proteína macia', type: 'positive' },
      { name: 'Variedade de sobremesas', type: 'positive' },
      { name: 'Fila curta', type: 'positive' },
      { name: 'Poucas opções de saladas', type: 'negative' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '12',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'João Pessoa'
  },
  {
    ruCode: 'RU04',
    universityName: 'UFBA',
    rating: 4,
    comment: 'Ótima experiência! Comida saborosa, ambiente limpo e atendimento eficiente.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Ambiente harmonioso', type: 'positive' },
      { name: 'Fila aceitável', type: 'positive' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '13',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Salvador'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRN',
    rating: 5,
    comment: 'Excelente! Comida de alta qualidade, ambiente agradável e atendimento excepcional.',
    tags: [
      { name: 'Comida de alta qualidade', type: 'positive' },
      { name: 'Ambiente aconchegante', type: 'positive' },
      { name: 'Atendimento excepcional', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Engenharia Civil',
    coursePeriod: '14',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Natal'
  },
  {
    ruCode: 'RU03',
    universityName: 'UEPB',
    rating: 3,
    comment:
      'Almoço razoável. Comida boa, mas o atendimento deixou um pouco a desejar. Fila longa.',
    tags: [
      { name: 'Proteína macia', type: 'positive' },
      { name: 'Ambiente barulhento', type: 'negative' },
      { name: 'Atendimento aquém do esperado', type: 'negative' },
      { name: 'Fila longa', type: 'negative' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Direito',
    coursePeriod: '15',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Campina Grande'
  },
  {
    ruCode: 'RU04',
    universityName: 'UFCG',
    rating: 4,
    comment: 'Boa opção para o almoço. Comida saborosa, ambiente limpo e atendimento eficiente.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Bom atendimento', type: 'positive' },
      { name: 'Ambiente limpo', type: 'positive' },
      { name: 'Fila aceitável', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Psicologia',
    coursePeriod: '16',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Campina Grande'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFMA',
    rating: 3,
    comment: 'Almoço regular. Comida ok, mas o ambiente estava um pouco sujo. Fila aceitável.',
    tags: [
      { name: 'Comida regular', type: 'neutral' },
      { name: 'Ambiente sujo', type: 'negative' },
      { name: 'Fila aceitável', type: 'positive' },
      { name: 'Atendimento razoável', type: 'neutral' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Biology',
    coursePeriod: '17',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'São Luís'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFT',
    rating: 5,
    comment: 'Incrível! Comida deliciosa, ambiente acolhedor e atendimento excepcional.',
    tags: [
      { name: 'Comida deliciosa', type: 'positive' },
      { name: 'Ambiente acolhedor', type: 'positive' },
      { name: 'Atendimento excepcional', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Física',
    coursePeriod: '18',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Palmas'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFAM',
    rating: 3,
    comment: 'Almoço regular. Comida ok, mas o ambiente estava um pouco sujo. Fila aceitável.',
    tags: [
      { name: 'Comida regular', type: 'neutral' },
      { name: 'Ambiente sujo', type: 'negative' },
      { name: 'Fila aceitável', type: 'positive' },
      { name: 'Atendimento razoável', type: 'neutral' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Química',
    coursePeriod: '19',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Manaus'
  },
  {
    ruCode: 'RU04',
    universityName: 'UFCG',
    rating: 2,
    comment: 'Experiência desagradável. Comida ruim, ambiente sujo e atendimento péssimo.',
    tags: [
      { name: 'Comida ruim', type: 'negative' },
      { name: 'Ambiente sujo', type: 'negative' },
      { name: 'Atendimento péssimo', type: 'negative' },
      { name: 'Fila grande', type: 'negative' }
    ],
    mealPeriod: MealPeriod.BREAKFAST,
    courseName: 'Matemática',
    coursePeriod: '20',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Campina Grande'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFMA',
    rating: 4,
    comment: 'Ótimo almoço! Comida saborosa, ambiente agradável e atendimento eficiente.',
    tags: [
      { name: 'Comida saborosa', type: 'positive' },
      { name: 'Ambiente agradável', type: 'positive' },
      { name: 'Atendimento eficiente', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'História',
    coursePeriod: '21',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'São Luís'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFT',
    rating: 3,
    comment: 'Almoço regular. Comida ok, mas o ambiente estava um pouco sujo. Fila aceitável.',
    tags: [
      { name: 'Comida regular', type: 'neutral' },
      { name: 'Ambiente sujo', type: 'negative' },
      { name: 'Fila aceitável', type: 'positive' },
      { name: 'Atendimento razoável', type: 'neutral' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Física',
    coursePeriod: '22',
    dietaryPreference: DietaryPreference.VEGAN,
    city: 'Palmas'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFAM',
    rating: 5,
    comment: 'Incrível! Comida deliciosa, ambiente acolhedor e atendimento excepcional.',
    tags: [
      { name: 'Comida deliciosa', type: 'positive' },
      { name: 'Ambiente acolhedor', type: 'positive' },
      { name: 'Atendimento excepcional', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.BREAKFAST,
    courseName: 'Química',
    coursePeriod: '23',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Manaus'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFPEL',
    rating: 3,
    comment:
      'Bom almoço, mas a fila estava um pouco longa. Precisam melhorar a variedade de saladas.',
    tags: [
      { name: 'Fila grande', type: 'negative' },
      { name: 'Comida de qualidade', type: 'positive' },
      { name: 'Atendimento bom', type: 'positive' },
      { name: 'Poucas opções de saladas', type: 'negative' },
      { name: 'Não aceita cartão', type: 'negative' }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Engenharia Civil',
    coursePeriod: '24',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Pelotas'
  },
  {
    ruCode: 'RU03',
    universityName: 'UFG',
    rating: 4,
    comment: 'Almoço muito bom! Comida saborosa e variada, além de um ambiente agradável.',
    tags: [
      { name: 'Comida de qualidade', type: 'positive' },
      { name: 'Ambiente harmonioso', type: 'positive' },
      { name: 'Atendimento eficiente', type: 'positive' },
      { name: 'Fila curta', type: 'positive' }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Goiânia'
  }
];

export const getReviewsList = () => {
  return reviews;
};
