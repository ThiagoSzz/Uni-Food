/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // Insert base function/role types
  pgm.sql(`
    INSERT INTO funcao (cod_funcao, tipo, nome_curso, periodo) VALUES
    (1, 'estudante', NULL, NULL),
    (6, 'professor', NULL, NULL),  
    (7, 'funcionario', NULL, NULL);
  `);
};

exports.down = (pgm) => {
  // Remove the inserted function types
  pgm.sql(`
    DELETE FROM funcao WHERE cod_funcao IN (1, 6, 7);
  `);
};
