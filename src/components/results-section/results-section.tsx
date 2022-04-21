import CardCollection from '../card-collection/card-collection';
import ListCard from '../list-card/list-card';

import styles from './results-section.module.css';

export interface ResultsSectionProps {}

const ResultsSection = ({}: ResultsSectionProps) => {
  return (
    <CardCollection className={styles.container}>
      <ListCard
        className={styles.card}
        heading="App Store Connect roles"
        children={[
          { label: 'Marketing' },
          { label: 'Access to Certificates, Identifiers & Profiles' },
        ]}
      />
    </CardCollection>
  );
};

export default ResultsSection;
