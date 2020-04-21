import Knex from "knex";

const database = {
  client: 'sqlite3',
  connection: {
    filename: './src/database/db.sqlite',
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true,
} as Knex.Config;

export = database