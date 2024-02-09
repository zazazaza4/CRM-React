import { FunctionComponent, SVGAttributes } from 'react';

export interface PageHeaderItemType {
  text: string;
  number: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  delta?: number;
  avatars?: string[];
}
