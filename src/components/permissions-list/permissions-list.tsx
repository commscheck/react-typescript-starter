import CardCollection from '../card-collection/card-collection';
import List from '../list/list';
import ListItem from '../list/list-item/list-item';
import ListSection from '../list/list-section/list-section';

import styles from './permissions-list.module.css';

export interface PermissionsListProps {}

const PermissionsList = ({}: PermissionsListProps) => {
  return (
    <CardCollection className={styles.container}>
      <List title="Agreements, Tax, & Banking">
        <ListItem
          label={
            <label htmlFor="manage">Manage agreements, tax, and banking</label>
          }
          accessory={<input type="checkbox" id="manage" />}
        />
        <ListItem
          label={<label htmlFor="sign">Sign agreements</label>}
          accessory={<input type="checkbox" id="sign" />}
        />
      </List>
      <List
        title={<label htmlFor="sandbox">Manage App Store sandbox users</label>}
        accessory={<input type="checkbox" id="sandbox" />}
      />
      <List title="Certificates & Signing">
        <ListSection title="Development">
          <ListItem
            label={
              <label htmlFor="create">
                Create development provisioning profiles
              </label>
            }
            accessory={<input type="checkbox" id="create" />}
          />
          <ListItem
            label={
              <label htmlFor="delete">
                Delete development provisioning profiles
              </label>
            }
            accessory={<input type="checkbox" id="delete" />}
          />
        </ListSection>
        <ListSection title="Distribution">
          <ListItem
            label={
              <label htmlFor="distribution">
                Create and delete distribution provisioning profiles
              </label>
            }
            accessory={<input type="checkbox" id="distribution" />}
          />
        </ListSection>
      </List>
    </CardCollection>
  );
};

export default PermissionsList;
