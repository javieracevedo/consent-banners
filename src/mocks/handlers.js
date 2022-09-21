import { rest } from 'msw';
import countries from './countries.json';
import banners from './banners.json';

import { baseURL } from '../api';

const handlers = [
  rest.get(`${baseURL}/countries`, (req, res, ctx) => res(ctx.status(200), ctx.json(countries))),
  rest.get(`${baseURL}/banners`, (req, res, ctx) => res(ctx.status(200), ctx.json(banners)))
];

export default handlers;
