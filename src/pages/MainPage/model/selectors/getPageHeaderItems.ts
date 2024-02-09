import MonitorIcon from '@/shared/assets/icons/monitor.svg';
import TwoUserIcon from '@/shared/assets/icons/profile-2user.svg';
import ProfileTickIcon from '@/shared/assets/icons/profile-tick.svg';
import Avatar1Img from '@/shared/assets/images/avatar_1.png';
import Avatar2Img from '@/shared/assets/images/avatar_2.png';
import Avatar3Img from '@/shared/assets/images/avatar_3.png';
import Avatar4Img from '@/shared/assets/images/avatar_4.png';
import Avatar5Img from '@/shared/assets/images/avatar_5.png';

import { PageHeaderItemType } from '../types/pageHeader';

export const getPageHeaderItems = (): PageHeaderItemType[] => [
  {
    text: 'Total Customers',
    Icon: TwoUserIcon,
    number: '5,423',
    delta: 16,
  },
  {
    text: 'Members',
    Icon: ProfileTickIcon,
    number: '1,893',
    delta: -1,
  },
  {
    text: 'Active Now',
    Icon: MonitorIcon,
    number: '189',
    avatars: [Avatar1Img, Avatar2Img, Avatar3Img, Avatar4Img, Avatar5Img],
  },
];
