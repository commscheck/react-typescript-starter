import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './card-collection.module.css';

export interface CardCollectionProps {
  className?: string;
  children?: ReactNode;
}

const CardCollection = ({ className, children }: CardCollectionProps) => {
  return (
    <div className={classNames(styles.collection, className)}>{children}</div>
  );
};

export default CardCollection;
