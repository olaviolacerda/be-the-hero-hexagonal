import httpStatus from 'http-status-codes';
import { HttpNext, HttpRequest, HttpResponse, HttpRouter, IHttpRoute } from '../../../types/interface/http';
import { IOngUseCase } from '../../../types/ong';
import { postOng } from '../schemas/ong';

export class OngController implements IHttpRoute {
  private readonly ongUseCase: IOngUseCase;
  private readonly _validator: Function;

  constructor({ container, validator }: any) {
    this._validator = validator;
    this.ongUseCase = container.ongUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/ongs')
      .post(
        this._validator(postOng),
        this.createOng.bind(this),
      )
      .get(
        this.findAllOngs.bind(this),
      );
  }

  async createOng(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { name, email, whatsapp, city, uf } = req.body;

      const [id] = await this.ongUseCase.createOng({
        name, email, whatsapp, city, uf
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