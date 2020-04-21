import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { HttpRouter, IHttpRoute } from '../../../types/interface/http';
import { ISessionUseCase } from '../../../types/session';
import { postSession } from '../schemas/session';

export class SessionController implements IHttpRoute {
  private readonly sessionUseCase: ISessionUseCase;
  private readonly _validator: Function;

  constructor({ coreContainer, validator }: any) {
    this._validator = validator;
    this.sessionUseCase = coreContainer.sessionUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/sessions')
      .post(
        this._validator(postSession),
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