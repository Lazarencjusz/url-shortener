import { Request, Response } from 'express';
import { UrlParam } from '../model/UrlParam';
import { database } from './firebase';

export const redirectHandler = async (req: Request, res: Response): Promise<void> => {
  const param = req.params?.[UrlParam.param];
  const direction = database.ref(`urls/${param}`).once('value');
  res.status(301).redirect((await direction).val());
};
