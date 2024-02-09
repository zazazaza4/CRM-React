import { FC, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children?: ReactNode;
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const { className, children } = props;

  return (
    <main
      data-testid={props['data-testid'] ?? 'Page'}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
    </main>
  );
};
