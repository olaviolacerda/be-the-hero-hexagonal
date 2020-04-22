import { Application } from './app';
import env from './utils/env';

const application = new Application({
  env, ports: {
    http: true,
  }
});

setImmediate(() => {
  application.start();
  console.info('Application started');
});
