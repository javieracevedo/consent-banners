import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ConsentBanner from './views/ConsentBanners';

const router = createBrowserRouter([
  {
    path: '/',
    element: ConsentBanner
  }
]);

export default router;
