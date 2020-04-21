import { Container, ContainerConfig } from '../types/infra';
import database from '../utils/knex';
import { MysqlAdapter } from './adapters/mysql';
import { OngRepository } from './repositories/ong';

export function createContainer(config: ContainerConfig): Container {
  const dbConnection = database();

  return {
    ongRepository: new OngRepository({
      mysqlAdapter: new MysqlAdapter({
        dbConnection,
      }),
    }),
  };
}