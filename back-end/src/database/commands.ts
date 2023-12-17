import { sqlOperation } from "./config";

export const getAllReviews = async (): Promise<Record<string, any>[]> => {
  const operationCommand = `
    SELECT
      R.sigla_ru AS sigla_restaurante,
      R.sigla_universidade AS sigla_universidade,
      N.nota_estrelas AS nota_dada,
      N.comentario,
      N.tags,
      N.periodo_nota
    FROM
      Avaliacao A
    JOIN
      Nota N ON A.cod_nota = N.cod_nota
    JOIN
      Restaurante R ON A.cod_ru = R.cod_ru;
  `;

  const operationDescription = "Get all reviews";

  try {
    return sqlOperation(operationCommand, [], operationDescription);
  } catch (error) {
    console.error(`Error in ${operationCommand} operation:`, error);
    throw error;
  }
};
