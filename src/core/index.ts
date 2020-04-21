import { Container, ContainerConfig } from '../types/core';
import { IncidentService } from './services/incident';
import { OngService } from './services/ong';
import { IncidentUseCase } from './useCases/incident';
import { OngUseCase } from './useCases/ong';

export function createContainer(config: ContainerConfig): Container {
  const serviceContext = {
    ongRepository: config.ongRepository,
    incidentRepository: config.incidentRepository,
  };

  const useCaseContext = {
    ongService: new OngService(serviceContext),
    incidentService: new IncidentService(serviceContext),
  };

  return {
    ongUseCase: new OngUseCase(useCaseContext),
    incidentUseCase: new IncidentUseCase(useCaseContext),
  };
}