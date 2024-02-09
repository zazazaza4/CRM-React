import { FC, memo, useMemo } from 'react';

import { CustomerSortField } from '@/entities/Customer';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';

// import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: CustomerSortField;
  onChangeSort: (newOrder: CustomerSortField) => void;
}

export const CustomerSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props: ArticleSortSelectorProps) => {
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
      <div className={classNames('ArticleSortSelector', {}, [className])}>
        <Select
          options={sortOptions}
          label="Sort By:"
          value={sort}
          onChange={onChangeSort}
        />
      </div>
    );
  }
);
