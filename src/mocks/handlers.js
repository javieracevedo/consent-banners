import { rest } from 'msw';
import countries from './countries.json';
import { baseURL } from '../api';

const handlers = [
  rest.post(`${baseURL}/countries`, (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      ctx.status(200),
      ctx.json(countries)
    );
  })
];

export default handlers;
