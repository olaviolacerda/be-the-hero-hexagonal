import { Env } from "..";
import { IHttpInterface } from "./http";

export type Container = {
  httpInterface?: IHttpInterface; 
};

export type Ports = {
  http?: boolean;
}

export type ContainerConfig = {
  env: Env;
  ports: Ports;
};