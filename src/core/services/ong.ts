import { ServiceContext } from '../../types/core';
import { IOngService, Ong } from '../../types/ong';

export class OngService implements IOngService {
  private ongRepository: ServiceContext['ongRepository'];

  constructor(ctx: ServiceContext) {
    this.ongRepository = ctx.ongRepository;
  }

  async createOng(ong: Partial<Ong>): Promise<string> {
    return this.ongRepository.createOng(ong);
  }

  async findOngsByParams(params: any): Promise<Ong[]> {
    return this.ongRepository.findOng(params);
  }
}