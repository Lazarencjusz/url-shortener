import { RequestMathod } from './model/RequestMathod';
import { Routings } from './model/Routings';
import { UrlParam } from './model/UrlParam';
import { redirectHandler } from './routes/redirectHandler';
import { rootHandler } from './routes/rootHandler';
import { shortenUrlHandler } from './routes/shortenUrlHandler';

export const routings: Routings = new Map([
  ['/', [RequestMathod.get, rootHandler]],
  [`/:${UrlParam.param}`, [RequestMathod.get, redirectHandler]],
  ['/short-url', [RequestMathod.post, shortenUrlHandler]],
]);
