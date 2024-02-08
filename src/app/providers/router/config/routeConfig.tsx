import { Navigate } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';

import { AppRoutes, getRouteMain } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <Navigate to={getRouteMain()} />,
  },
};
