import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
}

export const ArticleList: FC<ArticleListProps> = memo(
  (props: ArticleListProps) => {
    const { className } = props;

    return (
      <HStack
        wrap="wrap"
        className={classNames(cls.ArticleList, {}, [className])}
      >
        <ArticleListItem key={1} />
        <ArticleListItem key={2} />
        <ArticleListItem key={3} />
        <ArticleListItem key={4} />
      </HStack>
    );
  }
);
