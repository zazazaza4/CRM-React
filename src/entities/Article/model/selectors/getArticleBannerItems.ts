import { getRouteArticleDetails } from '@/shared/const/router';

import { ArticleBannerItemType } from '../types/article';

export const getArticleBannerItems = (): ArticleBannerItemType[] => [
  {
    path: getRouteArticleDetails('1'),
    text: 'Lorem Ipsum is simply dummy',
  },
  {
    path: getRouteArticleDetails('2'),
    text: 'Item',
  },
  {
    path: getRouteArticleDetails('3'),
    text: 'Item',
  },
  {
    path: getRouteArticleDetails('4'),
    text: 'Item',
  },
  {
    path: getRouteArticleDetails('5'),
    text: 'Item',
  },
];
