import { FC, memo, useMemo } from 'react';

import { CustomerAcquisition } from '@/entities/Customer';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

import { getPageHeaderItems } from '../../model/selectors/getPageHeaderItems';

import cls from './PageHeader.module.scss';

interface PageHeaderProps {
  className?: string;
}

export const PageHeader: FC<PageHeaderProps> = memo(
  (props: PageHeaderProps) => {
    const { className } = props;

    const pageHeaderItems = useMemo(getPageHeaderItems, []);

    return (
      <Card className={classNames(cls.PageHeader, {}, [className])}>
        <HStack justify="between" max>
          {pageHeaderItems.map(({ Icon, text, number, delta, avatars }) => (
            <CustomerAcquisition
              key={text}
              Svg={Icon}
              number={number}
              text={text}
              percentageChangePerMonth={delta}
              lastUserAvatars={avatars}
            />
          ))}
        </HStack>
      </Card>
    );
  }
);
