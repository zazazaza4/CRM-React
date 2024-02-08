import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

// import SearchIcon from '@/shared/assets/icons/search.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack max justify="between" className={cls.wrapper}>
        <Text text="Hello Evano 👋🏼," />

        <Input
          className={cls.search}
          placeholder="Search for…"
          type="search"
          // Svg={SearchIcon}
        />
      </HStack>
    </header>
  );
});
