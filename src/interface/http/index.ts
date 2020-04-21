import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Container } from '../../types/core';
import { IHttpRoute } from '../../types/interface/http';
import { IncidentController } from './controllers/incident';
import { OngController } from './controllers/ong';
import { ProfileController } from './controllers/profile';
import { SessionController } from './controllers/session';
import { errorHandler } from './middlewares/errorHandler';
import { validator } from './middlewares/validator';

interface IHttpInterface {
  serve(): void;
}

type Config = {
  env: typeof import('../../utils/env').default;
  coreContainer: Container;
};

export class HttpInterface implements IHttpInterface {
  private app?: express.Application;
  private readonly coreContainer: Container;
  private readonly env: Config['env'];

  constructor(config: any) {
    this.coreContainer = config.coreContainer;
    this.env = config.env;
  }

  initApp() {
    this.app = express();

    this.app.use(
      cors(),
      bodyParser.json(),
    );
  }

  setupRoutes() {
    const controllerConfig = { coreContainer: this.coreContainer, validator };

    [
      new OngController(controllerConfig),
      new IncidentController(controllerConfig),
      new ProfileController(controllerConfig),
      new SessionController(controllerConfig),
    ]
      .forEach((route: IHttpRoute) => {
        const router = express.Router({ mergeParams: true });
        route.register(router);
        this.app?.use(router);
      });
  }

  setupNotFound() {
    this.app?.use(
      '*',
      (req: express.Request, res: express.Response, next: express.NextFunction) => {
        next(new Error('Page not found'));
      },
    );
  }

  serve(): void {
    this.initApp();
    this.setupRoutes();

    this.setupNotFound();

    this.app?.use(errorHandler);
    this.app?.listen(this.env.httpPort);

    console.info(`http linstening on port ${this.env.httpPort}`)
  }
}