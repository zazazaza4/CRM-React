import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import TimeIcon from '@/shared/assets/icons/time.svg';
import UserIcon from '@/shared/assets/icons/user.svg';
import ArticleImage from '@/shared/assets/images/article-item.png';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
  (props: ArticleListItemProps) => {
    const { className } = props;

    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className])}>
        <VStack>
          <AppImage className={cls.image} src={ArticleImage} />
          <Text
            max
            weight="bold"
            title="Lorem Ipsum is simply dummy"
            theme="blue"
            align="center"
          />
          <HStack gap="20" max justify="center" className={cls.info}>
            <Badge theme="clear" Svg={UserIcon} text="Alco" />
            <Badge theme="clear" Svg={TimeIcon} text="26 janvier 2023" />
          </HStack>
        </VStack>
      </Card>
    );
  }
);
