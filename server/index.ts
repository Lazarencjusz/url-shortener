import { run } from './config';
import { RequestMathod } from './model/RequestMathod';
import { Routings } from './model/Routings';
import { UrlParam } from './model/UrlParam';
import { redirectHandler } from './routes/redirectHandler';
import { rootHandler } from './routes/rootHandler';
import { shortenUrlHandler } from './routes/shortenUrlHandler';

const routings: Routings = new Map([
  ['/', [RequestMathod.get, rootHandler]],
  [`/:${UrlParam.param}`, [RequestMathod.get, redirectHandler]],
  ['/short-url', [RequestMathod.post, shortenUrlHandler]],
]);

run(routings);
