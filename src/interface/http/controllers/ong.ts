import crypto from 'crypto';
import httpStatus from 'http-status-codes';
import { Container } from '../../../types/core';
import { HttpNext, HttpRequest, HttpResponse, HttpRouter, IHttpRoute } from '../../../types/interface/http';
import { IOngUseCase } from '../../../types/ong';

export class OngController implements IHttpRoute {
  private readonly ongUseCase: IOngUseCase;

  constructor({ ongUseCase }: Container) {
    this.ongUseCase = ongUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/ongs')
      .post(
        this.createOng.bind(this),
      )
      .get(
        this.findAllOngs.bind(this),
      );
  }

  async createOng(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { name, email, whatsapp, city, uf } = req.body;

      const ongId = crypto.randomBytes(4).toString('HEX');

      const [id] = await this.ongUseCase.createOng({
        id: ongId, name, email, whatsapp, city, uf
      });

      res.status(httpStatus.CREATED).send({ id });
    } catch (err) {
      next(err);
    }
  }

  async findAllOngs(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const ongs = await this.ongUseCase.findAllOngs();

      res.status(httpStatus.OK).send(ongs);
    } catch (err) {
      next(err);
    }
  }
}