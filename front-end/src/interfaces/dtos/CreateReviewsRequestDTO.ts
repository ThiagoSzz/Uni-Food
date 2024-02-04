import { MealPeriod } from '../../enums/MealPeriodEnum';
import { Tag } from '../Tags';

export interface CreateReviewRequestDTO {
  siglaRU: string;
  siglaUniversidade: string;
  emailUsuario: string;
  periodoNota: MealPeriod;
  notaEstrelas: number;
  comentario: string;
  tags: Tag[];
  duracaoNota: number;
}
