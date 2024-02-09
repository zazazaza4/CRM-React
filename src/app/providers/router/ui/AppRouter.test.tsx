import { screen } from '@testing-library/react';

import { getRouteMain } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
  test('MainPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteMain(),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('not found', async () => {
    componentRender(<AppRouter />, {
      route: '/afsfsfsfdsfsdfsfdsd',
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });
});
