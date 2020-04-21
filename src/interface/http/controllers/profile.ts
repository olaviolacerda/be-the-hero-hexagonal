import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { HttpRouter, IHttpRoute } from '../../../types/interface/http';
import { IProfileUseCase } from '../../../types/profile';
import { getProfile } from '../schemas/profile';

export class ProfileController implements IHttpRoute {
  private readonly profileUseCase: IProfileUseCase;
  private readonly _validator: Function;

  constructor({ coreContainer, validator }: any) {
    this._validator = validator;
    this.profileUseCase = coreContainer.profileUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/profile')
      .get(
        this._validator(getProfile),
        this.findAllProfileIncidents.bind(this),
      );
  }

  async findAllProfileIncidents(req: Request, res: Response, next: NextFunction) {
    try {

      const ong_id = req.headers?.authorization  as string;

      const incidents = await this.profileUseCase.findAllProfileIncidents(ong_id);

      res.status(httpStatus.OK).send(incidents);
    } catch (err) {
      next(err);
    }
  }

}