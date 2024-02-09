import { FC, memo } from 'react';

import { getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import LogoIcon from '@/shared/assets/icons/logo.svg';

import { AppLink } from '../AppLink';
import { Text } from '../Text';

import cls from './Logo.module.scss';

interface LogoProps {
  className?: string;
  isCollapsed?: boolean;
}

export const Logo: FC<LogoProps> = memo((props: LogoProps) => {
  const { className, isCollapsed } = props;

  if (isCollapsed) {
    return (
      <AppLink
        to={getRouteMain()}
        className={classNames(cls.Logo, {}, [className])}
      >
        <LogoIcon />
      </AppLink>
    );
  }

  return (
    <AppLink
      to={getRouteMain()}
      className={classNames(cls.Logo, {}, [className])}
    >
      <LogoIcon />
      <Text title="Dashboard" weight="semi-bold" size="size_xl" theme="black" />
      <Text className={cls.version} text="v.01" size="size_xs" />
    </AppLink>
  );
});
