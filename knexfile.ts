import * as Knex from "knex";
import env from "./src/utils/env";

const database = {
  client: env.dbClient,
  debug: env.dbDebug || false,
  connection: {
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbSchema,
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true,
} as Knex.Config;

export = database;