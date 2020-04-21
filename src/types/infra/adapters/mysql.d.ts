import knex from 'knex';

export type MysqlDatabase = knex;

export interface IMysqlAdapter {
  db: knex.QueryBuilder;
  tableName: string;
}

export type MysqlAdapterConfig = {
  dbConnection: MysqlDatabase;
};