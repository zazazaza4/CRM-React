import { FC, memo } from 'react';

import { ArticleList } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleSimilarList.module.scss';

interface ArticleSimilarListProps {
  className?: string;
}

export const ArticleSimilarList: FC<ArticleSimilarListProps> = memo(
  (props: ArticleSimilarListProps) => {
    const { className } = props;

    return (
      <VStack
        gap="40"
        className={classNames(cls.ArticleSimilarList, {}, [className])}
      >
        <Text weight="bold" className={cls.title} title="Similar articles" />
        <ArticleList />
      </VStack>
    );
  }
);
