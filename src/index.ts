import { Application } from './app';
import env from './utils/env';

const application = new Application({ env });

setImmediate(async () => {
  await application.start();
  console.info('Application started');
});
