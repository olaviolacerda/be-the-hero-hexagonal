import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { Container } from '../../../types/core';
import { HttpRouter, IHttpRoute } from '../../../types/interface/http';
import { ISessionUseCase } from '../../../types/session';

export class SessionController implements IHttpRoute {
  private readonly sessionUseCase: ISessionUseCase;

  constructor({ sessionUseCase }: Container) {
    this.sessionUseCase = sessionUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/sessions')
      .post(
        this.createSession.bind(this),
      );
  }

  async createSession(req: Request, res: Response, next: NextFunction) {
    try {

      const { id } = req.body;

      const ong = await this.sessionUseCase.createSession(id);

      res.status(httpStatus.OK).send(ong);
    } catch (err) {
      next(err);
    }
  }

}