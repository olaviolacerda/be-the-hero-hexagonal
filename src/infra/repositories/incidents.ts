import { IIncidentRepository, Incident } from "../../types/incident";
import { IMysqlAdapter } from "../../types/infra/adapters/mysql";

type Context = {
  mysqlAdapter: IMysqlAdapter;
};

export class IncidentRepository implements IIncidentRepository {
  private mysqlAdapter: IMysqlAdapter;

  constructor({ mysqlAdapter }: Context) {
    this.mysqlAdapter = mysqlAdapter;
    this.mysqlAdapter.tableName = 'incidents';
  }

  async createIncident(incident: Partial<Incident>): Promise<Incident['id']> {
    return this.mysqlAdapter
      .db
      .insert(incident);
  }

  async findIncident(params: any): Promise<Incident[]> {
    return this.mysqlAdapter
      .db
      .select(params);
  }
}
