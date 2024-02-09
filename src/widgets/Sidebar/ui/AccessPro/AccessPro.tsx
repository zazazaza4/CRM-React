import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './AccessPro.module.scss';

interface AccessProProps {
  className?: string;
}

export const AccessPro: FC<AccessProProps> = memo((props: AccessProProps) => {
  const { className } = props;

  return (
    <VStack
      align="center"
      justify="center"
      className={classNames(cls.AccessPro, {}, [className])}
    >
      <Text
        theme="white"
        align="center"
        className={cls.text}
        text="Upgrade to  PRO to get access all Features!"
        weight="semi-bold"
      />
      <Button className={cls.button}>Get Pro Now!</Button>
    </VStack>
  );
});
