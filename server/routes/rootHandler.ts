import { Request, Response } from 'express';

export function rootHandler(req: Request, res: Response) {
  res.sendFile(__dirname + '/index.html');
}
