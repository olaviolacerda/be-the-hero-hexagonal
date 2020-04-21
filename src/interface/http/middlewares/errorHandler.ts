import httpStatusCodes from 'http-status-codes';
import { HttpNext, HttpRequest, HttpResponse } from '../../../types/interface/http';

export const errorHandler = (err: Error, req: HttpRequest, res: HttpResponse, next: HttpNext) => {
  const status = httpStatusCodes.INTERNAL_SERVER_ERROR;
  const throwErr: Error = new Error(err.message);

  return res
    .status(status)
    .send({
      code: throwErr.name,
      message: throwErr.message,
    });
};