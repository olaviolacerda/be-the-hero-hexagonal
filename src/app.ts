
import { createContainer as interfaceContainer } from './interface';
import { AppConfig } from './types';

export class Application {
  private readonly ports: AppConfig['ports'];
  private readonly env: AppConfig['env'];

  constructor({ ports, env }: AppConfig) {
    this.ports = ports;
    this.env = env;
  }

  async start(): Promise<void> {
    const container = interfaceContainer({
      env: this.env, ports: this.ports
    });

    if (this.ports?.http)
      container.httpInterface?.serve();
  }
}
