import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../Icon';
import { HStack } from '../Stack';
import { Text } from '../Text';

import cls from './Badge.module.scss';

export type BadgeTheme = 'default' | 'primary' | 'clear';

interface BadgeProps {
  className?: string;
  Svg?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text?: string;
  theme?: BadgeTheme;
}

export const Badge: FC<BadgeProps> = memo((props: BadgeProps) => {
  const { className, Svg, text, theme = 'default' } = props;

  return (
    <HStack
      gap="4"
      className={classNames(cls.Badge, {}, [className, cls[theme]])}
    >
      {Svg && <Icon Svg={Svg} />}
      {text && (
        <Text text={text} size="size_s" theme="white" className={cls.Text} />
      )}
    </HStack>
  );
});
