import { memo, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

export type IconTheme = 'primary' | 'white';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  theme?: IconTheme;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo(
  ({ className, theme = 'primary', Svg, ...otherProps }: IconProps) => (
    <Svg
      className={classNames(cls.Icon, {}, [className, cls[theme]])}
      {...otherProps}
    />
  )
);
