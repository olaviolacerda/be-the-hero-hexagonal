import { Container as infraContainer } from './infra';
import { IOngService, IOngUseCase } from './ong';

export type Container = {
  ongUseCase: IOngUseCase;
};

export type ContainerConfig = {
  ongRepository: infraContainer['ongRepository'];
};

export type ServiceContext = {
  ongRepository: ContainerConfig['ongRepository'];
};

export type UseCaseContext = {
  ongService: IOngService;
};