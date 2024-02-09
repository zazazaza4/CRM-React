import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Status } from '@/shared/ui/Status';
import { Table } from '@/shared/ui/Table';

interface CustomerTableProps {
  className?: string;
}

export const CustomerTable: FC<CustomerTableProps> = memo(
  (props: CustomerTableProps) => {
    const { className } = props;

    const columns = [
      { title: 'Customer Name' },
      { title: 'Company' },
      { title: 'Phone Number' },
      { title: 'Email' },
      { title: 'Country' },
      { title: 'Status' },
    ];

    const data = [
      {
        id: '1',
        content: {
          'Customer Name': 'Jane Cooper',
          Company: 'Microsoft',
          'Phone Number': '(225) 555-0118',
          Email: 'jane@microsoft.com',
          Country: 'United States',
          Status: <Status value="Active" />,
        },
      },
      {
        id: '2',
        content: {
          'Customer Name': 'Floyd Miles',
          Company: 'Yahoo',
          'Phone Number': '(205) 555-0100',
          Email: 'floyd@yahoo.com',
          Country: 'Kiribati',
          Status: <Status value="Inactive" />,
        },
      },
      {
        id: '3',
        content: {
          'Customer Name': 'Ronald Richards',
          Company: 'Adobe',
          'Phone Number': '(302) 555-0107',
          Email: 'ronald@adobe.com',
          Country: 'Israel',
          Status: <Status value="Inactive" />,
        },
      },
      {
        id: '4',
        content: {
          'Customer Name': 'Marvin McKinney',
          Company: 'Tesla',
          'Phone Number': '(252) 555-0126',
          Email: 'marvin@tesla.com',
          Country: 'Iran',
          Status: <Status value="Active" />,
        },
      },
      {
        id: '5',
        content: {
          'Customer Name': 'Jerome Bell',
          Company: 'Google',
          'Phone Number': '(629) 555-0129',
          Email: 'jerome@google.com',
          Country: 'Réunion',
          Status: <Status value="Active" />,
        },
      },
      {
        id: '6',
        content: {
          'Customer Name': 'Kathryn Murphy',
          Company: 'Microsoft',
          'Phone Number': '(406) 555-0120',
          Email: 'kathryn@microsoft.com',
          Country: 'Curaçao',
          Status: <Status value="Active" />,
        },
      },
      {
        id: '7',
        content: {
          'Customer Name': 'Jacob Jones',
          Company: 'Yahoo',
          'Phone Number': '(208) 555-0112',
          Email: 'jacob@yahoo.com',
          Country: 'Brazil',
          Status: <Status value="Active" />,
        },
      },
      {
        id: '8',
        content: {
          'Customer Name': 'Kristin Watson',
          Company: 'Facebook',
          'Phone Number': '(704) 555-0127',
          Email: 'kristin@facebook.com',
          Country: 'Åland Islands',
          Status: <Status value="Inactive" />,
        },
      },
    ];

    return (
      <div className={classNames('', {}, [className])}>
        <Table columns={columns} data={data} />
      </div>
    );
  }
);
