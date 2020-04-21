import { ServiceContext } from '../../types/core';
import { IIncidentService, Incident } from '../../types/incident';

export class IncidentService implements IIncidentService {
  private incidentRepository: ServiceContext['incidentRepository'];

  constructor(ctx: ServiceContext) {
    this.incidentRepository = ctx.incidentRepository;
  }

  createIncident(incident: Partial<Incident>): Promise<string> {
    return this.incidentRepository.createIncident(incident);
  }

  async findIncidentsByParams(params: any): Promise<Incident[]> {
    return this.incidentRepository.findIncident(params);
  }
}