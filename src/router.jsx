import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ConsentBanner from './views/ConsetBanners';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/consent-banners',
    element: ConsentBanner
  }
]);

export default router;
