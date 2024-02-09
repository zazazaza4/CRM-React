import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cls from './Status.module.scss';

type StatusValue = 'Active' | 'Inactive';

interface StatusProps {
  className?: string;
  value: StatusValue;
}

export const Status: FC<StatusProps> = memo((props: StatusProps) => {
  const { className, value } = props;

  return (
    <HStack
      className={classNames(
        cls.Status,
        {
          [cls.active]: value === 'Active',
          [cls.inactive]: value === 'Inactive',
        },
        [className]
      )}
    >
      <span className={cls.text}>{value}</span>
    </HStack>
  );
});
