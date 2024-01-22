import { MealPeriod } from '../../enums/MealPeriodEnum';

export interface CreateReviewRequestDTO {
  siglaRU: string;
  siglaUniversidade: string;
  emailUsuario: string;
  periodoNota: MealPeriod;
  notaEstrelas: number;
  comentario: string;
  tags: string;
  duracaoNota: number;
}
