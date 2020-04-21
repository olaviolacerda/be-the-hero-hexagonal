import { createContainer as coreContainer } from './core';
import { createContainer as infraContainer } from './infra';
import { HttpInterface } from './interface/http';
import { Container } from './types/core';


export class Application {
  private readonly config: any;

  constructor(config: any) {
    this.config = config;
  }

  private async initHttpServer(coreContainer: Container): Promise<void> {
    const httpServer = new HttpInterface({ coreContainer });
    httpServer.serve();
    console.info(`HTTP server started in port 3000`);
  }

  /**
   * Start all servers
   */
  private async initServers(): Promise<void> {
    const container = coreContainer(infraContainer({}));
    await this.initHttpServer(container);
  }

  /**
   * Start the app
   */
  async start(): Promise<void> {
    await this.initServers();
  }
}
