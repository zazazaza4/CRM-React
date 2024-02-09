import { FunctionComponent, SVGAttributes } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  isArrow?: boolean;
}
