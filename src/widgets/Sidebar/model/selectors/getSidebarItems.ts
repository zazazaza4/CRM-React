import { getRouteMain } from '@/shared/const/router';

import SquareIcon from '@/shared/assets/icons/3d-square.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = () => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Dashboard',
      Icon: SquareIcon,
    },
    {
      path: getRouteMain(),
      text: 'Product',
      Icon: SquareIcon,
    },
    {
      path: getRouteMain(),
      text: 'Customers',
      Icon: SquareIcon,
    },
    {
      path: getRouteMain(),
      text: 'Income',
      Icon: SquareIcon,
    },
    {
      path: getRouteMain(),
      text: 'Promote',
      Icon: SquareIcon,
    },
    {
      path: getRouteMain(),
      text: 'Help',
      Icon: SquareIcon,
    },
  ];

  return sidebarItemList;
};
