import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import adminRoutes from '@pages/admin/router';
import publicRoutes from '@pages/public/router';
const Control = lazy(() => import('@pages/public/Control'));

let pageRoutes = [adminRoutes, publicRoutes,
   { path: 'control', element: <Control /> },
]

const AppRoutes =  () => useRoutes(pageRoutes);

export default AppRoutes;
