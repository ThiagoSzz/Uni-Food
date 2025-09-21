/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  // Create sequence for funcao
  pgm.createSequence('funcao_seq', {
    start: 1,
    increment: 1,
    cache: 1
  });

  // Set the default value for cod_funcao to use the sequence
  pgm.alterColumn('funcao', 'cod_funcao', {
    default: pgm.func("nextval('funcao_seq')")
  });

  // Set the sequence owner to the column
  pgm.sql('ALTER SEQUENCE funcao_seq OWNED BY funcao.cod_funcao;');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  // Remove the default value
  pgm.alterColumn('funcao', 'cod_funcao', {
    default: null
  });

  // Drop the sequence
  pgm.dropSequence('funcao_seq');
};
