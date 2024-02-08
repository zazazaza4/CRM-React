import { FC, memo, useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Badge } from '@/shared/ui/Badge';
import { Overlay } from '@/shared/ui/Overlay';
import { BarRating, CircleRating } from '@/shared/ui/Rating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import AndroidIcon from '@/shared/assets/icons/android.svg';
import AppleIcon from '@/shared/assets/icons/apple.svg';
import DownloadIcon from '@/shared/assets/icons/download.svg';
import ArticleBg from '@/shared/assets/images/article-bg.png';
import ArticleImage from '@/shared/assets/images/article-image.png';

import { getArticleBannerItems } from '../../model/selectors/getArticleBannerItems';

import cls from './ArticleBanner.module.scss';

interface ArticleBannerProps {
  className?: string;
}

export const ArticleBanner: FC<ArticleBannerProps> = memo(
  (props: ArticleBannerProps) => {
    const { className } = props;
    const items = useMemo(getArticleBannerItems, []);
    const [rating, setRating] = useState(1);

    const onSelectRating = (itemsCount: number) => {
      setRating(itemsCount);
    };

    return (
      <VStack className={classNames(cls.ArticleBanner, {}, [className])}>
        <HStack
          max
          className={cls.top}
          style={{
            backgroundImage: `url(${ArticleBg})`,
          }}
        >
          <Overlay className={cls.overlay} />
          <HStack max className={cls.topContent}>
            <AppImage src={ArticleImage} className={cls.image} />
            <VStack gap="8">
              <Text
                size="size_l"
                weight="bold"
                title="Lorem Ipsum is simply dummy"
                theme="white"
              />
              <HStack gap="8" className={cls.categories}>
                <Badge Svg={AndroidIcon} text="Android" />
                <Badge Svg={AppleIcon} text="iOS" />
                <Badge
                  theme="primary"
                  Svg={DownloadIcon}
                  text="Download on PC"
                />
              </HStack>
            </VStack>
            <HStack className={cls.rating}>
              <CircleRating size={85} rating={6.2} />
              <VStack>
                <Text theme="white" size="size_l" text="Players" />
                <Text
                  weight="medium"
                  size="size_m"
                  theme="white"
                  text="12 votes"
                />
                <HStack>
                  <Text
                    size="size_m"
                    theme="white"
                    weight="bold"
                    text="Your rating:"
                  />
                  <Text
                    className={cls.ratingNumber}
                    theme="gradient_orange"
                    weight="bold"
                    text={`${rating}`}
                  />
                </HStack>
              </VStack>
            </HStack>
          </HStack>
        </HStack>
        <HStack justify="between" max className={cls.bottom}>
          <HStack gap="40" className={cls.menu}>
            {items.map(({ path, text }, index) => (
              <AppLink key={path} to={path}>
                <Text
                  text={text}
                  className={classNames(
                    cls.menuItem,
                    {
                      [cls.firstMenuItem]: index === 0,
                    },
                    []
                  )}
                />
              </AppLink>
            ))}
          </HStack>
          <BarRating
            onSelect={onSelectRating}
            selectedItems={rating}
            className={cls.barRating}
          />
        </HStack>
      </VStack>
    );
  }
);
