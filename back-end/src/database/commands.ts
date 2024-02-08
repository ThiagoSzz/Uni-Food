import { logger } from '../config/logger';
import { sqlOperation } from './config';

export const getAllReviews = async (): Promise<Record<string, any>[]> => {
  const operationCommand = `
    SELECT
      R.sigla_ru AS ruCode,
      R.sigla_universidade AS universityName,
      N.nota_estrelas AS rating,
      N.comentario AS comment,
      N.tags AS tags,
      N.periodo_nota AS mealPeriod,
      U.preferencia_alimentar AS dietaryPreference,
      F.nome_curso AS courseName,
      F.periodo AS coursePeriod,
      U2.cidade AS city
    FROM
      Avaliacao A
    JOIN
      Nota N ON A.cod_nota = N.cod_nota
    JOIN
      Restaurante R ON A.cod_ru = R.cod_ru
    JOIN
      Usuario U ON A.email_usuario = U.email
    JOIN
      Funcao F ON U.tipo = F.cod_funcao
    JOIN
      Universidade U2 ON R.sigla_universidade = U2.sigla;
  `;

  try {
    logger.info('Get all reviews: operation triggered');
    return await sqlOperation(operationCommand, []);
  } catch (error) {
    logger.error('Get all reviews: error', error);
    throw error;
  }
};

export const getRuId = async (ruCode: string, universityName: string) => {
  const operationCommand = `
    SELECT cod_ru
    FROM Restaurante
    WHERE sigla_ru = $1 AND sigla_universidade = $2
  `;

  try {
    logger.info('Get university restaurant id: operation triggered');
    return await sqlOperation(operationCommand, [ruCode, universityName]);
  } catch (error) {
    logger.error('Get university restaurant id: error', error);
    throw error;
  }
};

export const getNextReviewId = async () => {
  const operationCommand = `SELECT nextval('avaliacao_seq')`;

  try {
    logger.info('Get next review id: operation triggered');
    return await sqlOperation(operationCommand, []);
  } catch (error) {
    logger.error('Get next review id: error', error);
    throw error;
  }
};

export const insertNewRating = async (
  ratingId: number,
  userEmail: string,
  mealPeriod: string,
  rating: number,
  comment: string,
  tags: any[],
  ratingDuration: number
) => {
  const operationCommand = `
    INSERT INTO Nota (cod_nota, email_usuario, periodo_nota, nota_estrelas, comentario, tags, duracao_nota)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;

  const joinedTags: string = tags.map((tag) => `{"${tag.name}", ${tag.type}}`).join(', ');
  const formattedTags: string = `{${joinedTags}}`;

  try {
    logger.info('Insert new rating: operation triggered');
    return await sqlOperation(
      operationCommand,
      [ratingId, userEmail, mealPeriod, rating, comment, formattedTags, ratingDuration]
    );
  } catch (error) {
    logger.error('Insert new rating: error', error);
    throw error;
  }
};

export const insertNewReview = async (reviewId: number, userEmail: string, ruId: number) => {
  const operationCommand = `
    INSERT INTO Avaliacao (cod_avaliacao, cod_nota, email_usuario, cod_ru)
    VALUES ($1, $1, $2, $3) 
  `;

  try {
    logger.info('Insert new review: operation triggered');
    return await sqlOperation(operationCommand, [reviewId, userEmail, ruId]);
  } catch (error) {
    logger.error('Insert new review: error', error);
    throw error;
  }
};
