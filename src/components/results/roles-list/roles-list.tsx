import List from '../../list/list';
import ListItem from '../../list/list-item/list-item';

const RolesList = () => {
  return (
    <List title="App Store Connect roles">
      <ListItem label="Marketing" />
      <ListItem label="Access to Certificates, Identifiers & Profiles" />
    </List>
  );
};

export default RolesList;
