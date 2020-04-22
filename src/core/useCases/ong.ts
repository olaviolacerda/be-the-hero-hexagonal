import generateUniqueId from '../../helpers/generateUniqueId';
import { UseCaseContext } from '../../types/core';
import { IOngUseCase, Ong } from '../../types/ong';

export class OngUseCase implements IOngUseCase {
  private ongService: UseCaseContext['ongService'];

  constructor(ctx: UseCaseContext) {
    this.ongService = ctx.ongService;
  }
  
  createOng(ong: Partial<Ong>) {
    const id = generateUniqueId();

    return this.ongService.createOng({
      ...ong,
      id
    })
  }

  findAllOngs() {
    return this.ongService.findOngsByParams({});
  }
}