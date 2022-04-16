import styled from 'styled-components';

import List from '../list/list';
import PermissionCard from './permission-card/permission-card';

export interface PermissionsListProps {}

const Container = styled(List)`
  background: ${(props) => props.theme.colors.background.primary};
`;

const PermissionsList = ({}: PermissionsListProps) => {
  return (
    <Container>
      <PermissionCard label="Manage sandbox users" />
      <PermissionCard
        label="Development provisioning profiles"
        permissions={[{ label: 'Create' }, { label: 'Delete' }]}
      />
    </Container>
  );
};

export default PermissionsList;
