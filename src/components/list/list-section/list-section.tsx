import { Fragment, ReactElement } from 'react';
import ListItem, { ListItemProps } from '../list-item/list-item';

import styles from './list-section.module.css';

export interface ListSectionProps {
  title: string;
  children?:
    | string
    | ReactElement<ListItemProps>
    | Array<string | ReactElement<ListItemProps>>;
}

const ListSection = ({ title, children }: ListSectionProps) => {
  return (
    <li className={styles.section}>
      <h5>{title}</h5>
      <ul>
        {[children].flat(1).map((c, i) => (
          <Fragment key={i}>
            {typeof c === 'string' ? <ListItem label={c} /> : c}
          </Fragment>
        ))}
      </ul>
    </li>
  );
};

export default ListSection;
