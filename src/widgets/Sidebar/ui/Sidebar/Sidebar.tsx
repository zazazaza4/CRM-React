import { memo, useEffect, useMemo, useState } from 'react';

import { AvatarDropdown } from '@/features/avatarDropdown';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Logo } from '@/shared/ui/Logo/Logo';
import { VStack } from '@/shared/ui/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { AccessPro } from '../AccessPro/AccessPro';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarItemList = useMemo(getSidebarItems, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VStack
      as="aside"
      align="center"
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Logo isCollapsed={isCollapsed} className={cls.logo} />
      <VStack role="navigation" gap="8" className={cls.items}>
        {sidebarItemList.map((item, index) => (
          <SidebarItem
            item={item}
            isActive={index === 2}
            isCollapsed={isCollapsed}
            key={item.text}
          />
        ))}
      </VStack>
      <AccessPro className={cls.access} />
      <AvatarDropdown className={cls.avatar} isCollapsed={isCollapsed} />
    </VStack>
  );
});
