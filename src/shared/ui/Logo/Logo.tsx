import { FC, memo } from 'react';

import { getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import LogoIcon from '@/shared/assets/icons/logo.svg';

import { AppLink } from '../AppLink';
import { Icon } from '../Icon';

import cls from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = memo((props: LogoProps) => {
  const { className } = props;

  return (
    <AppLink
      to={getRouteMain()}
      className={classNames(cls.Logo, {}, [className])}
    >
      <Icon Svg={LogoIcon} />
    </AppLink>
  );
});
