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

  async findIncident(params: any, filters?: any): Promise<Incident[]> {
    return this.mysqlAdapter
      .db
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .where(params)
      .limit(filters?.limit)
      .offset(filters?.offset)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);
  }

  async deleteIncident(params: any): Promise<boolean> {
    return this.mysqlAdapter
      .db
      .where(params)
      .del();
  }

  async countAllIncidents(): Promise<any> {
    return this.mysqlAdapter
      .db
      .count();
  }
}
