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

export const createUniversityIfNotExists = async (
  universityCode: string,
  universityName?: string
) => {
  const checkUniversityCommand = `
    SELECT sigla FROM Universidade WHERE sigla = $1
  `;

  try {
    logger.info('Check university exists: operation triggered');
    const existingUniversity = await sqlOperation(checkUniversityCommand, [
      universityCode.padEnd(10)
    ]);

    if (existingUniversity.length === 0) {
      const insertUniversityCommand = `
        INSERT INTO Universidade (sigla, nome, estado_uf, cidade)
        VALUES ($1, $2, $3, $4)
      `;

      logger.info('Create university: operation triggered');
      await sqlOperation(insertUniversityCommand, [
        universityCode.padEnd(10),
        universityName || `Universidade ${universityCode}`,
        'XX', // Use 2-character placeholder for state
        'N/A' // City can be longer
      ]);
    }
  } catch (error) {
    logger.error('Create university if not exists: error', error);
    throw error;
  }
};

export const createRestaurantIfNotExists = async (ruCode: string, universityCode: string) => {
  const checkRestaurantCommand = `
    SELECT cod_ru FROM Restaurante WHERE sigla_ru = $1 AND sigla_universidade = $2
  `;

  try {
    logger.info('Check restaurant exists: operation triggered');
    const existingRestaurant = await sqlOperation(checkRestaurantCommand, [
      ruCode,
      universityCode.padEnd(10)
    ]);

    if (existingRestaurant.length === 0) {
      const getNextRuIdCommand = `
        SELECT COALESCE(MAX(cod_ru), 0) + 1 as next_id FROM Restaurante
      `;

      const nextIdResult = await sqlOperation(getNextRuIdCommand, []);
      const nextId = nextIdResult[0].next_id;

      const insertRestaurantCommand = `
        INSERT INTO Restaurante (cod_ru, sigla_ru, campus, sigla_universidade)
        VALUES ($1, $2, $3, $4)
      `;

      logger.info('Create restaurant: operation triggered');
      await sqlOperation(insertRestaurantCommand, [
        nextId,
        ruCode,
        `Campus ${ruCode}`, // Default campus name
        universityCode.padEnd(10)
      ]);

      return nextId;
    } else {
      return existingRestaurant[0].cod_ru;
    }
  } catch (error) {
    logger.error('Create restaurant if not exists: error', error);
    throw error;
  }
};

export const getOrCreateRuId = async (ruCode: string, universityName: string) => {
  try {
    await createUniversityIfNotExists(universityName);

    const ruId = await createRestaurantIfNotExists(ruCode, universityName);

    const operationCommand = `
      SELECT cod_ru
      FROM Restaurante
      WHERE sigla_ru = $1 AND sigla_universidade = $2
    `;

    logger.info('Get university restaurant id: operation triggered');
    const result = await sqlOperation(operationCommand, [ruCode, universityName.padEnd(10)]);
    return result;
  } catch (error) {
    logger.error('Get or create university restaurant id: error', error);
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
    return await sqlOperation(operationCommand, [
      ratingId,
      userEmail,
      mealPeriod,
      rating,
      comment,
      formattedTags,
      ratingDuration
    ]);
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

export const getCourseNames = async (): Promise<Record<string, any>[]> => {
  const operationCommand = `
    SELECT DISTINCT nome_curso
    FROM funcao
    WHERE nome_curso IS NOT NULL
    ORDER BY nome_curso ASC
  `;

  try {
    logger.info('Get course names: operation triggered');
    return await sqlOperation(operationCommand, []);
  } catch (error) {
    logger.error('Get course names: error', error);
    throw error;
  }
};
