export enum ValidationError {
  RUCodeRequired = 'O campo "Código do RU" é obrigatório.',
  RUCodeFormat = 'O formato do campo "Código do RU" deve começar com "RU" seguido de números (ex: RU01, RU123).',
  UniversityNameRequired = 'O campo "Sigla da Universidade" é obrigatório.',
  UniversityNameNotRegistered = 'Digite a sigla da sua universidade (ex: UFRGS, USP, UFSC).',
  InvalidMealPeriod = 'O campo "Período da Refeição" é obrigatório.',
  InvalidCommentLength = 'O campo "Comentário" deve ter entre 10 e 340 caracteres.',
  InvalidTagsCount = 'O campo "Tags" deve ter no mínimo 2 e no máximo 5 tags.',
  RatingRequired = 'O campo "Nota" é obrigatório.'
}
