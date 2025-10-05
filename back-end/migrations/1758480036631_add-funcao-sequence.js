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
  pgm.createSequence('funcao_seq', {
    start: 1,
    increment: 1,
    cache: 1
  });

  pgm.alterColumn('funcao', 'cod_funcao', {
    default: pgm.func("nextval('funcao_seq')")
  });

  pgm.sql('ALTER SEQUENCE funcao_seq OWNED BY funcao.cod_funcao;');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.alterColumn('funcao', 'cod_funcao', {
    default: null
  });

  pgm.dropSequence('funcao_seq');
};
