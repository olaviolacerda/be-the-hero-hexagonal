import { createContainer as coreContainer } from '../core';
import { createContainer as infraContainer } from '../infra';
import { Container, ContainerConfig } from '../types/interface';
import env from '../utils/env';
import { HttpInterface } from './http';

const container = coreContainer(infraContainer({ env }));
const interfaceContainer: Container = {};

function initHttpServer(config: any): HttpInterface {
  return new HttpInterface(config);
}

export function createContainer(config: ContainerConfig): Container {
  if (config.ports?.http)
    interfaceContainer.httpInterface = initHttpServer({
      env, coreContainer: container
    });

  return interfaceContainer;
}