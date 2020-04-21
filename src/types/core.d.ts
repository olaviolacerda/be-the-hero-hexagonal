import { IIncidentService, IIncidentUseCase } from './incident';
import { Container as infraContainer } from './infra';
import { IOngService, IOngUseCase } from './ong';
import { IProfileUseCase } from './profile';
import { ISessionUseCase } from './session';

export type Container = {
  ongUseCase: IOngUseCase;
  incidentUseCase: IIncidentUseCase;
  profileUseCase: IProfileUseCase;
  sessionUseCase: ISessionUseCase;
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