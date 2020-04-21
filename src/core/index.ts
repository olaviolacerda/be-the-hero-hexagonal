import { Container, ContainerConfig } from '../types/core';
import { OngService } from './services/ong';
import { OngUseCase } from './useCases/ong';



export function createContainer(config: ContainerConfig): Container {
  const serviceContext = {
    ongRepository: config.ongRepository,
  };

  const useCaseContext = {
    ongService: new OngService(serviceContext),
  };

  return {
    ongUseCase: new OngUseCase(useCaseContext),
  };
}