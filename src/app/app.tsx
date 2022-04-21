import { StrictMode } from 'react';

import PermissionsSection from '../components/permissions-section/permissions-section';
import ResultsSection from '../components/results-section/results-section';

import '../styles/main.css';

import styles from './app.module.css';

const App = () => {
  return (
    <StrictMode>
      <div className={styles.app}>
        <PermissionsSection />
        <ResultsSection />
      </div>
    </StrictMode>
  );
};

export default App;
