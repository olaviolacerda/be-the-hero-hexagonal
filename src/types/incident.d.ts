export type Incident = {
  id: string;
  title: string;
  description: string;
  value: number;
  ong_id: string;
}

export interface IIncidentRepository {
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>
  findIncident(params: any): Promise<Incident[]>;
}

export interface IIncidentService {
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>;
  findIncidentsByParams(params: any): Promise<Incident[]>;
}

export interface IIncidentUseCase {
  createIncident(incident: Partial<Incident>): any;
  findAllIncidents(): any;
}