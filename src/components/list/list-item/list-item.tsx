import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './list-item.module.css';

export interface ListItemProps {
  className?: string;
  label: ReactNode;
  accessory?: ReactNode;
}

const ListItem = ({ className, label, accessory }: ListItemProps) => {
  return (
    <li className={classNames(className, styles['list-item'])}>
      {label}
      {accessory}
    </li>
  );
};

export default ListItem;
