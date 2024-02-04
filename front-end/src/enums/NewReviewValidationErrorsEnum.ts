export enum ValidationError {
  RUCodeRequired = 'O campo "Código do RU" é obrigatório.',
  RUCodeFormat = 'O formato do campo "Código do RU" é invalido. Talvez este RU não esteja cadastrado atualmente :(',
  UniversityNameRequired = 'O campo "Sigla da Universidade" é obrigatório.',
  UniversityNameNotRegistered = 'As universidades cadastradas atualmente são: USP, UFMG, UFRJ, UNB, UFG, UFRGS, UTFPR e UFSC.',
  InvalidMealPeriod = 'O campo "Período da Refeição" é obrigatório.',
  InvalidCommentLength = 'O campo "Comentário" deve ter entre 10 e 340 caracteres.',
  InvalidTagsCount = 'O campo "Tags" deve ter no mínimo 2 e no máximo 5 tags.',
  RatingRequired = 'O campo "Nota" é obrigatório.',
  CourseNameRequired = 'O campo "Curso" é obrigatório quando o período do curso é fornecido.',
  CoursePeriodRequired = 'O campo "Período" é obrigatório quando o nome do curso é fornecido.',
  InvalidDietaryPreference = 'O campo "Preferência Alimentar" é obrigatório.',
  InvalidCityLength = 'O campo "Cidade" deve ter no máximo 50 caracteres.'
}
