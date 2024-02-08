import { memo, useMemo } from 'react';

import { Theme } from '@/shared/const/theme';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = useMemo(() => theme === Theme.DARK, [theme]);

  const mods: Mods = {
    [cls.dark]: isDark,
  };

  const Svg = isDark ? DarkIcon : LightIcon;
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <VStack
        justify="center"
        align="center"
        className={classNames(cls.icon, mods, [])}
      >
        <Icon Svg={Svg} />
      </VStack>
    </Button>
  );
});
