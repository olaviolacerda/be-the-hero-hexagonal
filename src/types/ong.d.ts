export type Ong = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export interface IOngRepository {
  createOng(ong: Partial<Ong>): Promise<Ong['id']>;
  findOng(params: Partial<Ong>): Promise<Ong[]>;
}

export interface IOngService {
  createOng(user: Partial<Ong>): Promise<Ong['id']>;
  findOngsByParams(params: Partial<Ong>): Promise<Ong[]>;
}

export interface IOngUseCase {
  createOng(ong: Partial<Ong>): any;
  findAllOngs(): any;
}