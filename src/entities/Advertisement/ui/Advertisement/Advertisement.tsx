import { FC, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './Advertisement.module.scss';

interface AdvertisementProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  children: ReactNode;
}

export const Advertisement: FC<AdvertisementProps> = (
  props: AdvertisementProps
) => {
  const { className, height, width, children } = props;

  return (
    <VStack
      justify="center"
      align="center"
      style={{
        width,
        height,
      }}
      className={classNames(cls.Advertisement, {}, [className])}
    >
      <VStack max justify="center" className={cls.content} align="center">
        {children}
      </VStack>
    </VStack>
  );
};
