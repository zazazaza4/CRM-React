import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ item, isCollapsed }: SidebarItemProps) => {
    return (
      <AppLink
        theme={AppLinkTheme.INVERTED}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{item.text}</span>
      </AppLink>
    );
  }
);
