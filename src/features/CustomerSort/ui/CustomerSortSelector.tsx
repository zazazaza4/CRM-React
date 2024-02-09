import { FC, memo, useMemo } from 'react';

import { CustomerSortField } from '@/entities/Customer';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';

interface CustomerSortSelectorProps {
  className?: string;
  sort: CustomerSortField;
  onChangeSort: (newOrder: CustomerSortField) => void;
}

export const CustomerSortSelector: FC<CustomerSortSelectorProps> = memo(
  (props: CustomerSortSelectorProps) => {
    const { onChangeSort, sort, className } = props;

    const sortOptions = useMemo<SelectOption<CustomerSortField>[]>(
      () => [
        {
          value: CustomerSortField.NEWEST,
          content: 'Newest',
        },
        {
          value: CustomerSortField.OLDEST,
          content: 'Oldest',
        },
      ],
      []
    );

    return (
      <div className={classNames('', {}, [className])}>
        <Select
          id="CustomerSortSelector"
          options={sortOptions}
          label="Sort By:"
          value={sort}
          onChange={onChangeSort}
        />
      </div>
    );
  }
);
