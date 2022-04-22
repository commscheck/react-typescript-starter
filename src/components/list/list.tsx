import { ReactElement, ReactNode } from 'react';
import useToggle from '../../hooks/useToggle';

import { ListItemProps } from './list-item/list-item';
import { ListSectionProps } from './list-section/list-section';

import styles from './list.module.css';

export interface ListProps {
  title: ReactNode;
  accessory?: ReactNode;
  collapsable?: boolean;
  startsCollapsed?: boolean;
  children?:
    | ReactElement<ListItemProps | ListSectionProps>
    | ReactElement<ListItemProps | ListSectionProps>[];
}

const List = ({
  title,
  accessory,
  collapsable,
  startsCollapsed,
  children,
}: ListProps) => {
  const [collapsed, toggleCollapsed] = useToggle(startsCollapsed);
  const allowCollapsing = collapsable || startsCollapsed;

  const handleHeadingClick = () => {
    allowCollapsing && toggleCollapsed();
  };

  return (
    <div className={styles.list}>
      <h4 className={styles.title} onClick={handleHeadingClick}>
        {title}
        {accessory}
      </h4>
      {!collapsed && children && <ul>{children}</ul>}
    </div>
  );
};

export default List;
