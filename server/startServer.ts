import { Express } from 'express';
import http from 'http';

export const startServer = (app: Express) => {
  const httpServer = http.createServer(app);

  httpServer.listen(8080, 'localhost', function () {
    console.log('server listening on port ' + 8080);
  });
};
