import { UseCaseContext } from '../../types/core';
import { IIncidentUseCase, Incident } from '../../types/incident';

export class IncidentUseCase implements IIncidentUseCase {
  private incidentService: UseCaseContext['incidentService'];

  constructor(ctx: UseCaseContext) {
    this.incidentService = ctx.incidentService;
  }
  
  createIncident(incident: Partial<Incident>) {
    return this.incidentService.createIncident(incident);
  }

  findAllIncidents() {
    return this.incidentService.findIncidentsByParams('*');
  }
}