import { lazy } from 'react';
const Product = lazy(() => import('@pages/admin/Product'));
const Container = lazy(() => import('@pages/admin/Container'));
const StoreProduct = lazy(() => import('@pages/admin/Product/Store'));


let adminRoutes = {path: 'dashboard', element: <Container/>, children: [
   {path: 'product',children: [
      { index: true, element: <Product />},
      { path: 'add', element: <StoreProduct />},
   ]}
]}

export default adminRoutes;
