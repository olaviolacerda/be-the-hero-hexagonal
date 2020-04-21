import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Container } from '../../types/core';
import { IHttpRoute } from '../../types/interface/http';
import { IncidentController } from './controllers/incident';
import { OngController } from './controllers/ong';
import { ProfileController } from './controllers/profile';
import { SessionController } from './controllers/session';
import { validator } from './middlewares/validator';

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
      cors(),
      bodyParser.json(),
    );
  }

  setupRoutes() {
    [
      new OngController({ coreContainer: this.coreContainer, validator }),
      new IncidentController({ coreContainer: this.coreContainer, validator }),
      new ProfileController({ coreContainer: this.coreContainer, validator }),
      new SessionController({ coreContainer: this.coreContainer, validator }),
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