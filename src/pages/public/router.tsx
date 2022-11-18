import { lazy } from 'react';
const Home = lazy(() => import('@pages/public/Home'));
const AllProduct = lazy(() => import('@pages/public/AllProduct'));
const Container = lazy(() => import('@pages/public/Container'));

let publicRoutes = {path: '/', element: <Container/>, children: [
   { index: true, element: <Home />},
   { path: 'item', element: <AllProduct />},
]}

export default publicRoutes;