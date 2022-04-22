import CardCollection from '../card-collection/card-collection';

import RolesList from './roles-list/roles-list';
import styles from './results.module.css';
import SelectedPermissionsList from './selected-permissions-list/selected-permissions-list';
import ExtraPermissionsList from './extra-permissions-list/extra-permissions-list';

export interface ResultsSectionProps {}

const Results = ({}: ResultsSectionProps) => {
  return (
    <CardCollection className={styles.container}>
      <RolesList />
      <SelectedPermissionsList />
      <ExtraPermissionsList />
    </CardCollection>
  );
};

export default Results;
