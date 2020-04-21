import { Container, ContainerConfig } from '../types/infra';
import database from '../utils/knex';
import { MysqlAdapter } from './adapters/mysql';
import { IncidentRepository } from './repositories/incident';
import { OngRepository } from './repositories/ong';

export function createContainer(config: ContainerConfig): Container {
  const createMysqlAdapter = () => {
    const dbConnection = database();
    
    return new MysqlAdapter({
      dbConnection,
    });
  };

  return {
    ongRepository: new OngRepository({
      mysqlAdapter: createMysqlAdapter(),
    }),
    incidentRepository: new IncidentRepository({
      mysqlAdapter: createMysqlAdapter(),
    }),
  };
}