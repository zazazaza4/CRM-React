import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <VStack gap="8" className={classNames(cls.PageError, {}, [className])}>
      <Text title="Some went wrong" />
      <Button onClick={reloadPage}>Reload page</Button>
    </VStack>
  );
};
