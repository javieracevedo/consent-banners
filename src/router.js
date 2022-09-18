import { createBrowserRouter } from 'react-router-dom';
import ConsentBanner from './views/ConsetBanners';

const router = createBrowserRouter([
  {
    path: '/',
    element: ConsentBanner
  }
]);

export default router;
