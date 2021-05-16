import { Request, Response } from 'express';
import { generate as randomString } from 'randomstring';
import { database } from './firebase';

export const shortenUrlHandler = (req: Request, res: Response): void => {
  const url: string = req.body?.url;
  if (!url || !(url.startsWith('http') || url.startsWith('https'))) {
    res.sendStatus(400);
  }
  const uniq = randomString(6);
  database.ref('urls').child(uniq).set(url);
  res.send(uniq);
};
