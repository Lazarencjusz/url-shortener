import { RequestMathod } from './RequestMathod';
import { Request, Response } from 'express';

export type Routings = Map<string, [RequestMathod, (req?: Request, res?: Response) => void | Promise<void>]>;
