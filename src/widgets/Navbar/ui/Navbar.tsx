import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import SearchIcon from '@/shared/assets/icons/search.svg';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  return (
    <HStack
      max
      as="header"
      justify="between"
      className={classNames(cls.Navbar, {}, [className])}
    >
      <Text
        size="size_l"
        weight="medium"
        theme="black"
        title="Hello Evano 👋🏼,"
      />
      <Input
        className={cls.search}
        placeholder="Search for…"
        type="search"
        Svg={SearchIcon}
      />
    </HStack>
  );
});
