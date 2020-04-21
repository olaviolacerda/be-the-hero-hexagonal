import httpStatus from 'http-status-codes';
import { Container } from '../../../types/core';
import { IIncidentUseCase } from '../../../types/incident';
import { HttpNext, HttpRequest, HttpResponse, HttpRouter, IHttpRoute } from '../../../types/interface/http';

export class IncidentController implements IHttpRoute {
  private readonly incidentUseCase: IIncidentUseCase;

  constructor({ incidentUseCase }: Container) {
    this.incidentUseCase = incidentUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/incidents')
      .post(
        this.createIncident.bind(this),
      )
      .get(
        this.findAllIncidents.bind(this),
      );
  }

  async createIncident(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { title, description, value } = req.body;
      const ong_id = req.headers.authorization;

      const [id] = await this.incidentUseCase.createIncident({
        title, description, value, ong_id
      });

      res.status(httpStatus.CREATED).send({ id });
    } catch (err) {
      next(err);
    }
  }

  async findAllIncidents(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const incidents = await this.incidentUseCase.findAllIncidents();

      res.status(httpStatus.OK).send(incidents);
    } catch (err) {
      next(err);
    }
  }
}