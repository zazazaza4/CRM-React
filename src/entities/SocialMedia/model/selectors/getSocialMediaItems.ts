import FacebookIcon from '@/shared/assets/icons/facebook.svg';
import GmailIcon from '@/shared/assets/icons/gmail.svg';
import InstagramIcon from '@/shared/assets/icons/instagram.svg';
import TwitterIcon from '@/shared/assets/icons/twitter.svg';
import WifiIcon from '@/shared/assets/icons/wifi.svg';
import YoutubeIcon from '@/shared/assets/icons/youtube.svg';

import { SocialMediaItemType } from '../types/socialMedia';

export const getSocialMediaItems = (): SocialMediaItemType[] => [
  {
    path: 'https://www.facebook.com/',
    Svg: FacebookIcon,
  },
  {
    path: 'https://twitter.com/',
    Svg: TwitterIcon,
  },
  {
    path: 'https://www.instagram.com/',
    Svg: InstagramIcon,
  },
  {
    path: 'https://www.youtube.com/',
    Svg: YoutubeIcon,
  },
  {
    path: 'https://mail.google.com/mail/u/0/',
    Svg: GmailIcon,
  },
  {
    path: 'https://mail.google.com',
    Svg: WifiIcon,
  },
];
