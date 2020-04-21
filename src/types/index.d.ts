type Env = {
  readonly httpPort: number;
  readonly dbPort: number;
  readonly dbHost: string;
  readonly dbUsername?: string;
  readonly dbPassword?: string;
  readonly dbDatabase?: string;
  readonly dbDebug: boolean;
}

export type AppConfig = {
  env: Env;
}

export interface ICodedError {
  message: string;
  code: string;
  details?: object;
}