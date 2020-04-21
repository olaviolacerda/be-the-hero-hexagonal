import { IMysqlAdapter, MysqlAdapterConfig, MysqlDatabase } from '../../types/infra/adapters/mysql';

export class MysqlAdapter implements IMysqlAdapter {
  private _tbName: string;
  private database: MysqlDatabase;

  constructor({ dbConnection }: MysqlAdapterConfig) {
    this.database = dbConnection;
    this._tbName = '';
  }

  get db() {
    return this.database(this._tbName);
  }

  set tableName(name: string) {
    this._tbName = name;
  }
}