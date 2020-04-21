import { AnySchema } from '@hapi/joi';
import { HttpNext, HttpRequest, HttpResponse } from '../../../types/interface/http';


export const validator = (schema: AnySchema) => (req: HttpRequest, res: HttpResponse, next: HttpNext) => {
  const validation = schema.validate(req, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  if (validation.error) {
    return next(new Error('Invalid request params'));
  }

  Object.assign(req, validation.value);

  return next();
};