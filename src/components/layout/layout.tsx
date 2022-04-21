import { ReactNode } from 'react';

import styles from './layout.module.css';

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
