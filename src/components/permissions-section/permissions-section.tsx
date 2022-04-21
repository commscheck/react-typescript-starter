import CardCollection from '../card-collection/card-collection';
import ListCard from '../list-card/list-card';

import styles from './permissions-section.module.css';

export interface PermissionsSection {}

const PermissionsSection = ({}: PermissionsSection) => {
  return (
    <CardCollection className={styles.container}>
      <ListCard
        className={styles.card}
        heading="Manage sandbox users"
        checkbox="unchecked"
      />
      <ListCard
        className={styles.card}
        heading="Provisioning profiles"
        children={[
          {
            section: 'Development',
            items: [
              {
                label: 'Create development provisioning profiles',
                checkbox: 'checked',
              },
              {
                label: 'Delete development provisioning profiles',
                checkbox: 'unchecked',
              },
            ],
          },
          {
            section: 'Distribution',
            items: [
              {
                label: 'Create and delete distribution provisioning profiles',
                checkbox: 'unchecked',
              },
            ],
          },
        ]}
      />
    </CardCollection>
  );
};

export default PermissionsSection;
