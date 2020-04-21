import { IIncidentRepository } from "../incident";
import { IOngRepository } from "../ong";

export type Container = {
  ongRepository: IOngRepository;
  incidentRepository: IIncidentRepository;
};

export type ContainerConfig = {};