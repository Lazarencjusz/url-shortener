import { Express } from 'express';
import { routings } from './routings';

export const addRoutings = (app: Express) =>
  routings.forEach((value, url) => {
    const [method, handler] = value;
    app[method](url, handler);
  });
