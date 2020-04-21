import { Incident } from "./incident";

export interface IProfileUseCase {
  findAllProfileIncidents(ong_id: Incident['ong_id']): any;
}