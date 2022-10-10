import { lazy } from 'react';
const Home = lazy(() => import('@pages/public/Home'));
const Container = lazy(() => import('@pages/public/Container'));

let publicRoutes = {path: '/', element: <Container/>, children: [
   { index: true, element: <Home />},
]}

export default publicRoutes;