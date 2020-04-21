import { IMysqlAdapter } from '../../types/infra/adapters/mysql';
import { IOngRepository, Ong } from '../../types/ong';

type Context = {
  mysqlAdapter: IMysqlAdapter;
};

export class OngRepository implements IOngRepository {
  private mysqlAdapter: IMysqlAdapter;

  constructor({ mysqlAdapter }: Context) {
    this.mysqlAdapter = mysqlAdapter;
    this.mysqlAdapter.tableName = 'ongs';
  }

  async createOng(ong: Partial<Ong>): Promise<Ong['id']> {
    return this.mysqlAdapter
      .db
      .insert(ong);
  }

  async findOng(params: any): Promise<Ong[]> {
    return this.mysqlAdapter
      .db
      .where(params);
  }
}