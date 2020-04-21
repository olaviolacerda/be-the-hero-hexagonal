import knex from 'knex';
import database from '../../knexfile';

let db: knex;
export default function getDbConnection(): knex {
  if (!db) {
    db = knex(database);
  }

  return db;
}