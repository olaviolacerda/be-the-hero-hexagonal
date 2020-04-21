import { ServiceContext } from '../../types/core';
import { IIncidentService, Incident } from '../../types/incident';

export class IncidentService implements IIncidentService {
  private incidentRepository: ServiceContext['incidentRepository'];

  constructor(ctx: ServiceContext) {
    this.incidentRepository = ctx.incidentRepository;
  }

  async createIncident(incident: Partial<Incident>): Promise<string> {
    return this.incidentRepository.createIncident(incident);
  }

  async findIncidentsByParams(params: any): Promise<Incident[]> {
    return this.incidentRepository.findIncident(params);
  }

  async findIncidentById(id: string): Promise<Incident> {
    const [incident] = await this.incidentRepository.findIncident({ id });
    return incident;
  }

  async deleteIncidentById(id: string): Promise<boolean> {
    return this.incidentRepository.deleteIncident({ id });
  }

}