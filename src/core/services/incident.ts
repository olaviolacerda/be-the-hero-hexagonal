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

  async findIncidentsByParams(params: Partial<Incident>): Promise<Incident[]> {
    return this.incidentRepository.findIncident(params);
  }

  async findIncidentById(id: Incident['id']): Promise<Incident> {
    const [incident] = await this.incidentRepository.findIncident({ id });
    return incident;
  }

  async findIncidentsByOngId(ong_id: Incident['ong_id']): Promise<Incident[]> {
    return this.incidentRepository.findIncident({ ong_id });
  }

  async deleteIncidentById(id: Incident['id']): Promise<boolean> {
    return this.incidentRepository.deleteIncident({ id });
  }
}