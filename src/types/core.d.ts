import { IIncidentService, IIncidentUseCase } from './incident';
import { Container as infraContainer } from './infra';
import { IOngService, IOngUseCase } from './ong';

export type Container = {
  ongUseCase: IOngUseCase;
  incidentUseCase: IIncidentUseCase;
};

export type ContainerConfig = {
  ongRepository: infraContainer['ongRepository'];
  incidentRepository: infraContainer['incidentRepository'];
};

export type ServiceContext = {
  ongRepository: ContainerConfig['ongRepository'];
  incidentRepository: ContainerConfig['incidentRepository'];
};

export type UseCaseContext = {
  ongService: IOngService;
  incidentService: IIncidentService;
};