import { Ong } from "./ong";

export interface ISessionUseCase {
  createSession(ongId: Ong['id']): any;
}