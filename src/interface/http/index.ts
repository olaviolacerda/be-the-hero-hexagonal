import bodyParser from 'body-parser';
import express from 'express';
import { Container } from '../../types/core';
import { IHttpRoute } from '../../types/interface/http';
import { IncidentController } from './controllers/incident';
import { OngController } from './controllers/ong';
import { ProfileController } from './controllers/profile';

interface IHttpInterface {
  serve(): void;
}

export class HttpInterface implements IHttpInterface {
  private app?: express.Application;
  private coreContainer: Container;

  constructor(config: any) {
    this.coreContainer = config.coreContainer;
  }

  initApp() {
    this.app = express();

    this.app.use(
      bodyParser.json(),
    );
  }

  setupRoutes() {
    [
      new OngController(this.coreContainer),
      new IncidentController(this.coreContainer),
      new ProfileController(this.coreContainer),
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

    this.app?.listen(3000);
  }
}