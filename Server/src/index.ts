import {NGMServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {NGMServerApplication};

export async function main(options?: ApplicationConfig) {
  const app = new NGMServerApplication(options);
  await app.boot();
  await app.start();
  return app;
}
