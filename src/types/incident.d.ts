export type Incident = {
  id: string;
  title: string;
  description: string;
  value: number;
  ong_id: string;
}

export interface IIncidentRepository {
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>
  findIncident(params: Partial<Incident>): Promise<Incident[]>;
  deleteIncident(params: Partial<Incident>): Promise<boolean>;
}

export interface IIncidentService {
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>;
  findIncidentsByParams(params: Partial<Incident>): Promise<Incident[]>;
  findIncidentById(id: Incident['id']): Promise<Incident>;
  deleteIncidentById(id: Incident['id']): Promise<boolean>;
  findIncidentsByOngId(ong_id: Incident['ong_id']): Promise<Incident[]>;
}

export interface IIncidentUseCase {
  createIncident(incident: Partial<Incident>): any;
  findAllIncidents(): any;
  findIncidentById(id: Incident['id']): any;
  deleteIncidentById(id: Incident['id']): any;
}