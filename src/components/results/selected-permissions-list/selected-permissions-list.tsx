import List from '../../list/list';
import ListSection from '../../list/list-section/list-section';
import ListItem from '../../list/list-item/list-item';

const SelectedPermissionsList = () => {
  return (
    <List title="Selected permissions" startsCollapsed={true}>
      <ListSection title="Certificates & Signing">
        <ListItem label="Create and delete distribution provisioning profiles" />
      </ListSection>
    </List>
  );
};

export default SelectedPermissionsList;
