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

    router
      .route('/incidents/:id')
      .delete(
        this.deleteIncidentById.bind(this),
      );
  }

  async createIncident(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { title, description, value } = req.body;
      const ong_id = req.headers?.authorization;

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
      const { page = 1 } = req.query;
      const limit = 5;
      // @ts-ignore
      const offset = (page - 1) * limit;

      const [count] = await this.incidentUseCase.countAllIncidents();

      const incidents = await this.incidentUseCase.findAllIncidents({ offset, limit });

      res.header('X-Total-Count', count['count(*)']);

      res.status(httpStatus.OK).send(incidents);
    } catch (err) {
      next(err);
    }
  }

  async deleteIncidentById(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { id } = req.params;
      const ong_id = req.headers?.authorization;

      const incident = await this.incidentUseCase.findIncidentById(id);

      // TODO: Revisar responsabilidade
      if (incident.ong_id !== ong_id) {
        return res.status(httpStatus.UNAUTHORIZED)
          .send({
            error: 'Operation not permitted.'
          });
      }

      await this.incidentUseCase.deleteIncidentById(id);

      res.status(httpStatus.NO_CONTENT).send();
    } catch (err) {
      next(err);
    }
  }
}