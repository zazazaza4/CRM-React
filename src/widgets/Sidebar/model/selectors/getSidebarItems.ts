import { getRouteMain } from '@/shared/const/router';

import SquareIcon from '@/shared/assets/icons/3d-square.svg';
import DiscountIcon from '@/shared/assets/icons/discount-shape.svg';
import KeyIcon from '@/shared/assets/icons/key-square.svg';
import MessageIcon from '@/shared/assets/icons/message-question.svg';
import UserIcon from '@/shared/assets/icons/user-square.svg';
import WalletIcon from '@/shared/assets/icons/wallet-money.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = (): SidebarItemType[] => [
  {
    path: getRouteMain(),
    text: 'Dashboard',
    Icon: KeyIcon,
  },
  {
    path: getRouteMain(),
    text: 'Product',
    Icon: SquareIcon,
    isArrow: true,
  },
  {
    path: getRouteMain(),
    text: 'Customers',
    Icon: UserIcon,
  },
  {
    path: getRouteMain(),
    text: 'Income',
    Icon: WalletIcon,
    isArrow: true,
  },
  {
    path: getRouteMain(),
    text: 'Promote',
    Icon: DiscountIcon,
    isArrow: true,
  },
  {
    path: getRouteMain(),
    text: 'Help',
    Icon: MessageIcon,
    isArrow: true,
  },
];
