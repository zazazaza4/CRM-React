import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import ChevronIcon from '@/shared/assets/icons/chevron-right.svg';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed?: boolean;
  isActive?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ item, isCollapsed, isActive }: SidebarItemProps) => {
    return (
      <AppLink
        theme={AppLinkTheme.INVERTED}
        to={item.path}
        className={classNames(cls.item, {
          [cls.collapsed]: isCollapsed,
          [cls.active]: isActive,
        })}
      >
        <HStack max gap="14">
          <item.Icon className={cls.icon} />
          <Text text={item.text} className={cls.link} />
          <ChevronIcon className={cls.arrow} />
        </HStack>
      </AppLink>
    );
  }
);
