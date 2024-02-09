import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Table.module.scss';

interface Column {
  title: string;
}

type Row = Record<string, React.ReactNode>;

interface Data {
  id: string;
  content: Row;
}

interface TableProps {
  className?: string;
  columns: Column[];
  data: Data[];
}

export const Table = (props: TableProps) => {
  const { className, columns, data } = props;

  return (
    <table className={classNames(cls.Table, {}, [className])}>
      <thead>
        <tr className={cls.headers}>
          {columns.map((column) => (
            <th key={column.title}> {column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className={cls.rows}>
            {columns.map((column, colIndex) => (
              <td key={`${row.id}-${colIndex}`}>{row.content[column.title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
