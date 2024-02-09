import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo/Logo';
import { VStack } from '@/shared/ui/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Logo />
      <Button
        size={ButtonSize.L}
        isSquare
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        onClick={onToggle}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" gap="8" className={cls.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem item={item} isCollapsed={isCollapsed} key={item.path} />
        ))}
      </VStack>
      <div className={cls.switchers} />
    </aside>
  );
});