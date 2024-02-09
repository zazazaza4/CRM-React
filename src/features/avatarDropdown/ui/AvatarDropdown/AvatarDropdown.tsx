import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import AvatarImg from '@/shared/assets/images/avatar.png';

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
  isCollapsed?: boolean;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo(
  (props: AvatarDropdownProps) => {
    const { className, isCollapsed } = props;

    return (
      <HStack
        className={classNames(
          cls.AvatarDropdown,
          {
            [cls.collapsed]: isCollapsed,
          },
          [className]
        )}
      >
        <Avatar src={AvatarImg} alt="user" />
        <VStack className={cls.info}>
          <Text text="Evano" weight="medium" theme="black" />
          <Text text="Project Manager" theme="dark-gray" size="size_s" />
        </VStack>
      </HStack>
    );
  }
);
