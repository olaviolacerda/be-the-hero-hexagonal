import { UseCaseContext } from '../../types/core';
import { IIncidentUseCase, Incident } from '../../types/incident';

export class IncidentUseCase implements IIncidentUseCase {
  private incidentService: UseCaseContext['incidentService'];

  constructor(ctx: UseCaseContext) {
    this.incidentService = ctx.incidentService;
  }

  findIncidentById(id: string) {
    return this.incidentService.findIncidentById(id);
  }
  
  deleteIncidentById(id: string) {
    return this.incidentService.deleteIncidentById(id);
  }
  
  createIncident(incident: Partial<Incident>) {
    return this.incidentService.createIncident(incident);
  }

  findAllIncidents(filters: any) {
    return this.incidentService.findIncidentsByParams({}, filters);
  }

  countAllIncidents() {
    return this.incidentService.countAllIncidents();
  }
}