import express, { Express } from 'express';
import { addRoutings } from './addRoutings';
import { config } from './config';
import { startServer } from './startServer';

export const run = () => {
  var app: Express = express();

  config(app);
  addRoutings(app);
  startServer(app);
};
