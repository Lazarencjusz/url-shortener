import express from 'express';
import http from 'http';
import { Routings } from './model/Routings';

export const run = (routings: Routings) => {
  var app = express();

  app.use(express.static(__dirname));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routings.forEach((value, url) => {
    const [method, handler] = value;
    app[method](url, handler);
  });

  const httpServer = http.createServer(app);

  httpServer.listen(8080, 'localhost', function () {
    console.log('server listening on port ' + 8080);
  });
};
