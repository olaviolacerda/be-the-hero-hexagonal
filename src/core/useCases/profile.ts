import { UseCaseContext } from '../../types/core';
import { Incident } from '../../types/incident';
import { IProfileUseCase } from '../../types/profile';

export class ProfileUseCase implements IProfileUseCase {
  private incidentService: UseCaseContext['incidentService'];

  constructor(ctx: UseCaseContext) {
    this.incidentService = ctx.incidentService;
  }
  
  findAllProfileIncidents(ong_id: Incident['ong_id']) {
    return this.incidentService.findIncidentsByOngId(ong_id);
  }
}