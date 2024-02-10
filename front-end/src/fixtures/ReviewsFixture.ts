import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';
import { TagTypes } from '../enums/TagTypes';
import { Review } from '../interfaces/Review';

const reviews: Review[] = [
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 2,
    comment:
      'Não gostei muito. A proteína estava dura demais, e não tinha muitas opções de proteína animal. Poderiam limpar melhor as mesas e cadeiras do RU.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
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
      'A comida estava fria e não tinha talheres para todos. Alguns frequentadores tiveram que comer só com garfo. Não tinha água pois o filtro estava quebrado.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Neutral }
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
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      'Ótima temperatura dos alimentos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: [
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Água gratuita', type: TagTypes.Neutral },
      { name: 'Variedade de saladas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive }
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
      'Excelente experiência! Boa variedade de alimentos, ambiente aconchegante e ótimo atendimento.',
    tags: [
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive }
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
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Mau atendimento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Bom cozimento dos alimentos', type: TagTypes.Positive },
      { name: 'Variedade de saladas', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Negative },
      { name: 'Leguminosa saborosa', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Variedade de sobremesas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida de alta qualidade', type: TagTypes.Positive },
      { name: 'Ambiente aconchegante', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Atendimento aquém do esperado', type: TagTypes.Negative },
      { name: 'Fila longa', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Ambiente limpo', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida ruim', type: TagTypes.Negative },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Atendimento péssimo', type: TagTypes.Negative },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Ambiente agradável', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Atendimento bom', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFG',
    rating: 3,
    comment: 'Não estava tão bom como normalmente é.',
    tags: [
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Ambiente sujo', type: TagTypes.Negative }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 2,
    comment:
      'Não gostei muito. A proteína estava dura demais, e não tinha muitas opções de proteína animal. Poderiam limpar melhor as mesas e cadeiras do RU.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
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
      'A comida estava fria e não tinha talheres para todos. Alguns frequentadores tiveram que comer só com garfo. Não tinha água pois o filtro estava quebrado.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Neutral }
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
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      'Ótima temperatura dos alimentos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: [
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Água gratuita', type: TagTypes.Neutral },
      { name: 'Variedade de saladas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive }
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
      'Excelente experiência! Boa variedade de alimentos, ambiente aconchegante e ótimo atendimento.',
    tags: [
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive }
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
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Mau atendimento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Bom cozimento dos alimentos', type: TagTypes.Positive },
      { name: 'Variedade de saladas', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Negative },
      { name: 'Leguminosa saborosa', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Variedade de sobremesas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida de alta qualidade', type: TagTypes.Positive },
      { name: 'Ambiente aconchegante', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Atendimento aquém do esperado', type: TagTypes.Negative },
      { name: 'Fila longa', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Ambiente limpo', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida ruim', type: TagTypes.Negative },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Atendimento péssimo', type: TagTypes.Negative },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Ambiente agradável', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Atendimento bom', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFG',
    rating: 3,
    comment: 'Não estava tão bom como normalmente é.',
    tags: [
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Ambiente sujo', type: TagTypes.Negative }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 2,
    comment:
      'Não gostei muito. A proteína estava dura demais, e não tinha muitas opções de proteína animal. Poderiam limpar melhor as mesas e cadeiras do RU.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
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
      'A comida estava fria e não tinha talheres para todos. Alguns frequentadores tiveram que comer só com garfo. Não tinha água pois o filtro estava quebrado.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Neutral }
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
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      'Ótima temperatura dos alimentos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: [
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Água gratuita', type: TagTypes.Neutral },
      { name: 'Variedade de saladas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive }
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
      'Excelente experiência! Boa variedade de alimentos, ambiente aconchegante e ótimo atendimento.',
    tags: [
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive }
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
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Mau atendimento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Bom cozimento dos alimentos', type: TagTypes.Positive },
      { name: 'Variedade de saladas', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Negative },
      { name: 'Leguminosa saborosa', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Variedade de sobremesas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida de alta qualidade', type: TagTypes.Positive },
      { name: 'Ambiente aconchegante', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Atendimento aquém do esperado', type: TagTypes.Negative },
      { name: 'Fila longa', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Ambiente limpo', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida ruim', type: TagTypes.Negative },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Atendimento péssimo', type: TagTypes.Negative },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Ambiente agradável', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Atendimento bom', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFG',
    rating: 3,
    comment: 'Não estava tão bom como normalmente é.',
    tags: [
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Ambiente sujo', type: TagTypes.Negative }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFRGS',
    rating: 4,
    comment:
      'Gostei bastante! A comida estava saborosa, e o atendimento foi muito bom. Ambiente tranquilo e limpo.',
    tags: [
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Ciência da Computação',
    coursePeriod: '1',
    dietaryPreference: DietaryPreference.OMNIVORE,
    city: 'Porto Alegre'
  },
  {
    ruCode: 'RU02',
    universityName: 'UFRGS',
    rating: 2,
    comment:
      'Não gostei muito. A proteína estava dura demais, e não tinha muitas opções de proteína animal. Poderiam limpar melhor as mesas e cadeiras do RU.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive }
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
      'A comida estava fria e não tinha talheres para todos. Alguns frequentadores tiveram que comer só com garfo. Não tinha água pois o filtro estava quebrado.',
    tags: [
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Neutral }
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
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      'Ótima temperatura dos alimentos e muita variedade de saladas frescas. A fila no horário do almoço estava curta.',
    tags: [
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Água gratuita', type: TagTypes.Neutral },
      { name: 'Variedade de saladas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína dura', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive }
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
      'Excelente experiência! Boa variedade de alimentos, ambiente aconchegante e ótimo atendimento.',
    tags: [
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida saborosa', type: TagTypes.Positive }
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
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Leguminosa sem sabor', type: TagTypes.Negative },
      { name: 'Mau atendimento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Bom cozimento dos alimentos', type: TagTypes.Positive },
      { name: 'Variedade de saladas', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Sem palitos de dente', type: TagTypes.Neutral },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Boa temperatura dos alimentos', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Carboidrato de qualidade', type: TagTypes.Positive },
      { name: 'Sinal de Wi-Fi ruim', type: TagTypes.Negative },
      { name: 'Leguminosa saborosa', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Variedade de sobremesas', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida de alta qualidade', type: TagTypes.Positive },
      { name: 'Ambiente aconchegante', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Proteína macia', type: TagTypes.Positive },
      { name: 'Comida de baixa qualidade', type: TagTypes.Negative },
      { name: 'Atendimento aquém do esperado', type: TagTypes.Negative },
      { name: 'Fila longa', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Bom atendimento', type: TagTypes.Positive },
      { name: 'Ambiente limpo', type: TagTypes.Positive },
      { name: 'Fila aceitável', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida ruim', type: TagTypes.Negative },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Atendimento péssimo', type: TagTypes.Negative },
      { name: 'Fila grande', type: TagTypes.Negative }
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
      { name: 'Comida saborosa', type: TagTypes.Positive },
      { name: 'Ambiente agradável', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Comida regular', type: TagTypes.Neutral },
      { name: 'Ambiente sujo', type: TagTypes.Negative },
      { name: 'Fila aceitável', type: TagTypes.Positive },
      { name: 'Atendimento razoável', type: TagTypes.Neutral }
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
      { name: 'Comida deliciosa', type: TagTypes.Positive },
      { name: 'Ambiente acolhedor', type: TagTypes.Positive },
      { name: 'Atendimento excepcional', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
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
      { name: 'Fila grande', type: TagTypes.Negative },
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Atendimento bom', type: TagTypes.Positive },
      { name: 'Poucas opções de saladas', type: TagTypes.Negative },
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative }
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
      { name: 'Comida de qualidade', type: TagTypes.Positive },
      { name: 'Com opção de sobremesa', type: TagTypes.Positive },
      { name: 'Atendimento eficiente', type: TagTypes.Positive },
      { name: 'Fila curta', type: TagTypes.Positive }
    ],
    mealPeriod: MealPeriod.DINNER,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  },
  {
    ruCode: 'RU01',
    universityName: 'UFG',
    rating: 3,
    comment: 'Não estava tão bom como normalmente é.',
    tags: [
      { name: 'Poucos métodos de pagamento', type: TagTypes.Negative },
      { name: 'Fila curta', type: TagTypes.Positive },
      { name: 'Ambiente sujo', type: TagTypes.Negative }
    ],
    mealPeriod: MealPeriod.LUNCH,
    courseName: 'Medicina',
    coursePeriod: '25',
    dietaryPreference: DietaryPreference.VEGETARIAN,
    city: 'Goiânia'
  }
];

export const getReviewsList = () => {
  return reviews;
};
