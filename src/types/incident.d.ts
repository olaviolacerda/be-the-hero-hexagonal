export type Incident = {
  id: string;
  title: string;
  description: string;
  value: number;
  ong_id: string;
}

export interface IIncidentRepository {
  countAllIncidents(): Promise<number>;
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>
  findIncident(params: Partial<Incident>, filters?: any): Promise<Incident[]>;
  deleteIncident(params: Partial<Incident>): Promise<boolean>;
}

export interface IIncidentService {
  countAllIncidents(): Promise<number>;
  createIncident(incident: Partial<Incident>): Promise<Incident['id']>;
  findIncidentsByParams(params: Partial<Incident>, filters?: any): Promise<Incident[]>;
  findIncidentById(id: Incident['id']): Promise<Incident>;
  deleteIncidentById(id: Incident['id']): Promise<boolean>;
  findIncidentsByOngId(ong_id: Incident['ong_id']): Promise<Incident[]>;
}

export interface IIncidentUseCase {
  countAllIncidents(): any;
  createIncident(incident: Partial<Incident>): any;
  findAllIncidents(filters?: any): any;
  findIncidentById(id: Incident['id']): any;
  deleteIncidentById(id: Incident['id']): any;
}