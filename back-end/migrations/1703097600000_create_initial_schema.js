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
  // Create sequence for avaliacoes
  pgm.createSequence('avaliacao_seq', {
    start: 2000,
    increment: 1,
    cache: 1
  });

  // Create Universidade table
  pgm.createTable('universidade', {
    sigla: { type: 'char(10)', notNull: true, primaryKey: true },
    nome: { type: 'char(100)' },
    estado_uf: { type: 'char(2)' },
    cidade: { type: 'char(50)' }
  });

  // Create Funcao table
  pgm.createTable('funcao', {
    cod_funcao: { type: 'integer', notNull: true, primaryKey: true },
    tipo: { type: 'varchar(11)', notNull: true },
    nome_curso: { type: 'varchar(100)' },
    periodo: { type: 'varchar(2)' }
  });

  // Create Usuario table
  pgm.createTable('usuario', {
    email: { type: 'char(100)', notNull: true, primaryKey: true },
    senha: { type: 'varchar(100)', notNull: true },
    nome: { type: 'varchar(100)', notNull: true },
    sexo: { type: 'varchar(1)' },
    idade: { type: 'varchar(3)' },
    preferencia_alimentar: { type: 'varchar(11)' },
    tipo: {
      type: 'integer',
      references: 'funcao(cod_funcao)'
    }
  });

  // Create Restaurante table
  pgm.createTable('restaurante', {
    cod_ru: { type: 'integer', notNull: true, primaryKey: true },
    sigla_ru: { type: 'char(4)' },
    campus: { type: 'char(50)' },
    sigla_universidade: {
      type: 'char(10)',
      references: 'universidade(sigla)'
    },
    media_avaliacao: { type: 'varchar(1)' }
  });

  // Create Nota table
  pgm.createTable('nota', {
    cod_nota: { type: 'integer', notNull: true, primaryKey: true },
    email_usuario: {
      type: 'char(100)',
      references: 'usuario(email)'
    },
    periodo_nota: { type: 'char(15)' },
    nota_estrelas: { type: 'numeric' },
    comentario: { type: 'text' },
    tags: { type: 'char(50)[]' },
    duracao_nota: { type: 'integer' }
  });

  // Create Avaliacao table
  pgm.createTable('avaliacao', {
    cod_avaliacao: { type: 'integer', notNull: true, primaryKey: true },
    cod_nota: {
      type: 'integer',
      notNull: true,
      references: 'nota(cod_nota)'
    },
    email_usuario: {
      type: 'char(100)',
      notNull: true,
      references: 'usuario(email)'
    },
    cod_ru: {
      type: 'integer',
      notNull: true,
      references: 'restaurante(cod_ru)'
    }
  });

  // Create Frequentacao table
  pgm.createTable('frequentacao', {
    cod_frequentacao: { type: 'integer', notNull: true, primaryKey: true },
    email_usuario: {
      type: 'char(100)',
      notNull: true,
      references: 'usuario(email)'
    },
    sigla_universidade: {
      type: 'char(10)',
      notNull: true,
      references: 'universidade(sigla)'
    }
  });

  // Create indexes for better performance
  pgm.createIndex('avaliacao', 'email_usuario', { name: 'idx_avaliacao_usuario' });
  pgm.createIndex('avaliacao', 'cod_ru', { name: 'idx_avaliacao_ru' });
  pgm.createIndex('nota', 'periodo_nota', { name: 'idx_nota_periodo' });
  pgm.createIndex('restaurante', ['sigla_ru', 'sigla_universidade'], {
    name: 'idx_restaurante_sigla'
  });
  pgm.createIndex('frequentacao', 'email_usuario', { name: 'idx_frequentacao_usuario' });
  pgm.createIndex('frequentacao', 'sigla_universidade', { name: 'idx_frequentacao_universidade' });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  // Drop tables in reverse order (respecting foreign keys)
  pgm.dropTable('frequentacao');
  pgm.dropTable('avaliacao');
  pgm.dropTable('nota');
  pgm.dropTable('restaurante');
  pgm.dropTable('usuario');
  pgm.dropTable('funcao');
  pgm.dropTable('universidade');

  // Drop sequence
  pgm.dropSequence('avaliacao_seq');
};
