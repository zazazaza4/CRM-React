import { FC, memo } from 'react';
import ReactPaginate from 'react-paginate';

import { classNames } from '@/shared/lib/classNames/classNames';

import './Pagination.scss';

interface PaginationProps {
  className?: string;
  pageCount: number;
  onPageChange?: () => void;
}

export const Pagination: FC<PaginationProps> = memo(
  (props: PaginationProps) => {
    const { className, onPageChange, pageCount } = props;

    return (
      <div className={classNames('', {}, [className])}>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={onPageChange}
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    );
  }
);
