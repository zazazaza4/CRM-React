import { FC, memo, useCallback, useState } from 'react';

import { CustomerSortSelector } from '@/features/CustomerSort';

import { CustomerSortField, CustomerTable } from '@/entities/Customer';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Pagination } from '@/shared/ui/Pagination';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import SearchIcon from '@/shared/assets/icons/search.svg';

import cls from './CustomerBlock.module.scss';

interface CustomerBlockProps {
  className?: string;
}

export const CustomerBlock: FC<CustomerBlockProps> = memo(
  (props: CustomerBlockProps) => {
    const { className } = props;
    const [sort, setSort] = useState(CustomerSortField.NEWEST);

    const onChangeSort = useCallback((newSort: CustomerSortField) => {
      setSort(newSort);
    }, []);

    return (
      <Card className={classNames(cls.CustomerBlock, {}, [className])}>
        <HStack className={cls.filters} max justify="between">
          <VStack gap="8">
            <Text weight="semi-bold" theme="black" title="All Customers" />
            <Text text="Active Members" theme="green" />
          </VStack>
          <HStack gap="16">
            <Input
              className={cls.search}
              placeholder="Search for…"
              type="search"
              Svg={SearchIcon}
            />
            <CustomerSortSelector
              className={cls.selector}
              sort={sort}
              onChangeSort={onChangeSort}
            />
          </HStack>
        </HStack>
        <CustomerTable />
        <HStack max justify="between" className={cls.paginationWrapper}>
          <Text
            size="size_s"
            theme="light-gray-200"
            weight="medium"
            text="Showing data 1 to 8 of  256K entries"
          />
          <Pagination pageCount={40} className={cls.pagination} />
        </HStack>
      </Card>
    );
  }
);
