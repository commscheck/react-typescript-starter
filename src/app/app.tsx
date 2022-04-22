import { StrictMode } from 'react';
import PermissionsList from '../components/permissions-list/permissions-list';
import Results from '../components/results/results';

import '../styles/main.css';

import styles from './app.module.css';

const App = () => {
  return (
    <StrictMode>
      <div className={styles.app}>
        <PermissionsList />
        <Results />
      </div>
    </StrictMode>
  );
};

export default App;
