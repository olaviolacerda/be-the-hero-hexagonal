import { UseCaseContext } from '../../types/core';
import { Ong } from '../../types/ong';
import { ISessionUseCase } from '../../types/session';

export class SessionUseCase implements ISessionUseCase {
  private ongService: UseCaseContext['ongService'];

  constructor(ctx: UseCaseContext) {
    this.ongService = ctx.ongService;
  }

  async createSession(ongId: Ong['id']) {
    const ong = await this.ongService.findOngById(ongId);

    if (!ong) throw new Error('No ONG was found with the given ID.');

    return {
      name: ong.name,
    };
  }
}